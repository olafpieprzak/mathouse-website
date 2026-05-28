# 🎬 PLAN WIDEO MATHOUSE — V2

> Kompletny przewodnik nagrywania i podpinania wideo na stronę.
> **Część A**: wideo do nakręcenia od zera (skrypt + plan zdjęciowy).
> **Część B**: wideo do podpięcia z Twoich istniejących produktów (tylko URL).

---

## 📋 OGÓLNY PRIORYTET NAGRYWANIA

**Sesja 1 (jeden dzień zdjęciowy, te same warunki):**
1. Intro Olafa na stronę główną — najważniejsze, daje twarz brandowi
2. "Jak się zapisać na korepetycje" — drugie najważniejsze, redukuje friction

**Sesja 2** (gdy ruszysz):
3. 12 fragmentów "lekcja gratis" do podstron działów klasy 1 (możesz wyciąć z już nagranych pełnych kursów)

**Sesja 3** (gdy będziesz robił promo):
4. Promo do Autopilota, 14-dniowej powtórki, Sprintu, ósmoklasisty, matur

---

## 🎥 CZĘŚĆ A — WIDEO DO NAKRĘCENIA OD ZERA

### A1. INTRO OLAFA — strona główna (1:30)

**Lokalizacja na stronie:** Strona główna `/` — sekcja hero
**Plik kodu:** `src/data/media.js` → `heroGlowna.videoYoutube`
**Format:** poziome 16:9 (też wersja 9:16 na social media)
**Długość:** 1:15–1:30

**Skrypt słowo w słowo:**

```
[0:00 – 0:08] HOOK
"Cześć, jestem Olaf. Uczę matematyki od 2012 roku. Pomogłem już
setkom uczniów zdać maturę — i obniżyć poziom stresu."

[0:08 – 0:25] WHO YOU ARE
"Mam magistra z Politechniki Rzeszowskiej. Tutaj — na MATHOUSE —
znajdziesz całe liceum w jednym miejscu. Od zbiorów liczbowych
przez funkcje aż po geometrię. Wszystko nagrane jak na zwykłej lekcji."

[0:25 – 0:45] WHAT YOU GET
"Co tu znajdziesz? Trzy rzeczy. PIERWSZA — kursy wideo dla klasy 1
liceum, 12 działów, każdy z setkami podlekcji. DRUGA — korepetycje
indywidualne online, możesz zapisać się tu, na stronie, jednym
kliknięciem. TRZECIA — darmowe arkusze maturalne, wszystkie z lat
ubiegłych, z odpowiedziami i moimi rozwiązaniami wideo."

[0:45 – 1:05] HOW IT'S DIFFERENT
"Czym się różnię od innych? Tłumaczę aż zrozumiesz. Nie szybko —
dokładnie. Materiały są na zawsze, raz kupisz i masz dożywotnio.
Płacisz BLIK-iem, kartą, ratami — jak chcesz."

[1:05 – 1:25] CALL TO ACTION
"Zacznij od bestsellera — pakiet podstawowy klasa 1 to 12 działów
za 597 zł. Albo wejdź na korepetycje i zobacz mój kalendarz.
Albo — co najprostsze — kliknij Sprawdź kursy w prawym górnym rogu.
Czekam na ciebie. Cześć!"
```

**Plan zdjęciowy:**
- **Tło:** Twoje biuro — biała tablica z napisanym fragmentem rozwiązania
- **Ubranie:** koszula, czarny sweter — coś profesjonalnego ale nie sztywnego
- **Oświetlenie:** ring light z przodu + naturalne światło z okna z boku
- **Mikrofon:** krawatowy (lavalier) — czystszy dźwięk niż wbudowany w aparat
- **Kamera:** smartfon na statywie wysoko, lekko z góry (na poziomie czoła)
- **Ujęcia:** głównie sylwetka do piersi, czasem zbliżenie na tablicę
- **B-roll:** zbliżenia rąk piszących wzory, ekran laptopa z kursem, kalkulator wielomianowy MATHOUSE

**Tekst pod wideo na stronie:**
- Badge: "👋 INTRO" lub "POZNAJ MNIE"
- Podtytuł: "Cześć, jestem Olaf — pomogę ci zdać maturę"

---

### A2. JAK SIĘ ZAPISAĆ NA KOREPETYCJE — screen recording (0:45)

**Lokalizacja na stronie:** `/korepetycje` — sekcja "Jak to działa" lub przed BookingSelector
**Plik kodu:** `src/pages/korepetycje.astro` — nowa sekcja `<video>` przed widgetem
**Format:** poziome 16:9
**Długość:** 0:45 max
**Typ:** screen recording z Twoim głosem w voice-over

**Skrypt voice-over:**

```
[0:00 – 0:08] HOOK
"Pokażę ci w 30 sekund jak zapisać się na lekcję. Cztery kroki, koniec."

[0:08 – 0:18] KROK 1 - TYP SZKOŁY
[screen: kliknięcie kafelka "Liceum / Technikum"]
"Krok 1: wybierasz typ szkoły. Każda ma inną stawkę, więc to ważne
żeby kliknąć właściwą."

[0:18 – 0:28] KROK 2 - DŁUGOŚĆ
[screen: kliknięcie "90 minut"]
"Krok 2: wybierasz długość — 45 minut na pojedynczy temat, albo
90 minut gdy materiał jest trudny lub przed klasówką."

[0:28 – 0:38] KROK 3 - TERMIN
[screen: scroll przez kalendarz, klik wolnego slotu]
"Krok 3: kalendarz pokazuje wolne sloty. Klikasz pasujący — i już
masz rezerwację. Zielony oznacza wolne, szary zajęte."

[0:38 – 0:45] KROK 4 - DANE I KONFIRMACJA
[screen: krótko formularz, wpisanie imienia/maila, Submit]
"Krok 4: zostawiasz imię i email. Konfirmacja idzie automatycznie
na maila. Zobaczymy się!"
```

**Plan zdjęciowy:**
- **Setup:** OBS Studio nagrywający ekran w 1080p
- **Otoczenie:** czysty desktop, brak rozpraszaczy w przeglądarce
- **Voice-over:** nagrany OSOBNO (nie podczas rec ekranu) — w lavalierze, później zsynchronizowany
- **Kursor:** zaznaczony żółtym ringiem (program FreeCast/Mouseposé na Mac, MacroRecorder na Win)
- **Cięcia:** szybkie, dynamiczne — co 5-8 sekund nowe ujęcie
- **Outro:** logo MATHOUSE z napisem "Wybierz wariant lekcji i znajdź pasujący termin →"

**Tekst pod wideo na stronie:**
- Badge: "🎬 30 SEKUND"
- Podtytuł: "Zobacz jak zapisać się na lekcję w 4 krokach"

---

## 🔗 CZĘŚĆ B — WIDEO DO PODPIĘCIA Z TWOICH PRODUKTÓW

> Te wideo już istnieją — masz je w swoich kursach na kurs.mathouse.pl.
> Tu tylko wycinasz fragment, wgrywasz na YouTube jako "unlisted", i wklejasz URL.

### Format URL YouTube
Wklejaj **pełny URL** w postaci: `https://www.youtube.com/watch?v=XXXXXXX`
Albo skrócony: `https://youtu.be/XXXXXXX`

### Rekomendowana długość fragmentu "lekcja gratis": **5-8 minut**
- za krótko = nie pokazuje wartości
- za długo = uczeń nie obejrzy do końca

---

### B1-B12. PODSTRONY 12 DZIAŁÓW KLASY 1 — "lekcja gratis"

Każdy z 12 działów klasy 1 ma sekcję "🎁 Lekcja gratis — zobacz jak uczę" w hero.

**Plik kodu (jeden plik dla wszystkich 30 podstron działów):**
`src/pages/kursy/[slug].astro`

**Gdzie szukać w pliku:** sekcja `<HeroMedia>` lub blok `{kurs.videoLekcjaGratis && (...)}`

**Plik z danymi:** `src/data/dzialy.js` — w każdym z 12 obiektów klasy 1 dodać pole:

```javascript
// na końcu obiektu działu (np. po 'duration'):
videoLekcjaGratis: '',  // ← WKLEJ TUTAJ URL YouTube
```

**Tabela co wybrać z istniejących produktów:**

| Dział | Slug | Rekomendowany fragment z Twojego kursu |
|---|---|---|
| 1.1 Zbiory liczbowe | `zbiory-liczbowe` | sekcja 1.5 "Zbiór liczb wymiernych" (5-7 min) |
| 1.2 Równania i nierówności 1° | `rownania-i-nierownosci-1-stopnia` | sekcja 2.1 lekcja 1-2 (równanie z dziedziną) |
| 1.3 Procenty | `procenty` | sekcja 3.2 zadanie tekstowe o obniżce/podwyżce |
| 1.4 Potęgi | `potegi` | sekcja 4.2 pierwiastek z liczby ujemnej |
| 1.5 Logarytmy | `logarytmy` | sekcja 5.1 lekcja "Definicja logarytmu" |
| 1.6 Wyrażenia algebraiczne | `wyrazenia-algebraiczne` | sekcja 6.2 prosty dowód algebraiczny |
| 1.7 Wzory skróconego mnożenia | `wzory-skroconego-mnozenia` | sekcja 7.4 usuwanie niewymierności |
| 1.8 Funkcje | `funkcje` | sekcja 8.3 dziedzina ze wzoru |
| 1.9 Funkcja liniowa | `funkcja-liniowa` | sekcja 9.1 rysowanie wykresu krok po kroku |
| 1.10 Układy równań | `uklady-rownan` | sekcja 10.3 metoda podstawiania - zadanie tekstowe |
| 1.11 Geometria 1 | `geometria-plaska-cz1` | sekcja 11.7 twierdzenie Pitagorasa - zastosowanie |
| 1.12 Trygonometria 1 | `trygonometria-cz1` | sekcja 12.2 sin/cos/tg dla 30°, 45°, 60° |

---

### B13. MATEMATYCZNY AUTOPILOT — promo (60-90 sek)

**Plik kodu:** `src/pages/kursy/matematyczny-autopilot.astro`
**Gdzie wkleić:** sekcja hero, pole `videoPromo` (do dodania jako prop lub bezpośrednio w pliku)
**Format:** poziome 16:9, długość 60-90 sek
**Treść:** krótkie wytłumaczenie czym jest Autopilot + 1 przykład schematu w akcji

---

### B14. 14-DNIOWA POWTÓRKA — promo (60-90 sek)

**Plik kodu:** `src/pages/landing-powtorka-14-dni.astro`
**Gdzie wkleić:** sekcja hero, dodatkowe pole `<video>` z URL YouTube
**Format:** poziome 16:9
**Treść:** kalendarz dnia po dniu (dzień 1: pierwiastki, dzień 2: procenty...) + co dostajesz

---

### B15. 3-DNIOWY MATURALNY SPRINT — promo (45-60 sek)

**Plik kodu:** `src/pages/landing-maturalny-sprint.astro`
**Format:** poziome 16:9 + wersja 9:16 do social media (ten sprint to świetny lead magnet, świetny na Reels)
**Treść:** "67 złotych, 3 dni, 3 najczęstsze działy. Pokażę ci dokładnie co robię."

---

### B16-B18. PEŁNE KURSY MATURALNE (po deployu)

**Matura podstawowa, rozszerzona, ósmoklasista** — gdy zrobimy podstrony, każda będzie miała sekcję "Zobacz fragment kursu" z embedem wideo.

**Pliki przyszłe:**
- `src/pages/kursy/matura-podstawowa.astro`
- `src/pages/kursy/matura-rozszerzona.astro`
- `src/pages/kursy/egzamin-osmoklasisty.astro`

Pole: `videoPromo` w hero.

---

## 📱 FORMAT 9:16 POD SOCIAL MEDIA

Wszystkie nagrywane wideo **nakręcaj również w pionie 9:16** (lub przekonwertuj w post-prod) — pójdą jako:
- Instagram Reels
- TikTok
- YouTube Shorts
- Facebook Reels

To podwoi zasięg każdego nakręconego wideo — koszt nagrania ten sam, dystrybucja x4 platformy.

**Skrócone wersje:**
- Intro Olafa → 30-45 sek "kto jestem + co tu znajdziesz"
- Jak się zapisać → ten sam screen recording, przycięty do 30 sek
- Promo Sprintu → 9:16 native (krótkie 30 sek)
- Lekcja gratis → krótszy fragment 1-2 minuty, samo największe AHA

---

## 🛠️ TECHNICZNE WSKAZÓWKI

### Jak uploadować na YouTube
1. YouTube Studio → Prześlij wideo
2. Tytuł: opisowy ("Matematyczny Autopilot — promo MATHOUSE")
3. Widoczność: **NIEOZNACZONE (UNLISTED)** dla wszystkich filmów embed'owanych na stronie — tylko z linkiem
4. Tagi: matematyka, mathouse, matura, korepetycje
5. Miniatura: customowa (Canva, format 1280×720)
6. Po publikacji: skopiuj URL → wklej w odpowiednie pole w kodzie

### Jak wyciąć fragment z dłuższego filmu
- **CapCut Desktop** (darmowy) — pełne edytowanie
- **YouTube Studio** — funkcja "Edytor" → "Przytnij" (bez utraty jakości)
- **DaVinci Resolve** — profesjonalne, darmowe

### Jak ułatwić sobie nagrywanie zapowiedzi/promo
- Zacznij od OUTRO: nakręć najpierw zakończenie "Czekam na ciebie!" — najtrudniejsze, później to powtarzasz w introach
- Hook nakręć JAKO OSTATNI — dopiero gdy nakręcisz całość, wiesz co najlepiej zapowiedzieć

---

## ✅ CHECKLISTA PO NAGRANIU

Po każdym nakręconym wideo:
- [ ] Edycja: cięcia, podkład muzyczny (cicho, niski poziom), kolorki MATHOUSE jako lower-third
- [ ] Export: H.264, 1080p, bitrate min. 8 Mbps
- [ ] Upload na YouTube: unlisted + customowa miniatura
- [ ] Skopiuj URL i wklej w odpowiednie pole w kodzie (patrz tabela wyżej)
- [ ] Push na GitHub → Cloudflare automatycznie deployuje
- [ ] Test na stronie: czy się odtwarza, czy ma poprawne proporcje
- [ ] Wersja 9:16: nakręć/przekonwertuj i wrzuć na TikTok/Reels/Shorts z linkiem do MATHOUSE w bio

---

**MATHOUSE · Plan wideo V2 · Olaf Pieprzak**
