# 🛒 INSTRUKCJA — JAK WKLEIĆ KODY PŁATNOŚCI

> Krótki przewodnik krok po kroku. Po wklejeniu wszystkich kodów — masz w pełni działającą stronę MATHOUSE z 19 produktami w sprzedaży.

---

## 📋 SZYBKA REFERENCJA — gdzie wkleić każdy produkt

| Produkt | Cena | Plik | Linia szukać |
|---|---|---|---|
| 1.1 Zbiory liczbowe | 197 zł | `src/data/dzialy.js` | `slug: 'zbiory-liczbowe'` (już wklejone ✅) |
| 1.2 Równania i nierówności 1° | 197 zł | `src/data/dzialy.js` | `slug: 'rownania-i-nierownosci-1-stopnia'` (już wklejone ✅) |
| 1.3 Procenty | 197 zł | `src/data/dzialy.js` | `slug: 'procenty'` |
| 1.4 Potęgi | 197 zł | `src/data/dzialy.js` | `slug: 'potegi'` |
| 1.5 Logarytmy | 197 zł | `src/data/dzialy.js` | `slug: 'logarytmy'` |
| 1.6 Wyrażenia algebraiczne | 197 zł | `src/data/dzialy.js` | `slug: 'wyrazenia-algebraiczne'` |
| 1.7 Wzory skróconego mnożenia | 197 zł | `src/data/dzialy.js` | `slug: 'wzory-skroconego-mnozenia'` |
| 1.8 Funkcje | 197 zł | `src/data/dzialy.js` | `slug: 'funkcje'` |
| 1.9 Funkcja liniowa | 197 zł | `src/data/dzialy.js` | `slug: 'funkcja-liniowa'` |
| 1.10 Układy równań | 197 zł | `src/data/dzialy.js` | `slug: 'uklady-rownan'` |
| 1.11 Geometria płaska 1 | 197 zł | `src/data/dzialy.js` | `slug: 'geometria-plaska-cz1'` |
| 1.12 Trygonometria 1 | 197 zł | `src/data/dzialy.js` | `slug: 'trygonometria-cz1'` |
| **Pakiet klasa 1** | 597 zł | `src/data/produkty.js` | `pakietKlasa1` |
| **14-dniowa powtórka** | 197 zł | `src/data/produkty.js` | `powtorka14Dni` |
| **3-dniowy Sprint** | 67 zł | `src/data/produkty.js` | `maturalnySprint` |
| Matematyczny Autopilot | 99 zł | `src/data/produkty.js` | `autopilot` |
| Matura podstawowa | ? | `src/data/produkty.js` | `maturaPodst` |
| Matura rozszerzona | ? | `src/data/produkty.js` | `maturaRozsz` |
| Kurs ósmoklasisty | ? | `src/data/produkty.js` | `osmoklasista` |

---

## 🔑 SKĄD WZIĄĆ EMBED-ID

Z panelu sklepu kurs.mathouse.pl dostajesz taki kod HTML (przykład Zbiorów liczbowych):

```html
<iframe class="wtl-responsive-iframe"
  src="https://kurs.mathouse.pl/assets/js/s.php?id=6ea9ab1baa0efb9e19094440c317e21b"
  ...>
</iframe>
```

**Z tego potrzebujesz TYLKO** 32-znakowy ciąg po `s.php?id=`. W tym przykładzie to:

```
6ea9ab1baa0efb9e19094440c317e21b
```

---

## ✏️ JAK WKLEIĆ — przykład krok po kroku

### Przykład: Pakiet podstawowy klasa 1 (597 zł)

1. Otwórz plik `src/data/produkty.js` w edytorze (VS Code, Notepad++, cokolwiek)
2. Naciśnij **Ctrl+F**, wpisz `pakietKlasa1`
3. Znajdziesz blok:

   ```javascript
   pakietKlasa1: {
     name: 'Pakiet podstawowy klasa 1',
     short: 'Pakiet klasa 1',
     desc: '...',
     price: 597,
     priceOld: 697,
     // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
     sklepEmbedId: '',  // ← TUTAJ wklej między cudzysłowy
     sklepUrl: '',
     status: 'live',
   },
   ```

4. Pomiędzy cudzysłowy `''` wklej swoje 32-znakowe id:

   ```javascript
   sklepEmbedId: '6ea9ab1baa0efb9e19094440c317e21b',
   ```

5. Zapisz plik (**Ctrl+S**)
6. Commit + push do GitHub
7. Cloudflare automatycznie zbuduje stronę → widget zakupowy się aktywuje

---

## ⚠️ WAŻNE — co się dzieje gdy embed-id jest pusty

- **Działy klasy 1** (`dzialy.js`) — strona dalej działa, ale widget zakupowy się NIE pokazuje. Zamiast tego pojawia się żółty przycisk "🛒 Kup w sklepie" prowadzący do `sklepUrl` (jeśli podałeś) lub fallback do `/kursy`.
- **Produkty** (`produkty.js`) — analogicznie. Jeśli zostawisz pusty `sklepEmbedId` i pusty `sklepUrl`, przycisk po prostu się nie wyświetli.
- **Strona produkcyjna NIE krzyczy błędami** gdy embed jest pusty — bezpiecznie deployujesz w międzyczasie.

---

## 🔗 ALTERNATYWA: jeśli nie chcesz embedu — tylko link do sklepu

Jeśli wolisz żeby przycisk "Kup teraz" otwierał osobną stronę sklepu (zamiast widgetu na stronie):

```javascript
sklepEmbedId: '',  // ← zostaw puste
sklepUrl: 'https://kurs.mathouse.pl/next/public/catalog/product/twoj-link',
```

Wtedy przycisk będzie linkował do sklepu (otwiera się w nowej karcie).

---

## 🧪 JAK SPRAWDZIĆ ŻE DZIAŁA

Po wklejeniu i deploy'u:

1. Otwórz w przeglądarce stronę produktu (np. `https://mathouse.pl/kursy/zbiory-liczbowe`)
2. Zjedź na sam dół — powinieneś zobaczyć **widget z formularzem kupna**
3. Powinieneś móc kliknąć przyciski "BLIK / PayU / karta"
4. Faktyczna płatność będzie przekazana do panelu sklepu kurs.mathouse.pl

---

## 📞 GDY COŚ NIE DZIAŁA

- **Widget się nie pokazuje?** → Sprawdź czy `sklepEmbedId` jest 32-znakowy i czy w cudzysłowach
- **Strona się nie buduje?** → Sprawdź czy nie usunąłeś przypadkiem przecinka po `''`
- **Stary cache widoczny?** → Ctrl+Shift+R w przeglądarce
- **Build na Cloudflare wyleciał?** → Otwórz log w Cloudflare → komunikat błędu wskaże linijkę

---

**Powodzenia! Po wklejeniu wszystkich 17 embedów masz w pełni działający sklep online.**

---

## 📧 FORMULARZE EMAIL (Formspree) — NOWE w V12_18

Trzy miejsca zbierają emaile przez Formspree (darmowy serwis, maile lecą na Twoją skrzynkę):

1. **Darmowa lekcja** (`/darmowa-lekcja`) — bramka mailowa przed wideo
2. **Matura rozszerzona "Powiadom mnie"** (na `/kursy`)
3. **Kompendium / Mapy myśli** (jeśli ustawisz jako darmowe za email)

### Jak uruchomić Formspree (5 minut, raz):
1. Wejdź na **formspree.io** → załóż konto na **olaf.pieprzak@gmail.com**
2. Kliknij **+ New Form**, nazwij np. "MATHOUSE zapisy"
3. Skopiuj swój endpoint — wygląda tak: `https://formspree.io/f/xyzabcd` (8 znaków po `/f/`)
4. W kodzie zamień **`TWOJE_ID`** na te 8 znaków (sam kod po `/f/`):
   - `src/pages/darmowa-lekcja.astro` → linia `const FORMSPREE_ID = 'TWOJE_ID'`
   - `src/pages/kursy.astro` → szukaj `formspree.io/f/TWOJE_ID`
   - `src/data/produkty.js` → pola `formspreeId: ''` przy kompendium i mapaMysli
5. Push → maile z formularzy będą przychodzić na Twoją skrzynkę

**Uwaga:** Dopóki nie ustawisz Formspree, formularz darmowej lekcji i tak **odblokuje wideo** (działa lokalnie), ale email nigdzie nie poleci. Ustaw Formspree żeby zbierać kontakty.

### Kompendium i Mapy myśli — 3 tryby
W `produkty.js` (`kompendium`, `mapaMysli`) decydujesz czym są:
- **Płatne**: wpisz `sklepEmbedId` (jak inne produkty) → pokaże widget zakupu
- **Darmowe za email**: wpisz `formspreeId` → pokaże formularz "Pobierz za darmo"
- **Wkrótce** (domyślnie): puste oba → pokaże "Powiadom mnie"
