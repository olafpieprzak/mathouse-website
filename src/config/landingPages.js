// =====================================================
// LANDING PAGES CONFIG
// =====================================================
// Zmień `enabled: false` żeby tymczasowo wyłączyć daną stronę
// (pokaże się 404 zamiast contentu)
// =====================================================

export const LANDING_PAGES = [
  {
    id: 'powtorka-14-dni',
    slug: 'landing-powtorka-14-dni',
    enabled: true,                   // ← Zmień na false żeby wyłączyć
    title: '14-dniowa powtórka do matury (poziom podstawowy)',
    shortTitle: 'Powtórka 14 dni',
    price: '197 zł',
    icon: '📚',
    description: 'Cały materiał maturalny w gotowych nagraniach wideo. Dostęp od razu po zakupie.',
    purchaseUrl: '#kup-teraz',
  },
  {
    id: 'maturalny-sprint',
    slug: 'landing-maturalny-sprint',
    enabled: true,                   // ← Zmień na false żeby wyłączyć
    title: 'Maturalny sprint z matematyki — 3 dni, 3 działy',
    shortTitle: 'Maturalny sprint',
    price: '67 zł',
    icon: '🏃',
    description: '3 działy które wracają co roku. Dostęp od razu po zakupie. Nagrania 24/7.',
    purchaseUrl: '#kup-teraz',
  },
  {
    id: 'webinar-15-01',
    slug: 'landing-webinar-15-01',
    enabled: false,                  // ← Domyślnie WYŁĄCZONY - wgrasz później
    title: 'Webinar 15 stycznia',
    shortTitle: 'Webinar',
    price: 'Free',
    icon: '🎓',
    description: 'Bezpłatny webinar dla maturzystów.',
    purchaseUrl: '#',
  },
];

/**
 * Sprawdza czy landing page jest aktywny
 * @param {string} slug - slug strony np. "landing-powtorka-14-dni"
 * @returns {boolean}
 */
export function isLandingEnabled(slug) {
  const page = LANDING_PAGES.find(p => p.slug === slug);
  return page?.enabled === true;
}

/**
 * Pobiera dane landing page po slugu
 * @param {string} slug
 * @returns {object|null}
 */
export function getLandingPage(slug) {
  return LANDING_PAGES.find(p => p.slug === slug) || null;
}
