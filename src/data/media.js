// =====================================================
// MATHOUSE — Centralna konfiguracja mediów (wideo / zdjęcia)
// =====================================================
//
// Każdy "slot" na stronie (hero, korepetycje, kursy) ma:
//   - mode: 'image' (pokazujemy zdjęcie) lub 'video' (pokazujemy wideo)
//   - image: ścieżka do zdjęcia w /public
//   - videoUrl: link do YouTube/Vimeo (używany tylko gdy mode='video')
//   - badge: tekst w prawym górnym rogu kafelka
//   - caption: tekst pod placeholderem
//   - alt: opis zdjęcia (SEO + dostępność)
//
// JAK PODMIENIĆ ZDJĘCIE NA WIDEO PÓŹNIEJ:
//   1. Nagraj wideo, wgraj na YouTube
//   2. Skopiuj URL filmu (np. https://www.youtube.com/watch?v=ABC123)
//   3. Zmień w danym slocie: mode: 'video', videoUrl: 'https://...'
//   4. Commit + push do GitHub → Cloudflare deployuje
//   5. Zdjęcie zostanie automatycznie zastąpione embedem wideo
// =====================================================

export const mediaConfig = {
  // ==========================
  // STRONA GŁÓWNA - hero "Cześć, jestem Olaf"
  // Plik: src/pages/index.astro
  // ==========================
  heroGlowna: {
    mode: 'video',
    image: '/images/hero/hero-glowna.svg',
    videoUrl: 'https://youtube.com/shorts/xB3ydcdv_Pg',
    aspectRatio: '9/16',  // pionowy format YouTube Shorts
    badge: '📸 POZNAJ MNIE',
    caption: 'cześć, jestem Olaf · założyciel MATHOUSE',
    alt: 'Olaf Pieprzak - założyciel MATHOUSE, korepetytor matematyki',
  },

  // ==========================
  // KOREPETYCJE - hero "Jak się zapisać"
  // Plik: src/pages/korepetycje.astro
  // ==========================
  heroKorepetycje: {
    mode: 'image',
    image: '/images/hero/hero-korepetycje.svg',  // później: hero-korepetycje.jpg
    videoUrl: null,
    badge: '📸 KOREPETYCJE',
    caption: 'indywidualne lekcje online z Olafem',
    alt: 'Olaf prowadzący korepetycje online z matematyki',
  },

  // ==========================
  // PODSTRONA KAŻDEGO DZIAŁU - hero "Lekcja gratis"
  // Plik: src/pages/kursy/[slug].astro
  // (jedno zdjęcie dla wszystkich 30 podstron — wspólny placeholder)
  // ==========================
  heroKursy: {
    mode: 'image',
    image: '/images/hero/hero-kursy.svg',  // później: hero-kursy.jpg
    videoUrl: null,
    badge: '📸 LEKCJA GRATIS',
    captionPrefix: 'pierwsza lekcja gratis · ',  // dodajemy nazwę pierwszego podpunktu
    alt: 'Miniaturka darmowej lekcji wideo z kursu MATHOUSE',
  },
};

// =====================================================
// HELPER - czy ten slot ma już wideo, czy ciągle zdjęcie
// =====================================================
export function isVideoReady(slotKey) {
  const slot = mediaConfig[slotKey];
  return slot && slot.mode === 'video' && slot.videoUrl;
}

// =====================================================
// HELPER - wyciągnij ID wideo YouTube z różnych formatów URL
// (https://youtube.com/watch?v=X, https://youtu.be/X, https://www.youtube.com/embed/X)
// =====================================================
export function extractYouTubeId(url) {
  if (!url) return null;
  // shorts/ID
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];
  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  // watch?v=ID
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];
  // embed/ID
  const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  return null;
}

// =====================================================
// HELPER - zwraca URL embed YouTube (do <iframe>)
// =====================================================
export function getYouTubeEmbedUrl(url) {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}
