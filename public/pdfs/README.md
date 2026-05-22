# Pliki PDF - instrukcja wgrywania

Wszystkie PDF-y wrzucasz do tego katalogu `/public/pdfs/`.
Astro skopiuje je automatycznie do `dist/pdfs/` podczas builda.
Po deploye będą dostępne pod adresem `https://mathouse.pl/pdfs/...`.

---

## 📂 KATALOG: `/public/pdfs/arkusze/`

Wrzuć tu te **64 arkusze matury podstawowej + 1 ósmoklasista** (zachowaj nazwy plików dokładnie tak jak są — bez zmian):

### Arkusze matury podstawowej
```
matematyka-2026-maj-matura-podstawowa.pdf
matematyka-2026-marzec-probna-podstawowa.pdf
matematyka-2025-sierpien-poprawkowa-podstawowa.pdf
matematyka-2025-czerwiec-matura-podstawowa.pdf
matematyka-2025-maj-matura-podstawowa.pdf
matematyka-2024-grudzien-probna-podstawowa.pdf
matematyka-2024-sierpien-poprawkowa-podstawowa.pdf
matematyka-2024-czerwiec-matura-podstawowa.pdf
matematyka-2024-maj-matura-podstawowa.pdf
matematyka-2023-grudzien-probna-podstawowa.pdf
matematyka-2023-sierpien-poprawkowa-podstawowa.pdf
matematyka-2023-czerwiec-matura-podstawowa.pdf
matematyka-2023-maj-matura-podstawowa.pdf
matematyka-2023-przykladowy-arkusz-cke-podstawowa.pdf
matematyka-2022-grudzien-probna-podstawowa.pdf
matematyka-2022-wrzesien-probna-podstawowa.pdf
matematyka-2022-sierpien-poprawkowa-podstawowa.pdf
matematyka-2022-czerwiec-matura-podstawowa.pdf
matematyka-2022-maj-matura-podstawowa.pdf
matematyka-2021-sierpien-poprawkowa-podstawowa.pdf
matematyka-2021-czerwiec-matura-podstawowa.pdf
matematyka-2021-maj-matura-podstawowa.pdf
matematyka-2021-marzec-probna-podstawowa.pdf
matematyka-2020-wrzesien-poprawkowa-podstawowa.pdf
matematyka-2020-lipiec-matura-podstawowa.pdf
matematyka-2020-czerwiec-matura-podstawowa.pdf
matematyka-2020-kwiecien-probna-podstawowa.pdf
matematyka-2019-sierpien-poprawkowa-podstawowa.pdf
matematyka-2019-czerwiec-matura-podstawowa.pdf
matematyka-2019-maj-matura-podstawowa.pdf
matematyka-2019-nowa-era-probna-podstawowa.pdf
matematyka-2018-sierpien-poprawkowa-podstawowa.pdf
matematyka-2018-czerwiec-matura-podstawowa.pdf
matematyka-2018-maj-matura-podstawowa.pdf
matematyka-2018-nowa-era-probna-podstawowa.pdf
matematyka-2017-sierpien-poprawkowa-podstawowa.pdf
matematyka-2017-czerwiec-matura-podstawowa.pdf
matematyka-2017-maj-matura-podstawowa.pdf
matematyka-2017-nowa-era-probna-podstawowa.pdf
matematyka-2016-sierpien-poprawkowa-podstawowa.pdf
matematyka-2016-czerwiec-matura-podstawowa.pdf
matematyka-2016-maj-matura-podstawowa.pdf
matematyka-2016-nowa-era-probna-podstawowa.pdf
matematyka-2015-sierpien-poprawkowa-podstawowa.pdf
matematyka-2015-czerwiec-matura-podstawowa.pdf
matematyka-2015-maj-matura-podstawowa.pdf
matematyka-2015-przykladowy-arkusz-cke-podstawowa.pdf
matematyka-2015-nowa-era-probna-podstawowa.pdf
matematyka-2014-grudzien-probna-podstawowa.pdf
matematyka-2014-sierpien-poprawkowa-podstawowa.pdf
matematyka-2014-czerwiec-matura-podstawowa.pdf
matematyka-2014-maj-matura-podstawowa.pdf
matematyka-2013-sierpien-poprawkowa-podstawowa.pdf
matematyka-2013-czerwiec-matura-podstawowa.pdf
matematyka-2013-maj-matura-podstawowa.pdf
matematyka-2012-marzec-probna-podstawowa.pdf
matematyka-2011-sierpien-poprawkowa-podstawowa.pdf
matematyka-2011-maj-matura-podstawowa.pdf
matematyka-2010-listopad-probna-podstawowa.pdf
matematyka-2010-sierpien-poprawkowa-podstawowa.pdf
matematyka-2010-maj-matura-podstawowa.pdf
matematyka-2009-listopad-probna-podstawowa.pdf
matematyka-2003-maj-matura-podstawowa.pdf
```

### Arkusz ósmoklasisty
```
matematyka-2022-czerwiec-egzamin-osmoklasisty-dodatkowy.pdf
```

### ⚠️ JEDEN PLIK WYMAGA ZMIANY NAZWY:
- Plik z polskimi krzakami **`Matematyka - 2013-12 - Matura podstawowa - Pr�bny - Formu�a 2015 - CKE - Arkusz.pdf`** zmień nazwę na:
  ```
  matematyka-2013-grudzien-probna-formula-2015.pdf
  ```
  (PDF jest poprawny w środku, tylko nazwa jest zepsuta przez kodowanie)

---

## 📂 KATALOG: `/public/pdfs/informatory/`

Wrzuć tu **6 informatorów + zbiór zadań** (7 plików razem):

### Informatory CKE
```
informator-maturalny-matematyka-2025-poziom-podstawowy.pdf
informator-maturalny-matematyka-2023-poziom-rozszerzony.pdf
informator-maturalny-matematyka-2023-poziom-podstawowy.pdf
informator-maturalny-matematyka-2021-aneks.pdf
informator-maturalny-matematyka-2015.pdf
informator-maturalny-matematyka-2010.pdf
```

### ⚠️ JEDEN PLIK WYMAGA ZMIANY NAZWY:
- Plik **`informator-maturalny-matematyka-2023-poziom-podstawowy (1).pdf`** (z " (1)") zmień nazwę na:
  ```
  informator-maturalny-matematyka-2023-poziom-podstawowy.pdf
  ```
  (usuń " (1)" — to duplikat od pobrania)

### Zbiór zadań CKE
- Plik **`Matematyka - zbior zadan na poziomie podstawowym.pdf`** zmień nazwę na:
  ```
  matematyka-zbior-zadan-poziom-podstawowy.pdf
  ```
  (bez spacji, bez wielkich liter — żeby URL działał wszędzie)

---

## ✅ PODSUMOWANIE ZMIAN NAZW (3 pliki):

| Stara nazwa | Nowa nazwa |
|---|---|
| `Matematyka - 2013-12 - Matura podstawowa - Pr�bny - Formu�a 2015 - CKE - Arkusz.pdf` | `matematyka-2013-grudzien-probna-formula-2015.pdf` |
| `informator-maturalny-matematyka-2023-poziom-podstawowy (1).pdf` | `informator-maturalny-matematyka-2023-poziom-podstawowy.pdf` |
| `Matematyka - zbior zadan na poziomie podstawowym.pdf` | `matematyka-zbior-zadan-poziom-podstawowy.pdf` |

Wszystkie pozostałe pliki zostaw z oryginalnymi nazwami.

---

## 🚀 Po wgraniu plików:

1. Commit + push do GitHub: `git add public/pdfs && git commit -m "feat: dodaj arkusze CKE i informatory" && git push`
2. Cloudflare Pages automatycznie rebuilduje i deployuje
3. Sprawdź czy linki działają — wejdź na `https://mathouse.pl/arkusze` i kliknij dowolny "PDF ↓"
