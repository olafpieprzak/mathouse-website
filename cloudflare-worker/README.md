# MATHOUSE — TidyCal API Proxy (Cloudflare Worker)

Mały serwer w Cloudflare który czyta dane z TidyCal API bez ujawniania klucza publicznie.

## Co robi

- **`GET /api/availability`** — ile wolnych slotów w tym tygodniu + procent zapełnienia
- **`GET /api/upcoming-slots`** — sloty na najbliższe 14 dni
- **`GET /api/booking-types`** — lista typów rezerwacji (1 os, 2 os, 3 os, itd.)

Wszystko z **cache 5 min** — TidyCal odpowiada ~500ms, my serwujemy w 5ms.

## Wdrożenie (1× na początku)

### Krok 1: Zainstaluj wrangler (CLI Cloudflare)

```bash
cd cloudflare-worker
npm install
```

### Krok 2: Zaloguj się do Cloudflare

```bash
npx wrangler login
```

### Krok 3: Wgraj klucz API TidyCal jako sekret

```bash
npx wrangler secret put TIDYCAL_API_KEY
# Wklejasz klucz, Enter
```

### Krok 4: Wdrażaj

```bash
npx wrangler deploy
```

Worker będzie dostępny pod adresem typu:
`https://mathouse-tidycal-proxy.<twoj-username>.workers.dev`

### Krok 5: (Opcjonalnie) Custom domain

W Cloudflare Dashboard → Workers → Triggers → Add custom domain → `api.mathouse.pl`

Wtedy Worker dostępny pod `https://api.mathouse.pl/api/availability`.

## Test

```bash
curl https://mathouse-tidycal-proxy.<twoj-username>.workers.dev/api/availability
```

Powinno zwrócić:
```json
{
  "free_slots_this_week": 3,
  "occupancy_percent": 95,
  "next_available": "2026-05-16T16:00:00Z",
  "total_slots_this_week": 50
}
```

## Cache

Cloudflare cache trzyma odpowiedzi 5 minut. Po rezerwacji liczba wolnych slotów aktualizuje się max po 5 min.

Jeśli chcesz wymusić odświeżenie — w Cloudflare Dashboard → Caching → Purge Cache.

## Bezpieczeństwo

- Klucz API w **Secret** (niewidoczny nigdzie publicznie)
- CORS — Worker odpowiada tylko gdy origin = mathouse.pl
- Cache na serwerze Cloudflare (nie u klienta)
