/**
 * ================================================================
 * MATHOUSE — TidyCal API Proxy (Cloudflare Worker)
 * ================================================================
 * Cel: pośredniczyć między stroną mathouse.pl a TidyCal API
 *
 * Dlaczego potrzebny:
 * - TidyCal API wymaga klucza — NIE może być w kodzie strony (publiczny)
 * - Cloudflare Worker przechowuje klucz bezpiecznie i wywołuje API
 * - Cache: TidyCal odpowiada w ~500ms, my serwujemy w 5ms (cache 5 min)
 *
 * Endpointy:
 *   GET  /api/availability    → ile wolnych slotów w bieżącym tygodniu
 *   GET  /api/upcoming-slots  → najbliższe wolne terminy (dla "next 7 days")
 *   GET  /api/booking-types   → lista typów rezerwacji (1 os, 2 os, itd.)
 *
 * Konfiguracja (Cloudflare Dashboard → Workers → Settings → Variables):
 *   TIDYCAL_API_KEY  — klucz API z TidyCal (Secret)
 *   ALLOWED_ORIGIN   — domena strony (np. "https://mathouse.pl")
 * ================================================================
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // === CORS — pozwalamy tylko mathouse.pl wywoływać tego workera ===
    const allowedOrigin = env.ALLOWED_ORIGIN || 'https://mathouse.pl';
    const origin = request.headers.get('Origin') || '';
    const corsHeaders = {
      'Access-Control-Allow-Origin': isAllowedOrigin(origin, allowedOrigin) ? origin : allowedOrigin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    // Preflight OPTIONS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Tylko GET
    if (request.method !== 'GET') {
      return jsonResponse({ error: 'Method not allowed' }, 405, corsHeaders);
    }

    // === Routing ===
    try {
      if (url.pathname === '/api/availability') {
        return await handleAvailability(env, ctx, corsHeaders);
      }
      if (url.pathname === '/api/upcoming-slots') {
        return await handleUpcomingSlots(env, ctx, corsHeaders);
      }
      if (url.pathname === '/api/booking-types') {
        return await handleBookingTypes(env, ctx, corsHeaders);
      }
      if (url.pathname === '/' || url.pathname === '/api') {
        return jsonResponse({
          status: 'ok',
          service: 'MATHOUSE TidyCal Proxy',
          endpoints: ['/api/availability', '/api/upcoming-slots', '/api/booking-types'],
        }, 200, corsHeaders);
      }
      return jsonResponse({ error: 'Not found' }, 404, corsHeaders);
    } catch (err) {
      console.error('Worker error:', err);
      return jsonResponse({ error: 'Internal server error', message: err.message }, 500, corsHeaders);
    }
  },
};

/**
 * Sprawdza czy origin to mathouse.pl (lub *.mathouse.pl, lub localhost)
 */
function isAllowedOrigin(origin, allowedBase) {
  if (!origin) return false;
  // Pozwalamy na: główną domenę, subdomenę, localhost (dev)
  return (
    origin === allowedBase ||
    origin === 'https://mathouse.pl' ||
    origin === 'https://www.mathouse.pl' ||
    origin.endsWith('.pages.dev') ||  // Cloudflare Pages preview
    origin.startsWith('http://localhost:') ||
    origin.startsWith('http://127.0.0.1:')
  );
}

/**
 * GET /api/availability
 * Zwraca: ile wolnych slotów w bieżącym tygodniu + procent zapełnienia
 *
 * Odpowiedź:
 * {
 *   "free_slots_this_week": 3,
 *   "occupancy_percent": 95,
 *   "next_available": "2026-05-16T16:00:00Z",
 *   "total_slots_this_week": 50
 * }
 */
async function handleAvailability(env, ctx, corsHeaders) {
  // === Cache key (5 min) ===
  const cacheKey = new Request('https://cache.mathouse.pl/availability', { method: 'GET' });
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) {
    return new Response(cached.body, {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
    });
  }

  const apiKey = env.TIDYCAL_API_KEY;
  if (!apiKey) {
    return jsonResponse({ error: 'API key not configured' }, 500, corsHeaders);
  }

  // === Zakres: dzisiaj 00:00 → niedziela 23:59 ===
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = niedziela
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

  const startsAt = new Date(now);
  startsAt.setHours(0, 0, 0, 0);

  const endsAt = new Date(now);
  endsAt.setDate(now.getDate() + daysUntilSunday);
  endsAt.setHours(23, 59, 59, 999);

  // === Pobieramy listę booking types ===
  const bookingTypes = await fetchTidyCalBookingTypes(apiKey);
  if (!bookingTypes || bookingTypes.length === 0) {
    return jsonResponse({ error: 'No booking types found' }, 500, corsHeaders);
  }

  // === Bierzemy pierwszy booking type (zwykle główny — 45min indywidualne) ===
  // Jeśli masz wiele, można dostosować logikę
  const primaryType = bookingTypes[0];

  // === Pobieramy dostępne sloty na ten tydzień ===
  const slots = await fetchTidyCalTimeslots(apiKey, primaryType.id, startsAt, endsAt);

  // === Pobieramy istniejące rezerwacje (booked) na ten tydzień ===
  const bookings = await fetchTidyCalBookings(apiKey, startsAt, endsAt);

  const freeSlots = slots.length;
  const bookedSlots = bookings.length;
  const totalSlots = freeSlots + bookedSlots;
  const occupancyPercent = totalSlots > 0 ? Math.round((bookedSlots / totalSlots) * 100) : 0;
  const nextAvailable = slots.length > 0 ? slots[0].starts_at : null;

  const result = {
    free_slots_this_week: freeSlots,
    occupancy_percent: occupancyPercent,
    next_available: nextAvailable,
    total_slots_this_week: totalSlots,
    week_start: startsAt.toISOString(),
    week_end: endsAt.toISOString(),
    booking_type: {
      id: primaryType.id,
      title: primaryType.title,
      duration_minutes: primaryType.duration_minutes,
    },
  };

  const response = jsonResponse(result, 200, { ...corsHeaders, 'X-Cache': 'MISS' });

  // Cache na 5 minut
  const cacheResponse = response.clone();
  cacheResponse.headers.set('Cache-Control', 'public, max-age=300');
  ctx.waitUntil(cache.put(cacheKey, cacheResponse));

  return response;
}

/**
 * GET /api/upcoming-slots
 * Zwraca: najbliższe 7 dni — listę wolnych slotów per dzień
 */
async function handleUpcomingSlots(env, ctx, corsHeaders) {
  const cacheKey = new Request('https://cache.mathouse.pl/upcoming-slots', { method: 'GET' });
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) {
    return new Response(cached.body, {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
    });
  }

  const apiKey = env.TIDYCAL_API_KEY;
  if (!apiKey) return jsonResponse({ error: 'API key not configured' }, 500, corsHeaders);

  const now = new Date();
  const endsAt = new Date(now);
  endsAt.setDate(now.getDate() + 42); // 6 tygodni = bezpieczne dla widoku miesięcznego

  const bookingTypes = await fetchTidyCalBookingTypes(apiKey);
  if (!bookingTypes || bookingTypes.length === 0) {
    return jsonResponse({ error: 'No booking types found' }, 500, corsHeaders);
  }

  // Pobieramy sloty dla wszystkich booking types
  const allSlotsPerType = {};
  for (const bt of bookingTypes) {
    const slots = await fetchTidyCalTimeslots(apiKey, bt.id, now, endsAt);
    allSlotsPerType[bt.id] = {
      title: bt.title,
      duration_minutes: bt.duration_minutes,
      slots: slots.map((s) => ({
        starts_at: s.starts_at,
        ends_at: s.ends_at,
      })),
    };
  }

  // Grupujemy po dniach (z głównego booking type)
  const mainSlots = allSlotsPerType[bookingTypes[0].id]?.slots || [];
  const slotsByDay = {};
  mainSlots.forEach((slot) => {
    const day = slot.starts_at.split('T')[0];
    if (!slotsByDay[day]) slotsByDay[day] = [];
    slotsByDay[day].push(slot);
  });

  const result = {
    by_booking_type: allSlotsPerType,
    by_day: slotsByDay,
    booking_types: bookingTypes.map((bt) => ({
      id: bt.id,
      title: bt.title,
      duration_minutes: bt.duration_minutes,
      url_slug: bt.url_slug,
    })),
  };

  const response = jsonResponse(result, 200, { ...corsHeaders, 'X-Cache': 'MISS' });
  const cacheResponse = response.clone();
  cacheResponse.headers.set('Cache-Control', 'public, max-age=300');
  ctx.waitUntil(cache.put(cacheKey, cacheResponse));

  return response;
}

/**
 * GET /api/booking-types
 * Zwraca: listę typów rezerwacji (1 os, 2 os, 3 os, itd.)
 */
async function handleBookingTypes(env, ctx, corsHeaders) {
  const cacheKey = new Request('https://cache.mathouse.pl/booking-types', { method: 'GET' });
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) {
    return new Response(cached.body, {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
    });
  }

  const apiKey = env.TIDYCAL_API_KEY;
  if (!apiKey) return jsonResponse({ error: 'API key not configured' }, 500, corsHeaders);

  const types = await fetchTidyCalBookingTypes(apiKey);
  const result = {
    booking_types: types.map((bt) => ({
      id: bt.id,
      title: bt.title,
      description: bt.description,
      duration_minutes: bt.duration_minutes,
      price: bt.price,
      url_slug: bt.url_slug,
      booking_url: `https://tidycal.com/mathouse/${bt.url_slug}`,
    })),
  };

  const response = jsonResponse(result, 200, { ...corsHeaders, 'X-Cache': 'MISS' });
  const cacheResponse = response.clone();
  cacheResponse.headers.set('Cache-Control', 'public, max-age=3600'); // 1h, rzadko się zmienia
  ctx.waitUntil(cache.put(cacheKey, cacheResponse));

  return response;
}

/**
 * === TIDYCAL API CALLS ===
 */

const TIDYCAL_API_BASE = 'https://tidycal.com/api';

async function fetchTidyCalBookingTypes(apiKey) {
  const response = await fetch(`${TIDYCAL_API_BASE}/booking-types`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`TidyCal booking-types error: ${response.status} — ${text}`);
  }
  const data = await response.json();
  return data.data || data; // TidyCal API zwraca {data: [...]} lub bezpośrednio tablicę
}

async function fetchTidyCalTimeslots(apiKey, bookingTypeId, startsAt, endsAt) {
  const url = new URL(`${TIDYCAL_API_BASE}/booking-types/${bookingTypeId}/timeslots`);
  // Format TidyCal API: 2026-05-17T00:00:00Z (BEZ milisekund!)
  url.searchParams.set('starts_at', formatTidyCalDate(startsAt));
  url.searchParams.set('ends_at', formatTidyCalDate(endsAt));

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`TidyCal timeslots error: ${response.status} — ${text}`);
  }
  const data = await response.json();
  return data.data || data;
}

/**
 * Formatuje datę w formacie TidyCal: YYYY-MM-DDTHH:MM:SSZ (bez milisekund)
 * toISOString() zwraca z milisekundami (.000Z) → TidyCal nie akceptuje
 */
function formatTidyCalDate(date) {
  return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
}

async function fetchTidyCalBookings(apiKey, startsAt, endsAt) {
  const url = new URL(`${TIDYCAL_API_BASE}/bookings`);
  url.searchParams.set('starts_at', formatTidyCalDate(startsAt));
  url.searchParams.set('ends_at', formatTidyCalDate(endsAt));

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`TidyCal bookings error: ${response.status} — ${text}`);
  }
  const data = await response.json();
  return data.data || data;
}

/**
 * === HELPERS ===
 */

function jsonResponse(body, status, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  });
}
