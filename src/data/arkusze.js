// =====================================================
// MATHOUSE — Centralna baza arkuszy CKE i materiałów
// =====================================================
// Każdy arkusz to obiekt:
//   year      — rok kalendarzowy (np. 2025)
//   month     — miesiąc (np. 'maj') — używany do sortowania w obrębie roku
//   monthLabel— co wyświetlamy (np. 'MAJ 2025')
//   name      — krótki opis (np. 'Matura podst.')
//   type      — 'matura' / 'probna' / 'poprawkowa' / 'przykladowy' / 'nowa-era' / 'osmoklasista'
//   podstawa  — '2023+' / '2015-2022' / 'do 2014' (zgodnie z reformami CKE)
//   meta      — krótki opis pod nazwą (np. '34 zadań · podstawa 2023+')
//   badge     — jeśli to nowość (opcjonalnie)
//   pdf       — ścieżka do PDF-a w /public
//   solutions — link do moich rozwiązań (opcjonalnie, dodam później)
// =====================================================

// Helper - określa podstawę programową na podstawie roku
function getPodstawa(year) {
  if (year >= 2023) return '2023+';
  if (year >= 2015) return '2015-2022';
  return 'do 2014';
}

// Mapowanie miesięcy → numer (do sortowania)
const MONTH_ORDER = {
  styczen: 1, luty: 2, marzec: 3, kwiecien: 4, maj: 5, czerwiec: 6,
  lipiec: 7, sierpien: 8, wrzesien: 9, pazdziernik: 10, listopad: 11, grudzien: 12,
};

// =====================================================
// MATURA PODSTAWOWA — wszystkie arkusze 2003-2026
// =====================================================
export const arkuszePodst = [
  // 2026
  { year: 2026, month: 'maj', monthLabel: 'MAJ 2026', name: 'Matura podst.', type: 'matura', meta: '34 zadań · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2026-maj-matura-podstawowa.pdf', badge: 'NAJNOWSZE' },
  { year: 2026, month: 'marzec', monthLabel: 'MARZEC 2026', name: 'Matura próbna', type: 'probna', meta: '35 zadań · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2026-marzec-probna-podstawowa.pdf', badge: 'NOWE' },

  // 2025
  { year: 2025, month: 'sierpien', monthLabel: 'SIERPIEŃ 2025', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2025-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2025, month: 'czerwiec', monthLabel: 'CZERWIEC 2025', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2025-czerwiec-matura-podstawowa.pdf' },
  { year: 2025, month: 'maj', monthLabel: 'MAJ 2025', name: 'Matura podst.', type: 'matura', meta: '35 zadań · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2025-maj-matura-podstawowa.pdf' },

  // 2024
  { year: 2024, month: 'grudzien', monthLabel: 'GRUDZIEŃ 2024', name: 'Matura próbna', type: 'probna', meta: 'podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2024-grudzien-probna-podstawowa.pdf' },
  { year: 2024, month: 'sierpien', monthLabel: 'SIERPIEŃ 2024', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2024-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2024, month: 'czerwiec', monthLabel: 'CZERWIEC 2024', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2024-czerwiec-matura-podstawowa.pdf' },
  { year: 2024, month: 'maj', monthLabel: 'MAJ 2024', name: 'Matura podst.', type: 'matura', meta: '34 zadań · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2024-maj-matura-podstawowa.pdf' },

  // 2023
  { year: 2023, month: 'grudzien', monthLabel: 'GRUDZIEŃ 2023', name: 'Matura próbna', type: 'probna', meta: 'podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2023-grudzien-probna-podstawowa.pdf' },
  { year: 2023, month: 'sierpien', monthLabel: 'SIERPIEŃ 2023', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2023-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2023, month: 'czerwiec', monthLabel: 'CZERWIEC 2023', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2023-czerwiec-matura-podstawowa.pdf' },
  { year: 2023, month: 'maj', monthLabel: 'MAJ 2023', name: 'Matura podst.', type: 'matura', meta: '34 zadań · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2023-maj-matura-podstawowa.pdf' },
  { year: 2023, month: 'styczen', monthLabel: 'PRZYKŁADOWY 2023', name: 'Przykładowy CKE', type: 'przykladowy', meta: 'arkusz pokazowy · podstawa 2023+', pdf: '/pdfs/arkusze/matematyka-2023-przykladowy-arkusz-cke-podstawowa.pdf' },

  // 2022
  { year: 2022, month: 'grudzien', monthLabel: 'GRUDZIEŃ 2022', name: 'Matura próbna', type: 'probna', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2022-grudzien-probna-podstawowa.pdf' },
  { year: 2022, month: 'wrzesien', monthLabel: 'WRZESIEŃ 2022', name: 'Matura próbna', type: 'probna', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2022-wrzesien-probna-podstawowa.pdf' },
  { year: 2022, month: 'sierpien', monthLabel: 'SIERPIEŃ 2022', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2022-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2022, month: 'czerwiec', monthLabel: 'CZERWIEC 2022', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2022-czerwiec-matura-podstawowa.pdf' },
  { year: 2022, month: 'maj', monthLabel: 'MAJ 2022', name: 'Matura podst.', type: 'matura', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2022-maj-matura-podstawowa.pdf' },

  // 2021
  { year: 2021, month: 'sierpien', monthLabel: 'SIERPIEŃ 2021', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2021-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2021, month: 'czerwiec', monthLabel: 'CZERWIEC 2021', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2021-czerwiec-matura-podstawowa.pdf' },
  { year: 2021, month: 'maj', monthLabel: 'MAJ 2021', name: 'Matura podst.', type: 'matura', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2021-maj-matura-podstawowa.pdf' },
  { year: 2021, month: 'marzec', monthLabel: 'MARZEC 2021', name: 'Matura próbna', type: 'probna', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2021-marzec-probna-podstawowa.pdf' },

  // 2020
  { year: 2020, month: 'wrzesien', monthLabel: 'WRZESIEŃ 2020', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2020-wrzesien-poprawkowa-podstawowa.pdf' },
  { year: 2020, month: 'lipiec', monthLabel: 'LIPIEC 2020', name: 'Matura podst.', type: 'matura', meta: 'COVID · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2020-lipiec-matura-podstawowa.pdf' },
  { year: 2020, month: 'czerwiec', monthLabel: 'CZERWIEC 2020', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2020-czerwiec-matura-podstawowa.pdf' },
  { year: 2020, month: 'kwiecien', monthLabel: 'KWIECIEŃ 2020', name: 'Matura próbna', type: 'probna', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2020-kwiecien-probna-podstawowa.pdf' },

  // 2019
  { year: 2019, month: 'sierpien', monthLabel: 'SIERPIEŃ 2019', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2019-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2019, month: 'czerwiec', monthLabel: 'CZERWIEC 2019', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2019-czerwiec-matura-podstawowa.pdf' },
  { year: 2019, month: 'maj', monthLabel: 'MAJ 2019', name: 'Matura podst.', type: 'matura', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2019-maj-matura-podstawowa.pdf' },
  { year: 2019, month: 'marzec', monthLabel: 'NOWA ERA 2019', name: 'Próbna Nowa Era', type: 'nowa-era', meta: 'wydawnictwo · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2019-nowa-era-probna-podstawowa.pdf' },

  // 2018
  { year: 2018, month: 'sierpien', monthLabel: 'SIERPIEŃ 2018', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2018-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2018, month: 'czerwiec', monthLabel: 'CZERWIEC 2018', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2018-czerwiec-matura-podstawowa.pdf' },
  { year: 2018, month: 'maj', monthLabel: 'MAJ 2018', name: 'Matura podst.', type: 'matura', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2018-maj-matura-podstawowa.pdf' },
  { year: 2018, month: 'marzec', monthLabel: 'NOWA ERA 2018', name: 'Próbna Nowa Era', type: 'nowa-era', meta: 'wydawnictwo · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2018-nowa-era-probna-podstawowa.pdf' },

  // 2017
  { year: 2017, month: 'sierpien', monthLabel: 'SIERPIEŃ 2017', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2017-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2017, month: 'czerwiec', monthLabel: 'CZERWIEC 2017', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2017-czerwiec-matura-podstawowa.pdf' },
  { year: 2017, month: 'maj', monthLabel: 'MAJ 2017', name: 'Matura podst.', type: 'matura', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2017-maj-matura-podstawowa.pdf' },
  { year: 2017, month: 'marzec', monthLabel: 'NOWA ERA 2017', name: 'Próbna Nowa Era', type: 'nowa-era', meta: 'wydawnictwo · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2017-nowa-era-probna-podstawowa.pdf' },

  // 2016
  { year: 2016, month: 'sierpien', monthLabel: 'SIERPIEŃ 2016', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2016-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2016, month: 'czerwiec', monthLabel: 'CZERWIEC 2016', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2016-czerwiec-matura-podstawowa.pdf' },
  { year: 2016, month: 'maj', monthLabel: 'MAJ 2016', name: 'Matura podst.', type: 'matura', meta: 'podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2016-maj-matura-podstawowa.pdf' },
  { year: 2016, month: 'marzec', monthLabel: 'NOWA ERA 2016', name: 'Próbna Nowa Era', type: 'nowa-era', meta: 'wydawnictwo · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2016-nowa-era-probna-podstawowa.pdf' },

  // 2015
  { year: 2015, month: 'sierpien', monthLabel: 'SIERPIEŃ 2015', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'pierwsza matura nowej formuły', pdf: '/pdfs/arkusze/matematyka-2015-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2015, month: 'czerwiec', monthLabel: 'CZERWIEC 2015', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2015-czerwiec-matura-podstawowa.pdf' },
  { year: 2015, month: 'maj', monthLabel: 'MAJ 2015', name: 'Matura podst.', type: 'matura', meta: 'pierwsza matura formuły 2015', pdf: '/pdfs/arkusze/matematyka-2015-maj-matura-podstawowa.pdf' },
  { year: 2015, month: 'styczen', monthLabel: 'PRZYKŁADOWY 2015', name: 'Przykładowy CKE', type: 'przykladowy', meta: 'arkusz pokazowy · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2015-przykladowy-arkusz-cke-podstawowa.pdf' },
  { year: 2015, month: 'marzec', monthLabel: 'NOWA ERA 2015', name: 'Próbna Nowa Era', type: 'nowa-era', meta: 'wydawnictwo · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2015-nowa-era-probna-podstawowa.pdf' },

  // 2014
  { year: 2014, month: 'grudzien', monthLabel: 'GRUDZIEŃ 2014', name: 'Matura próbna', type: 'probna', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2014-grudzien-probna-podstawowa.pdf' },
  { year: 2014, month: 'sierpien', monthLabel: 'SIERPIEŃ 2014', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2014-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2014, month: 'czerwiec', monthLabel: 'CZERWIEC 2014', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2014-czerwiec-matura-podstawowa.pdf' },
  { year: 2014, month: 'maj', monthLabel: 'MAJ 2014', name: 'Matura podst.', type: 'matura', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2014-maj-matura-podstawowa.pdf' },

  // 2013
  { year: 2013, month: 'grudzien', monthLabel: 'GRUDZIEŃ 2013', name: 'Matura próbna', type: 'probna', meta: 'formuła 2015 · podstawa 2015-2022', pdf: '/pdfs/arkusze/matematyka-2013-grudzien-probna-formula-2015.pdf' },
  { year: 2013, month: 'sierpien', monthLabel: 'SIERPIEŃ 2013', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2013-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2013, month: 'czerwiec', monthLabel: 'CZERWIEC 2013', name: 'Matura podst.', type: 'matura', meta: 'sesja czerwcowa · podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2013-czerwiec-matura-podstawowa.pdf' },
  { year: 2013, month: 'maj', monthLabel: 'MAJ 2013', name: 'Matura podst.', type: 'matura', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2013-maj-matura-podstawowa.pdf' },

  // 2012
  { year: 2012, month: 'marzec', monthLabel: 'MARZEC 2012', name: 'Matura próbna', type: 'probna', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2012-marzec-probna-podstawowa.pdf' },

  // 2011
  { year: 2011, month: 'sierpien', monthLabel: 'SIERPIEŃ 2011', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2011-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2011, month: 'maj', monthLabel: 'MAJ 2011', name: 'Matura podst.', type: 'matura', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2011-maj-matura-podstawowa.pdf' },

  // 2010
  { year: 2010, month: 'listopad', monthLabel: 'LISTOPAD 2010', name: 'Matura próbna', type: 'probna', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2010-listopad-probna-podstawowa.pdf' },
  { year: 2010, month: 'sierpien', monthLabel: 'SIERPIEŃ 2010', name: 'Matura poprawkowa', type: 'poprawkowa', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2010-sierpien-poprawkowa-podstawowa.pdf' },
  { year: 2010, month: 'maj', monthLabel: 'MAJ 2010', name: 'Matura podst.', type: 'matura', meta: 'pierwsza obowiązkowa matura z matematyki', pdf: '/pdfs/arkusze/matematyka-2010-maj-matura-podstawowa.pdf' },

  // 2009
  { year: 2009, month: 'listopad', monthLabel: 'LISTOPAD 2009', name: 'Matura próbna', type: 'probna', meta: 'podstawa do 2014', pdf: '/pdfs/arkusze/matematyka-2009-listopad-probna-podstawowa.pdf' },

  // 2003
  { year: 2003, month: 'maj', monthLabel: 'MAJ 2003', name: 'Matura podst.', type: 'matura', meta: 'archiwum · stara formuła', pdf: '/pdfs/arkusze/matematyka-2003-maj-matura-podstawowa.pdf' },
];

// =====================================================
// MATURA ROZSZERZONA — pusta na razie, dodasz później
// =====================================================
export const arkuszeRozsz = [
  // TODO: jak wrzucisz arkusze rozszerzone, dopisz je tutaj tym samym wzorem
];

// =====================================================
// ÓSMOKLASISTA
// =====================================================
export const arkusze8 = [
  { year: 2022, month: 'czerwiec', monthLabel: 'CZERWIEC 2022', name: 'EO ósmoklasisty', type: 'osmoklasista', meta: 'termin dodatkowy', pdf: '/pdfs/arkusze/matematyka-2022-czerwiec-egzamin-osmoklasisty-dodatkowy.pdf' },
];

// =====================================================
// INFORMATORY CKE I MATERIAŁY
// =====================================================
export const informatory = [
  { name: 'Informator 2025 — podstawa', meta: 'CKE · poziom podstawowy', pdf: '/pdfs/informatory/informator-maturalny-matematyka-2025-poziom-podstawowy.pdf', color: 'yellow' },
  { name: 'Informator 2023 — rozszerzenie', meta: 'CKE · poziom rozszerzony', pdf: '/pdfs/informatory/informator-maturalny-matematyka-2023-poziom-rozszerzony.pdf', color: 'teal' },
  { name: 'Informator 2023 — podstawa', meta: 'CKE · poziom podstawowy', pdf: '/pdfs/informatory/informator-maturalny-matematyka-2023-poziom-podstawowy.pdf', color: 'yellow' },
  { name: 'Aneks do informatora 2021', meta: 'CKE · zmiany covidowe', pdf: '/pdfs/informatory/informator-maturalny-matematyka-2021-aneks.pdf', color: 'teal' },
  { name: 'Informator 2015', meta: 'CKE · formuła 2015-2022', pdf: '/pdfs/informatory/informator-maturalny-matematyka-2015.pdf', color: 'yellow' },
  { name: 'Informator 2010', meta: 'CKE · stara formuła', pdf: '/pdfs/informatory/informator-maturalny-matematyka-2010.pdf', color: 'teal' },
];

export const zbioryZadan = [
  { name: 'Zbiór zadań — podstawa', meta: 'CKE · oficjalny zbiór', pdf: '/pdfs/informatory/matematyka-zbior-zadan-poziom-podstawowy.pdf', color: 'yellow' },
];

// =====================================================
// Pomocnicze funkcje
// =====================================================
export function getArkusze({ podstawa = 'all', type = 'all' } = {}) {
  let list = [...arkuszePodst];
  if (podstawa !== 'all') list = list.filter((a) => getPodstawa(a.year) === podstawa);
  if (type !== 'all') list = list.filter((a) => a.type === type);
  return list;
}

export { getPodstawa };
