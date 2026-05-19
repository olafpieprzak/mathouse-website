# 📁 GRAFIKI MATHOUSE — gdzie wrzucać pliki

Wszystkie obrazy wrzucasz do tego folderu (`public/images/`).
Plik dostępny w kodzie jako `/images/nazwa.png` (bez `public/`).

## 🎨 Co wrzucić i pod jaką nazwą

### 1. LOGO MATHOUSE (priorytet!)
```
logo.svg              ← Logo główne (ciemne tło) — to widzisz na stronie
logo-icon.svg         ← Sama ikonka MATHOUSE (np. literka M w żółtym kwadracie)
logo-white.svg        ← Wersja biała (jeśli planujesz jasne tła)
```

**Format:** Najlepiej SVG (wektor). Jeśli nie masz — PNG min 400×120 px.

### 2. TWOJE ZDJĘCIE (sekcja "O mnie")
```
olaf-portret.jpg      ← Twoje zdjęcie portretowe (preferowane: kwadrat 800×800 px)
olaf-w-akcji.jpg      ← Bonus: zdjęcie z pracy / przy tablicy
```

### 3. OG IMAGE (social media share)
```
og-image.jpg          ← Grafika gdy ktoś udostępnia stronę na FB/IG/Twitter
                          Rozmiar: 1200×630 px
                          Zawartość: Logo MATHOUSE + slogan "Coś więcej niż matma"
```

### 4. KOMPENDIA / EBOOKI (jeśli masz okładki)
```
kompendia/
  okladka-podstawa.jpg
  okladka-rozszerzenie.jpg
  okladka-ebook-trygonometria.jpg
```

### 5. ZDJĘCIA Z LEKCJI (opcjonalne)
```
lekcje/
  lekcja-1.jpg
  lekcja-2.jpg
```

### 6. SCREENSHOTS / DOWODY SPOŁECZNE
```
opinie/
  opinia-1.png
  opinia-2.png
```

## 🚀 Jak to wgrać

### Wariant 1 — przez GitHub web (najprostsze)

1. Wejdź na GitHub: `github.com/olafpieprzak/mathouse-website`
2. Otwórz folder `public/images/`
3. Kliknij **Add file → Upload files**
4. Przeciągnij swoje pliki
5. Commit
6. Cloudflare zbuduje stronę w 60 sek z Twoimi grafikami

### Wariant 2 — wyślij Claude'owi

Po prostu wyślij mi pliki w następnej wiadomości. Spakuję je z V9 i wskażę gdzie się znajdą.

## 💡 Tip

- **SVG** najlepsze do logo (nieskończona skalowalność, mały rozmiar)
- **JPG** najlepsze do zdjęć (mała waga przy dobrej jakości)
- **PNG** najlepsze do screenshotów + grafik z przezroczystością
- **WebP** jeśli chcesz nowoczesny format (mniejsze rozmiary, super szybkie ładowanie)
