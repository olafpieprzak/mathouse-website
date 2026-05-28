// =============================================================================
// MATHOUSE — Centralna baza produktów NIE-DZIAŁOWYCH
// =============================================================================
//
// Tu trzymamy wszystkie produkty, które NIE są pojedynczymi działami klasy 1:
//   - Pakiety (klasa 1, klasa 2, klasa 3, klasa 4)
//   - Kursy maturalne (podstawowa, rozszerzona)
//   - Kurs ósmoklasisty
//   - Sprinty / Powtórki / Autopilot
//
// JAK WKLEIĆ EMBED-ID PŁATNOŚCI (gdy będziesz gotów):
//   1. Wejdź do panelu sklepu kurs.mathouse.pl
//   2. Znajdź konkretny produkt (np. "Pakiet podstawowy klasa 1")
//   3. Wygeneruj embed → skopiuj 32-znakowy hash z URL po "s.php?id=XXX"
//      np. z: src="https://kurs.mathouse.pl/.../s.php?id=6ea9ab1baa0efb9e19094440c317e21b"
//      kopiujesz: 6ea9ab1baa0efb9e19094440c317e21b
//   4. Wklej między cudzysłowy w polu `sklepEmbedId` poniżej
//   5. Zapisz plik, commit, push → Cloudflare automatycznie redeployuje
//
// PRZYCISKI BEZ EMBEDU — jeśli `sklepEmbedId` jest puste (''), ale chcesz
// żeby przycisk działał, dodaj URL do `sklepUrl` (link do strony produktu w sklepie)
// =============================================================================

export const produkty = {

  // =========================================================================
  // PAKIET PODSTAWOWY KLASA 1 — wszystkie 12 działów w jednym pakiecie
  // Cena: 597 zł (było 697 zł, oszczędność 100 zł)
  // Widoczny w: /kursy, /kursy/liceum-podstawa, strona główna (bestsellery)
  // =========================================================================
  pakietKlasa1: {
    name: 'Pakiet podstawowy klasa 1',
    short: 'Pakiet klasa 1',
    desc: 'Wszystkie 12 działów klasy 1 liceum w jednym pakiecie. Od zbiorów liczbowych po trygonometrię. Dostęp na zawsze.',
    price: 597,
    priceOld: 697,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',  // np. 'PRZYKLAD_zastap_mnie_32_znakami_hex'
    sklepUrl: '',      // opcjonalnie URL strony produktu
    status: 'live',
  },

  // =========================================================================
  // 14-DNIOWA POWTÓRKA DO MATURY PODSTAWOWEJ
  // Cena: 197 zł
  // Widoczny w: strona główna (bestsellery), /landing-powtorka-14-dni
  // =========================================================================
  powtorka14Dni: {
    name: '14-dniowa powtórka do matury podstawowej',
    short: '14-dniowa powtórka',
    desc: 'Najszybsza droga do zdania matury podstawowej. Plus tablice gratis.',
    price: 197,
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',
    sklepUrl: '',
    landingUrl: '/landing-powtorka-14-dni',
    status: 'live',
  },

  // =========================================================================
  // 3-DNIOWY MATURALNY SPRINT
  // Cena: 67 zł (najniższa cena wejścia)
  // Widoczny w: strona główna (bestsellery), /landing-maturalny-sprint
  // =========================================================================
  maturalnySprint: {
    name: '3-dniowy Maturalny Sprint',
    short: 'Maturalny Sprint',
    desc: 'Zaczyna się od najprostszej ceny — sprawdź czy mój styl Ci pasuje.',
    price: 67,
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',
    sklepUrl: '',
    landingUrl: '/landing-maturalny-sprint',
    status: 'live',
  },

  // =========================================================================
  // MATEMATYCZNY AUTOPILOT — schemat krok po kroku
  // Cena: 99 zł (było 159 zł)
  // Widoczny w: /kursy (4 kafelek matur), /kursy/matematyczny-autopilot
  // =========================================================================
  autopilot: {
    name: 'Matematyczny Autopilot - Schemat Krok po Kroku',
    short: 'Autopilot',
    desc: 'Schemat działania krok po kroku dla każdego typu zadania maturalnego.',
    price: 99,
    priceOld: 159,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',
    sklepUrl: '',
    status: 'live',
  },

  // =========================================================================
  // MATURA PODSTAWOWA — cały kurs maturalny
  // Cena: do ustalenia
  // Widoczny w: /kursy (sekcja matura), /kursy/matura-podstawowa
  // =========================================================================
  maturaPodst: {
    name: 'Kurs matury podstawowej',
    short: 'Matura podstawowa',
    desc: 'Cały materiał maturalny w jednym kursie wideo.',
    price: null,  // ← uzupełnij gdy zdecydujesz
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',
    sklepUrl: '',
    status: 'soon',
  },

  // =========================================================================
  // MATURA ROZSZERZONA — cały kurs maturalny
  // =========================================================================
  maturaRozsz: {
    name: 'Kurs matury rozszerzonej',
    short: 'Matura rozszerzona',
    desc: 'Pełny zakres rozszerzony.',
    price: null,
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',
    sklepUrl: '',
    status: 'soon',
  },

  // =========================================================================
  // ÓSMOKLASISTA — cały kurs
  // =========================================================================
  osmoklasista: {
    name: 'Kurs egzaminu ósmoklasisty',
    short: 'Ósmoklasista',
    desc: 'Pełny kurs do egzaminu ósmoklasisty.',
    price: null,
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id ===
    sklepEmbedId: '',
    sklepUrl: '',
    status: 'soon',
  },

  // =========================================================================
  // KOMPENDIUM MATURALNE — teoria w pigułce (77 stron, 26 tematów)
  // Widoczny w: /kompendium
  // =========================================================================
  kompendium: {
    name: 'Kompendium maturalne MATHOUSE',
    short: 'Kompendium',
    desc: 'Cała teoria do matury w jednym dokumencie — 26 tematów, definicje, wzory, twierdzenia. Do druku i na telefon.',
    price: null,  // ← uzupełnij gdy zdecydujesz (lub zostaw null = darmowy lead magnet / "wkrótce")
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id (jeśli płatne) ===
    sklepEmbedId: '',
    sklepUrl: '',
    // === jeśli darmowe za email - wklej ID Formspree ===
    formspreeId: '',  // np. 'xyzabc' - jeśli puste, pokaże "wkrótce"
    status: 'soon',
  },

  // =========================================================================
  // MAPY MYŚLI — wizualne podsumowania działów
  // Widoczny w: /mapa-mysli
  // =========================================================================
  mapaMysli: {
    name: 'Mapy myśli MATHOUSE',
    short: 'Mapy myśli',
    desc: 'Każdy dział matury jako jedna wizualna mapa myśli — wszystkie wzory i powiązania na jednej kartce.',
    price: null,
    priceOld: null,
    // === EMBED PŁATNOŚCI - wklej tutaj 32-znakowy id (jeśli płatne) ===
    sklepEmbedId: '',
    sklepUrl: '',
    formspreeId: '',
    status: 'soon',
  },

};

// Helper - sprawdza czy produkt ma działający przycisk kupowania
export function getCtaUrl(produkt) {
  if (!produkt) return null;
  if (produkt.sklepEmbedId) return '#kup-teraz';  // scrolluj do widgetu w aktualnej stronie
  if (produkt.sklepUrl) return produkt.sklepUrl;  // otwórz sklep w nowej karcie
  if (produkt.landingUrl) return produkt.landingUrl;  // przejdź na landing
  return null;
}

export function hasCheckout(produkt) {
  return !!(produkt && (produkt.sklepEmbedId || produkt.sklepUrl || produkt.landingUrl));
}
