# 📊 STATUS PROJEKTU MATHOUSE — wersja V12_16

> Stan na koniec sesji. Dokument do regularnej aktualizacji.

---

## ✅ CO JUŻ DZIAŁA

### Strona główna i nawigacja
- ✅ Hero z `od 67 zł` (nie 47)
- ✅ Sekcja "Bestsellery" — 3 karty z przyciskami: Pakiet, 14-dniowa powtórka (link → landing), Sprint 67 zł (link → landing)
- ✅ Sekcja "Co jeszcze znajdziesz" — Kalkulatory mają badge **NOWE** (nie wkrótce)
- ✅ Menu desktop: dodany link "Kalkulatory"
- ✅ Menu mobile: Kalkulatory z żółtym NOWE (nie szare wkrótce)

### Kursy / działy
- ✅ Strona `/kursy` — kafelki rozbudowane (numer, podlekcje, lista 5 podpunktów, cena, CTA)
- ✅ Strona `/kursy/liceum-podstawa` — kafelki rozbudowane **identyczne** jak na `/kursy`
- ✅ **30 podstron działów** generowane dynamicznie z `dzialy.js`
- ✅ **12 działów klasy 1** z pełnymi danymi sklepu:
  - Lista sekcji ze sklepu (1.1, 1.2, 1.3...)
  - Liczba podlekcji w każdej sekcji
  - 3 typy materiałów (PDF, Bełkot matematyczny, Rozwiązane zadania)
  - Cena 197 zł + przekreślona 399 zł
- ✅ Mapa nauki — wszystkie klasy zwijają się do 3 podpunktów + "pokaż jeszcze N"

### Płatności
- ✅ **2 widgety zakupowe aktywne** (z prawdziwym embed-id):
  - 1.1 Zbiory liczbowe (`6ea9ab1baa0efb9e19094440c317e21b`)
  - 1.2 Równania i nierówności 1° (`34173cb38f07f89ddbebc2ac9128303f`)
- ✅ Widget w układzie **2-kolumnowym na desktopie** (tekst CTA + widget) + 1-kolumnowy na mobile
- ✅ 3 mini-CTA marketingowe banery na stronie działu (po teorii, przykładach, lekcjach)
- ✅ Hero CTA scrolluje smooth do widgetu zakupowego

### Arkusze i materiały
- ✅ 93 arkusze CKE z linkami (64 podst. + 28 rozsz. + 1 ósmoklasista)
- ✅ 4-przyciskowy rząd dla każdego arkusza (Arkusz / Klucz / Moje rozwiązanie / Wideo)
- ✅ Fallback dla brakujących linków (wracają do `/arkusze` lub kanał YT)
- ✅ Kanał YouTube: `@olafpieprzak9987`

### Kalkulatory
- ✅ Strona `/kalkulatory` z 1 aktywnym kafelkiem (Równania wielomianowe) + 5 placeholderami
- ✅ Pełny kalkulator wielomianowy 2-12° na `/kalkulatory/rownanie-wielomianowe` (Horner, delta, Aberth-Weierstrass)
- ✅ Sekcja "Powiązane kursy MATHOUSE" pod kalkulatorem

### Korepetycje
- ✅ Strona `/korepetycje` z integracją TidyCal
- ✅ Custom kalendarz, BookingSelector, ScarcityBar
- ✅ Cennik dla 4 typów szkół

### Landing pages
- ✅ `/landing-powtorka-14-dni` (197 zł, 14-dniowa powtórka)
- ✅ `/landing-maturalny-sprint` (67 zł, 3-dniowy sprint)

### Infrastruktura
- ✅ 51+ stron build bez błędów
- ✅ Astro + Tailwind + Cloudflare Pages stack
- ✅ Smooth scroll, mobile responsive
- ✅ Placeholdery SVG dla hero (do podmiany na zdjęcia)

---

## ⏳ CO CZEKA NA DANE OD CIEBIE

### Pilne (potrzebne PRZED deployem)
- 🛒 **EmbedID dla pozostałych 10 działów klasy 1** (Procenty, Potęgi, Logarytmy, Wyrażenia, Wzory, Funkcje, F. liniowa, Układy, Geometria 1, Trygo 1)
- 🛒 **EmbedID dla Pakietu klasy 1** (597 zł)
- 🛒 **EmbedID dla 14-dniowej powtórki** (197 zł)
- 🛒 **EmbedID dla Maturalnego Sprintu** (67 zł)
- 📸 **3 zdjęcia hero** (poziome 16:10, JPG, do `/public/images/hero/`)
- 📄 **102 PDF arkuszy CKE** (do `/public/pdfs/arkusze/` i `/public/pdfs/informatory/`)

### Możliwe później (już DZIAŁA bez tego)
- 🎬 **Wideo intro** na stronie głównej (placeholder zdjęcie zostaje na razie)
- 🎬 **Wideo "jak się zapisać"** na korepetycjach
- 🎬 **30 wideo "lekcja gratis"** na podstronach działów
- 🛒 **EmbedID dla Autopilota** (99 zł) — produkt na razie wyłączony
- 🛒 **EmbedID dla pełnych kursów** maturalny podst./rozsz./ósmoklasista
- 🆕 **Dane Ciągów ze sklepu** (screenshot lista lekcji)

---

## 📝 CO MOŻNA DODAĆ PÓŹNIEJ (faza 2)

- **Platforma kursów** — kupowanie online, dostęp do kursów, panel ucznia
- **Pozostałe 5 kalkulatorów** (kredytowy, funkcja liniowa, geometria, ciągi, statystyka)
- **Klasa 2** — 8 działów (przekształcenia, wartość bezwzględna, funkcja kwadratowa, geometria 2, trygonometria 2, geometria analityczna, czworokąty/koła/pola, wielomiany)
- **Klasa 3 i 4** liceum
- **Kursy maturalne podstawowa i rozszerzona** z pełnymi danymi sklepu
- **Kurs ósmoklasisty** z danymi sklepu
- **Filtry i wyszukiwarka arkuszy** ("pokaż mi tylko zadania z funkcji kwadratowej")
- **System komentarzy** pod kursami

---

## 🚀 PLAN DEPLOY

### Krok 1: Wgraj dane (Ty)
1. Otwórz `INSTRUKCJA-KODY-PLATNOSCI.md` — masz tam dokładną tabelę gdzie wkleić embed-id
2. Wklej co możesz (możesz zacząć od 1-2 produktów, reszta dojdzie później)
3. Wgraj zdjęcia hero i PDF arkuszy

### Krok 2: Push do GitHub
```bash
git add .
git commit -m "feat: V12_16 — dane sklepu dla 8 nowych działów + bestsellery z CTA"
git push origin main
```

### Krok 3: Cloudflare buduje automatycznie
Zobacz **Pages → Deployments** — czekasz ~2-3 minuty na zielone ✓

### Krok 4: Sprawdź mathouse.pl
- Otwórz w trybie incognito
- Klik losowo w kilka stron
- Sprawdź czy widget kupowania działa (na Zbiorach liczbowych i Równaniach 1°)

---

## 📁 STRUKTURA WAŻNYCH PLIKÓW

```
mathouse-website-V12/
├── src/
│   ├── data/
│   │   ├── dzialy.js           ← 30 działów + embed-id dla 12 klasy 1
│   │   ├── produkty.js         ← 7 produktów (pakiety, sprinty, kursy)
│   │   ├── arkusze.js          ← 93 arkusze CKE
│   │   └── media.js            ← zdjęcia/wideo dla hero
│   ├── pages/
│   │   ├── index.astro         ← strona główna
│   │   ├── kursy.astro         ← /kursy
│   │   ├── kursy/
│   │   │   ├── [slug].astro    ← szablon 30 podstron działów
│   │   │   ├── liceum-podstawa.astro
│   │   │   ├── matura-podstawowa.astro
│   │   │   └── ...
│   │   ├── korepetycje.astro
│   │   ├── arkusze.astro
│   │   ├── kalkulatory.astro
│   │   ├── kalkulatory/rownanie-wielomianowe.astro
│   │   ├── mapa-nauki.astro
│   │   └── ...
│   ├── components/
│   │   ├── KupTerazWidget.astro    ← widget płatności (2-kolumnowy)
│   │   ├── HeroMedia.astro          ← uniwersalny hero zdjęcie/wideo
│   │   ├── Navigation.astro
│   │   └── ...
│   └── config/
│       └── landingPages.js          ← kontrola landingów
└── public/
    ├── images/hero/                  ← zdjęcia hero (SVG → JPG)
    └── pdfs/
        ├── arkusze/                  ← 64+28+1 PDF arkuszy
        └── informatory/              ← 7+1 PDF
```

---

**Wersja V12_16 · Olaf Pieprzak · MATHOUSE**
