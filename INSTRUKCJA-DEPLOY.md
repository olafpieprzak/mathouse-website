# 🚀 INSTRUKCJA WYPUSZCZENIA STRONY NA mathouse.pl

> Wersja: V12_12 — gotowa do produkcji
> Daje: 50 stron, 102 PDF-y, 30 podstron działów, mapa nauki, korepetycje z TidyCal
> Nie ma jeszcze: prawdziwych zdjęć Olafa (są placeholdery), wideo na YouTube

---

## 📋 KROK 1 — Przygotowanie zdjęć (max 30 minut)

### Co Ci potrzeba

3 zdjęcia w formacie **poziomym 16:10**, najlepiej JPG:

| Plik | Wymiary | Co na nim |
|---|---|---|
| `hero-glowna.jpg` | 1600×1000 px | Olaf — twarz, energia, uśmiech. Strona główna. |
| `hero-korepetycje.jpg` | 1600×1000 px | Olaf przy biurku/tablecie. Może z kawą. Korepetycje. |
| `hero-kursy.jpg` | 1600×1000 px | Tablet z wzorem matematycznym + Olaf piszący. Lekcje gratis. |

### Wymagania techniczne

- **Format:** JPG (nie PNG — JPG jest 5× mniejszy)
- **Wymiary:** dokładnie 1600×1000 px (jeśli masz inny stosunek, przytnij na canva.com lub photopea.com)
- **Rozmiar pliku:** max 500 KB każde. Większe = stronę długo się ładuje. Skompresuj na https://squoosh.app (jakość 80-85% wystarczy).
- **Bez wodnoznaków** — chyba że dyskretny "MATHOUSE.PL" w rogu

### Gdzie wrzucić

```
public/images/hero/hero-glowna.jpg
public/images/hero/hero-korepetycje.jpg
public/images/hero/hero-kursy.jpg
```

Te 3 zdjęcia **zastąpią** obecne placeholdery SVG (które wyglądają jak czarno-żółta tabliczka "TUTAJ POJAWI SIĘ ZDJĘCIE OLAFA").

### Co dokładnie zmienić w kodzie

Otwórz `src/data/media.js`. W 3 miejscach zamień `.svg` na `.jpg`:

```javascript
// Linia ~28
image: '/images/hero/hero-glowna.svg',  →  image: '/images/hero/hero-glowna.jpg',

// Linia ~39
image: '/images/hero/hero-korepetycje.svg',  →  image: '/images/hero/hero-korepetycje.jpg',

// Linia ~50
image: '/images/hero/hero-kursy.svg',  →  image: '/images/hero/hero-kursy.jpg',
```

To wszystko. Strona zacznie pokazywać prawdziwe zdjęcia zamiast placeholderów.

---

## 📦 KROK 2 — Wgranie wszystkich PDF-ów (jak jeszcze nie zrobione)

Z poprzednich rund masz **102 PDF-y do wrzucenia**:

```
public/pdfs/arkusze/       (65 plików: 64 podstawa + 28 rozszerzona + 1 ósmoklasista — wszystkie wymienione w README)
public/pdfs/informatory/   (8 plików: 7 informatorów + 1 zbiór zadań)
```

**Pełna lista plików:** `public/pdfs/README.md` w projekcie — tam masz dokładne nazwy każdego z 102 plików.

**3 pliki wymagają zmiany nazwy** (z polskimi krzakami / spacjami) — szczegóły w README.

---

## 🔧 KROK 3 — Deploy na Cloudflare Pages

### Wariant A — masz już repo na GitHub i Cloudflare Pages podpięte do niego

To jest najprostsze:

```bash
# 1. Otwórz lokalny katalog projektu w terminalu
cd ~/mathouse-website   # albo gdzie masz projekt

# 2. Rozpakuj paczkę V12_12 ZASTĘPUJĄC istniejące pliki
# (wcześniej zrób backup jak na zawale - cp -r mathouse-website mathouse-website-backup)

# 3. Sprawdź co się zmieniło
git status

# 4. Dodaj wszystko
git add .

# 5. Commit z opisem
git commit -m "feat: V12_12 - dodano arkusze, mapę nauki, podstrony działów, zdjęcia hero"

# 6. Push - Cloudflare automatycznie rebuilduje
git push origin main
```

Po pushu wejdź na **Cloudflare → Pages → twój projekt → Deployments**. Zobaczysz że build się odpalił. Trwa ~2-3 minuty. Jak kończy z zielonym ✅ — strona jest na żywo.

### Wariant B — wgrywasz pierwszy raz, nie masz jeszcze repo

```bash
# 1. W katalogu projektu zainicjuj git (jeśli jeszcze nie ma)
cd ~/mathouse-website
git init
git branch -M main

# 2. Stwórz repo na GitHub (https://github.com/new) — nazwij np. "mathouse-website"

# 3. Dodaj origin (zamień YOUR_USERNAME na swoje):
git remote add origin https://github.com/YOUR_USERNAME/mathouse-website.git

# 4. Dodaj, commit, push
git add .
git commit -m "feat: initial deploy V12_12"
git push -u origin main

# 5. W Cloudflare → Pages → "Create a project" → "Connect to Git"
#    - Wybierz repo mathouse-website
#    - Build command: npm run build
#    - Build output: dist
#    - Save and Deploy

# 6. Po pierwszym deployu połącz domenę:
#    Cloudflare → Pages → twój projekt → Custom domains → "Set up a custom domain"
#    Wpisz: mathouse.pl
#    Cloudflare poprowadzi Cię przez DNS (zwykle automatyczne, bo mathouse.pl jest na Cloudflare)
```

### Co MUSI być w `package.json` żeby Cloudflare wiedział jak budować

Sprawdź czy masz takie skrypty (są już w paczce V12_12):

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

**Cloudflare Build settings:**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18 lub 20 (ustaw w Environment variables: `NODE_VERSION=20`)

---

## 🎬 KROK 4 — Jak później podmienić zdjęcia na wideo

Każdy slot w `src/data/media.js` ma dwa pola:

```javascript
heroGlowna: {
  mode: 'image',                                  // ← tryb: zdjęcie albo wideo
  image: '/images/hero/hero-glowna.jpg',          // ← URL zdjęcia
  videoUrl: null,                                 // ← URL YouTube (puste = nie ma)
  badge: '📸 POZNAJ MNIE',
  caption: 'cześć, jestem Olaf · założyciel MATHOUSE',
}
```

### Procedura podmiany na wideo (3 kroki, 2 minuty)

**Krok 1.** Nagraj wideo, wgraj na YouTube na kanał `@olafpieprzak9987`.

**Krok 2.** Skopiuj URL filmu. Akceptowane formaty:
- `https://www.youtube.com/watch?v=ABC123XYZ_0`
- `https://youtu.be/ABC123XYZ_0`
- `https://www.youtube.com/embed/ABC123XYZ_0`

Wszystkie 3 formaty działają — komponent automatycznie wyciąga z URL ID filmu.

**Krok 3.** W `src/data/media.js` zmień dwie linijki:

```javascript
// Z TEGO (zdjęcie):
heroGlowna: {
  mode: 'image',
  videoUrl: null,
  ...
}

// NA TO (wideo):
heroGlowna: {
  mode: 'video',                                          // ← zmień na 'video'
  videoUrl: 'https://www.youtube.com/watch?v=ABC123XYZ_0',// ← wklej URL
  ...
}
```

Commit + push → Cloudflare deployuje → wideo jest na żywo.

**Co się stanie automatycznie:**
- Zdjęcie znika
- Pojawia się embed YouTube z możliwością odtwarzania bezpośrednio w stronie
- Ramka, badge, caption — zostają bez zmian
- Reszta strony nie wymaga żadnej modyfikacji

### Co jeśli chcę cofnąć (wrócić ze zdjęcia na wideo)

```javascript
mode: 'image',     // ← cofnij na 'image'
videoUrl: null,    // ← wyczyść URL
```

To wszystko. **Plik `media.js` jest jedynym miejscem**, gdzie sterujesz tym co się pokazuje.

---

## ✅ CHECKLIST PRZED DEPLOYEM

Zaznacz każdy punkt:

- [ ] Mam wgrane 3 zdjęcia w `public/images/hero/` (lub akceptuję placeholdery SVG na start)
- [ ] Mam wgrane 102 PDF-y w `public/pdfs/arkusze/` i `public/pdfs/informatory/`
- [ ] 3 pliki PDF z dziwnymi nazwami są przemianowane (lista w `public/pdfs/README.md`)
- [ ] W `src/data/media.js` ścieżki kończą się `.jpg` jeśli wgrałem JPG (lub `.svg` jeśli zostawiłem placeholdery)
- [ ] `npm run build` zakończył się BEZ błędów (uruchomiłem lokalnie żeby przetestować)
- [ ] Commit z sensownym opisem
- [ ] Push do GitHub main
- [ ] Cloudflare Pages pokazuje zielony ✅ przy ostatnim deploymencie
- [ ] Sprawdziłem `mathouse.pl` na komputerze i na telefonie — wygląda OK
- [ ] Sprawdziłem `mathouse.pl/arkusze` — czy 102 PDF-y otwierają się (klik losowo na 5)
- [ ] Sprawdziłem `mathouse.pl/mapa-nauki` — czy mapa działa na mobile (klika się klasa, rozwija dział)
- [ ] Sprawdziłem `mathouse.pl/kursy/logarytmy` — czy podstrona działa (jedna z 30 nowych)

---

## 🆘 JAK COŚ NIE DZIAŁA

**Build na Cloudflare się sypie?** Otwórz log buildu w Cloudflare. 99% przypadków: brakuje pliku albo zła ścieżka. Komunikat zwykle wskazuje konkretną linijkę.

**Strona pokazuje stary cache?**
- Ctrl+Shift+R (twardy refresh)
- Tryb incognito żeby zobaczyć stronę "świeżo"
- W Cloudflare → Caching → Configuration → "Purge Everything"

**PDF-y się nie otwierają?**
- Sprawdź czy plik na pewno jest w `public/pdfs/arkusze/`
- Sprawdź czy nazwa pliku w `src/data/arkusze.js` MA `.pdf` na końcu
- Sprawdź czy w nazwie nie ma spacji ani polskich znaków

**Zdjęcia pokazują się dziwnie / rozciągnięte?**
- Sprawdź wymiary — muszą być w stosunku 16:10 (np. 1600×1000)
- Jeśli masz pionowe, przytnij na canva.com do 16:10

**Coś jeszcze?**
Wróć do mnie, opisz problem, podaj URL który nie działa.

---

## 🎯 CO MOŻNA DODAĆ POTEM (faza 2)

Jak pisałeś — wersja "wszystko działa" idzie najpierw. Potem opcje:

1. **Platforma kursów** — kupowanie online, dostęp do kursów, panel ucznia
2. **Kalkulatory matematyczne** — placeholdery już są na `/kalkulatory`, trzeba wypełnić działającymi kalkulatorami
3. **Filtry i wyszukiwarka arkuszy** — np. "pokaż mi tylko zadania z funkcji kwadratowej"
4. **Komentarze pod lekcjami** — żeby uczniowie zadawali pytania
5. **System tagów** — żeby dany dział pokazywał powiązane kursy

Daj znać kiedy chcesz to ruszać. Na razie skupiamy się na tym, żeby fundament działał.

---

**MATHOUSE V12_12** · Olaf Pieprzak
