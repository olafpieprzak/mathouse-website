# 📄 ARKUSZE CKE — gdzie wrzucać PDF-y

Wszystkie arkusze CKE wrzucasz do tego folderu (`public/arkusze/`).
Plik dostępny w kodzie jako `/arkusze/...` (bez `public/`).

## 📁 Struktura folderów

```
public/arkusze/
├── matura-podstawowa/
│   ├── 2025/
│   │   ├── arkusz.pdf            ← oryginalny arkusz CKE
│   │   └── rozwiazania.pdf       ← Twoje rozwiązania (opcjonalnie)
│   ├── 2024/
│   │   ├── arkusz.pdf
│   │   └── rozwiazania.pdf
│   ├── 2023/
│   └── ...
├── matura-rozszerzona/
│   ├── 2025/
│   │   ├── arkusz.pdf
│   │   └── rozwiazania.pdf
│   └── ...
└── egzamin-osmoklasisty/
    ├── 2025/
    │   ├── arkusz.pdf
    │   └── rozwiazania.pdf
    └── ...
```

## 🎯 Jak nazwy plików mapują się na URL-e

- `public/arkusze/matura-podstawowa/2024/arkusz.pdf`
  → dostępne pod: `/arkusze/matura-podstawowa/2024/arkusz.pdf`

## 🚀 Jak dodać nowy arkusz

### Wariant 1 — przez GitHub web (najprostsze)

1. Wejdź na GitHub: `github.com/olafpieprzak/mathouse-website`
2. Otwórz folder `public/arkusze/matura-podstawowa/` (lub odpowiedni)
3. **Create new folder** → np. `2024`
4. **Upload files** → wrzuć `arkusz.pdf` i `rozwiazania.pdf`
5. Commit changes
6. Cloudflare zbuduje stronę w 60 sek

### Wariant 2 — automatyzacja w przyszłości

Mogę napisać skrypt który czyta zawartość folderu i automatycznie generuje listę arkuszy na stronie. Wtedy wystarczy wgrać PDF i nie trzeba zmieniać kodu.

## 💡 Wpływ na wydajność strony

**ZERO** — PDF-y są plikami statycznymi serwowanymi przez Cloudflare CDN.
Strona ładuje się tak samo szybko, PDF pobiera się tylko gdy użytkownik kliknie download.

## 📺 Bonus: linki do wideo rozwiązań na YouTube

Każdy arkusz może mieć link do Twojego wideo rozwiązania.
Format: dopisz link w `src/data/arkusze.js` (lub bezpośrednio na stronie).
