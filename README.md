# 🏠 MATHOUSE — strona internetowa z automatyzacją

> **Cześć Olaf!** Strona MATHOUSE z **pełną automatyzacją TidyCal**.
> Płatność po lekcji (gotówka / BLIK) · Wybór 45 / 90 min · 10+ przedmiotów ze studiów.

---

## 🎯 Co tu jest

### 9 podstron:

1. **Strona główna** (`/`) — kursy + mini scarcity z licznikiem wolnych miejsc
2. **Kursy** (`/kursy`) — lista wszystkich kursów
3. **Kurs przykład** (`/kursy/logarytmy`) — template pojedynczego kursu
4. **Korepetycje** (`/korepetycje`) — **pełna automatyzacja TidyCal** ⭐
5. **Arkusze CKE** (`/arkusze`) — darmowe materiały
6. **Sklep** (`/sklep`) — kompendia + mapy myśli
7. **Kalkulatory** (`/kalkulatory`) — placeholder
8. **O mnie** (`/o-mnie`) — historia, timeline, wizja
9. **Kontakt** (`/kontakt`) — formularz, mapa, współpraca

### 🆕 Najnowsze zmiany (sesja 4)

**1. Płatność po lekcji — gotówka preferowana**
- Sekcja "Jak to działa" krok 3
- Wyraźny pasek pod cennikiem
- W BookingSelector pod podsumowaniem
- W FAQ

**2. Wybór długości lekcji (45 / 90 min)**
- BookingSelector ma teraz 3 kroki: poziom → długość → grupa
- 90 min z lekką zniżką (np. 240 zł zamiast 260 zł)
- Studia automatycznie wymuszają 90 min
- Każdy wariant 45 i 90 = osobny booking type w TidyCal

**3. Przedmioty ze studiów**
- Lista 10 przedmiotów wyświetlana w info na korepetycjach
- W BookingSelector po wyborze "Studia" pojawia się lista
- Jedna cena niezależnie od przedmiotu
- Link "Inny przedmiot? Napisz →" kieruje do kontaktu

---

## 🚀 Krok po kroku — uruchomienie na komputerze

### KROK 1: Zainstaluj Node.js (jednorazowo)

1. **https://nodejs.org** → wersja **LTS**
2. Zainstaluj, **zrestartuj komputer**

### KROK 2: Uruchom stronę lokalnie

**Windows:**
1. Otwórz folder `mathouse-website` w Eksploratorze
2. W pasku adresu wpisz `cmd` → Enter
3. W terminalu:

```bash
npm install
npm run dev
```

4. Otwórz: **http://localhost:4321**

---

## 🔧 Konfiguracja TidyCal — co prześlij Olaf

### Najpilniejsze: Lista booking types

**Musisz utworzyć w TidyCal 15 booking types:**

#### Korepetycje 45 min:
1. `korepetycje-45min-1-osoba` — 130 zł
2. `korepetycje-45min-2-osoby` — 80 zł
3. `korepetycje-45min-3-osoby` — 70 zł
4. `korepetycje-45min-4-osoby` — 60 zł
5. `korepetycje-45min-5-6-osob` — 40 zł

#### Korepetycje 90 min:
6. `korepetycje-90min-1-osoba` — 240 zł
7. `korepetycje-90min-2-osoby` — 150 zł
8. `korepetycje-90min-3-osoby` — 130 zł
9. `korepetycje-90min-4-osoby` — 110 zł
10. `korepetycje-90min-5-6-osob` — 75 zł

#### Studia 90 min:
11. `studia-90min-1-osoba` — 160 zł
12. `studia-90min-2-osoby` — 110 zł
13. `studia-90min-3-osoby` — 100 zł
14. `studia-90min-4-osoby` — 80 zł
15. `studia-90min-5-6-osob` — 50 zł

**Ważne:** Slug (URL) booking type musi pasować do nazwy w pliku `src/config/tidycal.js`. Czyli URL musi wyglądać:
```
https://tidycal.com/mathouse/korepetycje-45min-1-osoba
```

Jak utworzysz, prześlij mi listę z ID-kami albo zrzut ekranu — wkleję do `src/config/tidycal.js`.

### Klucz API

1. **https://tidycal.com/integrations**
2. Na dole "API Keys" → Generate
3. Prześlij mi klucz

---

## ⚙️ Wdrożenie Cloudflare Worker (TidyCal API)

W terminalu, w folderze `cloudflare-worker/`:

```bash
cd cloudflare-worker
npm install
npx wrangler login
npx wrangler secret put TIDYCAL_API_KEY
npx wrangler deploy
```

Worker będzie dostępny pod URL typu:
`https://mathouse-tidycal-proxy.olafpieprzak.workers.dev`

W pliku `src/config/tidycal.js` znajdź:
```js
apiUrl: 'https://mathouse-tidycal-proxy.olafpieprzak.workers.dev',
```

Wstaw swój adres jeśli inny.

---

## ☁️ Wdrożenie strony na Cloudflare Pages

### Wariant A: Przez GitHub (rekomendowane)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/olafpieprzak/mathouse-website.git
git push -u origin main
```

Potem **dash.cloudflare.com** → Pages → Connect to Git → wybierz repo → Framework: Astro → Deploy

### Wariant B: Direct upload

```bash
npm run build
```

Potem w **Pages** → Create → Direct Upload → przeciągnij folder `dist/`

---

## 💰 Koszty

- **Strona (Cloudflare Pages)** — **0 zł/mc** ✅
- **Cloudflare Worker** — **0 zł/mc** (100K wywołań/dzień, masz zapas) ✅
- **TidyCal** — wg Twojego planu
- **Domena mathouse.pl** — wg rejestratora (~50-100 zł/rok)
- **CyberFolks/getspace.pl** — **możesz zrezygnować** po przepięciu (oszczędzasz!)

---

## ✏️ Jak edytować po wdrożeniu

### Przez GitHub (najprostsze)

1. github.com/olafpieprzak/mathouse-website
2. Otwórz dowolny plik → ołówek "Edit"
3. Zmień, "Commit"
4. Strona aktualizuje się sama w 30 sek

### Najczęstsze zmiany

| Co zmienić | Gdzie |
|---|---|
| Ceny korepetycji | `src/config/tidycal.js` |
| Lista przedmiotów ze studiów | `src/config/tidycal.js` (sekcja `studiaPrzedmioty`) |
| Numer BLIK | `src/config/tidycal.js` (sekcja `payment`) |
| Tekst na korepetycjach | `src/pages/korepetycje.astro` |
| FAQ | `src/pages/korepetycje.astro` (sekcja `const faq`) |
| Kolory brandu | `tailwind.config.mjs` |

---

## 📞 Pomoc

Pisz w czacie. Gotów pomóc.

**MATHOUSE** — Coś więcej niż matma 🟡
