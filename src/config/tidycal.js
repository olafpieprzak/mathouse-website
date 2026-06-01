/**
 * ================================================================
 * MATHOUSE — KONFIGURACJA TIDYCAL (PRAWDZIWE DANE)
 * ================================================================
 * ID booking types i URL slugi pobrane z TidyCal API Olafa.
 *
 * UWAGA — STRUKTURA:
 * - 1 osoba i 2 osoby → bezpośrednia rezerwacja w TidyCal
 * - 3, 4, 5-6 osób → przekierowanie do /kontakt
 *   ("napisz, ustalimy termin grupowy")
 * ================================================================
 */

export const TIDYCAL_CONFIG = {
  bookingUrl: 'https://tidycal.com/mathouse',

  // === API URL (Cloudflare Worker) ===
  apiUrl: 'https://mathouse-tidycal-proxy.olafpieprzak.workers.dev',

  // === PŁATNOŚCI — 3 sposoby ===
  payment: {
    methods: [
      {
        id: 'cash',
        icon: '💵',
        name: 'Gotówka',
        badge: 'PREFEROWANE',
        desc: 'Najszybsze i najwygodniejsze',
        details: 'Na lekcji stacjonarnej w Ropczycach',
      },
      {
        id: 'blik',
        icon: '📱',
        name: 'BLIK na telefon',
        badge: 'NATYCHMIAST',
        desc: 'Bez prowizji, bez czekania',
        details: '570 840 416',
      },
      {
        id: 'transfer',
        icon: '🏦',
        name: 'Przelew na konto',
        badge: '',
        desc: 'Alior Bank · tytuł: IMIE NAZWISKO – DATA',
        details: '29 2490 0005 0000 4000 4840 6496',
        accountOwner: 'Olaf Pieprzak',
      },
    ],
    note: 'Płacisz po lekcji — bez prowizji, bez płatności online z góry, bez stresu.',
    invoiceEmail: 'olaf.mathouse@gmail.com',
    invoiceNote: 'Potrzebujesz faktury? Wyślij dane na olaf.mathouse@gmail.com',
  },

  // === BOOKING TYPES — 45 minut ===
  // PRAWDZIWE ID Z TidyCal (z API odpowiedzi z 17 maja)
  bookingTypes45: {
    individual: {
      id: 171914,
      slug: 'podstawowka-korepetycje-indywidualne-45',
      title: 'Podstawówka · 1 osoba · 45 min',
      duration: 45,
      price: 130,
      maxStudents: 1,
      // Domyślnie używamy podstawówki jako "indywidualne 45"
      // Klient na stronie wybiera poziom — patrz logika w BookingSelector
    },
    group2: {
      id: 179231,
      slug: 'podstawowka-korepetycje-w-grupie-2-osobowej',
      title: 'Podstawówka · 2 osoby · 45 min',
      duration: 45,
      price: 80,
      maxStudents: 2,
    },
    // 3-6 osób → kontakt, bez rezerwacji bezpośredniej
    group3: { contactOnly: true, price: 70, maxStudents: 3 },
    group4: { contactOnly: true, price: 60, maxStudents: 4 },
    group56: { contactOnly: true, price: 40, maxStudents: 6 },
  },

  // === BOOKING TYPES — 90 minut ===
  bookingTypes90: {
    individual: {
      id: 171915,
      slug: 'podstawowka-korepetycje-indywidualne-90',
      title: 'Podstawówka · 1 osoba · 90 min',
      duration: 90,
      price: 260,
      maxStudents: 1,
    },
    group2: {
      id: 179239,
      slug: 'podstawowka-korepetycje-w-grupie-2-osobowej-90',
      title: 'Podstawówka · 2 osoby · 90 min',
      duration: 90,
      price: 160,
      maxStudents: 2,
    },
    group3: { contactOnly: true, price: 140, maxStudents: 3 },
    group4: { contactOnly: true, price: 120, maxStudents: 4 },
    group56: { contactOnly: true, price: 80, maxStudents: 6 },
  },

  // === BOOKING TYPES — LICEUM 45 minut ===
  bookingTypesLiceum45: {
    individual: {
      id: 171905,
      slug: 'szkola-srednia-poziom-rozszerzony-korepetycje-indywidualne-45',
      title: 'Liceum · 1 osoba · 45 min',
      duration: 45,
      price: 130,
      maxStudents: 1,
    },
    group2: {
      id: 179229,
      slug: 'szkola-srednia-poziom-rozszerzony-korepetycje-w-grupie-2-osobowej',
      title: 'Liceum · 2 osoby · 45 min',
      duration: 45,
      price: 80,
      maxStudents: 2,
    },
    group3: { contactOnly: true, price: 70, maxStudents: 3 },
    group4: { contactOnly: true, price: 60, maxStudents: 4 },
    group56: { contactOnly: true, price: 40, maxStudents: 6 },
  },

  // === BOOKING TYPES — LICEUM 90 minut ===
  bookingTypesLiceum90: {
    individual: {
      id: 171909,
      slug: 'szkola-srednia-poziom-rozszerzony-korepetycje-indywidualne',
      title: 'Liceum · 1 osoba · 90 min',
      duration: 90,
      price: 260,
      maxStudents: 1,
    },
    group2: {
      id: 179240,
      slug: 'szkola-srednia-poziom-rozszerzony-korepetycje-w-grupie-2-osobowej-90',
      title: 'Liceum · 2 osoby · 90 min',
      duration: 90,
      price: 160,
      maxStudents: 2,
    },
    group3: { contactOnly: true, price: 140, maxStudents: 3 },
    group4: { contactOnly: true, price: 120, maxStudents: 4 },
    group56: { contactOnly: true, price: 80, maxStudents: 6 },
  },

  // === STUDIA — 45 minut ===
  bookingTypesStudia45: {
    individual: {
      id: 171916,
      slug: 'studia-wyzsze-korepetycje-indywidualne-45',
      title: 'Studia · 1 osoba · 45 min',
      duration: 45,
      price: 160,
      maxStudents: 1,
    },
    group2: {
      id: 179230,
      slug: 'studia-wyzsze-korepetycje-w-grupie-2-osobowej',
      title: 'Studia · 2 osoby · 45 min',
      duration: 45,
      price: 110,
      maxStudents: 2,
    },
    group3: { contactOnly: true, price: 100, maxStudents: 3 },
    group4: { contactOnly: true, price: 80, maxStudents: 4 },
    group56: { contactOnly: true, price: 50, maxStudents: 6 },
  },

  // === STUDIA — 90 minut ===
  bookingTypesStudia90: {
    individual: {
      id: 171920,
      slug: 'studia-wyzsze-korepetycje-indywidualne-90',
      title: 'Studia · 1 osoba · 90 min',
      duration: 90,
      price: 320,
      maxStudents: 1,
    },
    group2: {
      id: 179238,
      slug: 'studia-wyzsze-korepetycje-w-grupie-2-osobowej-90',
      title: 'Studia · 2 osoby · 90 min',
      duration: 90,
      price: 220,
      maxStudents: 2,
    },
    group3: { contactOnly: true, price: 200, maxStudents: 3 },
    group4: { contactOnly: true, price: 160, maxStudents: 4 },
    group56: { contactOnly: true, price: 100, maxStudents: 6 },
  },

  // === PRZEDMIOTY STUDIÓW ===
  studiaPrzedmioty: [
    'Analiza matematyczna',
    'Algebra liniowa',
    'Statystyka matematyczna',
    'Matematyka finansowa',
    'Matematyka w ekonomii',
    'Rachunek prawdopodobieństwa',
    'Matematyka dyskretna',
    'Geometria analityczna',
    'Równania różniczkowe',
    'Metody numeryczne',
  ],

  // === KONTAKT DLA GRUP 3+ OSÓB ===
  groupContact: {
    title: 'Grupa 3-6 osób na zamówienie',
    message: 'Dla grup 3, 4, 5-6 osobowych utworzę dla Was specjalny termin. Napisz do mnie — ustalimy datę, godzinę i miejsce.',
    contactUrl: '/kontakt?temat=grupa',
    emailSubject: 'Zapytanie o korepetycje grupowe (3-6 osób)',
  },

  fallback: {
    freeSlotsThisWeek: 3,
    occupancyPercent: 95,
  },
};

/**
 * Zwraca konfigurację dla wybranego poziomu, czasu i wielkości grupy
 */
export function getBookingType(level, duration, groupSize) {
  let source;

  if (level === 'studia') {
    source = duration === 90 ? TIDYCAL_CONFIG.bookingTypesStudia90 : TIDYCAL_CONFIG.bookingTypesStudia45;
  } else if (level === 'liceum-podst' || level === 'liceum-rozsz') {
    source = duration === 90 ? TIDYCAL_CONFIG.bookingTypesLiceum90 : TIDYCAL_CONFIG.bookingTypesLiceum45;
  } else {
    // szkola podstawowa
    source = duration === 90 ? TIDYCAL_CONFIG.bookingTypes90 : TIDYCAL_CONFIG.bookingTypes45;
  }

  const keyMap = {
    '1': 'individual',
    '2': 'group2',
    '3': 'group3',
    '4': 'group4',
    '56': 'group56',
  };
  return source[keyMap[groupSize]] || null;
}

/**
 * Buduje URL rezerwacji.
 * Jeśli booking type ma flagę "contactOnly" → zwraca URL do kontaktu.
 */
export function getBookingUrl(bookingType) {
  if (!bookingType) return TIDYCAL_CONFIG.bookingUrl;

  // Grupy 3+ osób — kierujemy do kontaktu
  if (bookingType.contactOnly) {
    return TIDYCAL_CONFIG.groupContact.contactUrl;
  }

  // Normalna rezerwacja
  if (!bookingType.slug || bookingType.slug.startsWith('PLACEHOLDER')) {
    return TIDYCAL_CONFIG.bookingUrl;
  }
  return `${TIDYCAL_CONFIG.bookingUrl}/${bookingType.slug}`;
}

/**
 * Pobiera dane scarcity z Workera (fallback gdy API niedostępne)
 */
export async function fetchAvailability() {
  try {
    const response = await fetch(`${TIDYCAL_CONFIG.apiUrl}/api/availability`, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    return await response.json();
  } catch (err) {
    console.warn('[TidyCal] API niedostępne, używam fallbacku:', err.message);
    return {
      free_slots_this_week: TIDYCAL_CONFIG.fallback.freeSlotsThisWeek,
      occupancy_percent: TIDYCAL_CONFIG.fallback.occupancyPercent,
      _fallback: true,
    };
  }
}
