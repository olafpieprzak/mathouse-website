# 📐 Matma w praktyce — jak dodać nowy artykuł

## Najkrótsza wersja (3 kroki)

1. **Skopiuj jeden z istniejących plików** z tego folderu (np. `procent-skladany-buffett.md`)
2. **Zmień nazwę pliku** na slug nowego artykułu (np. `funkcja-wykladnicza-wzrost-biznesu.md`)
3. **Wpisz nagłówek + treść**, zapisz, push do GitHuba → artykuł pojawi się automatycznie na `/wiedza`

To wszystko. Strona listy artykułów aktualizuje się sama.

---

## Schemat pliku — co MUSI być na górze

Każdy plik `.md` zaczyna się od nagłówka YAML w trzech myślnikach `---`:

```markdown
---
title: "Tytuł artykułu — krótki i chwytliwy"
description: "Opis 1-2 zdania (idzie do Google + jako podgląd na stronie listy)"
date: 2026-05-29
category: matma-biznes
coverEmoji: "💰"
author: "Olaf Pieprzak"
readTime: 5
featured: false
draft: false
---

## Pierwszy nagłówek

Treść artykułu od tego momentu...
```

### Co znaczą pola

| Pole | Wymagane | Co tam wpisać |
|------|----------|---------------|
| `title` | TAK | Tytuł artykułu (max ~70 znaków dla SEO) |
| `description` | TAK | 1-2 zdania opisu (max ~160 znaków dla SEO/Google) |
| `date` | TAK | Data publikacji w formacie `RRRR-MM-DD` |
| `category` | TAK | Jedna z kategorii (lista poniżej) |
| `coverEmoji` | NIE | Emoji widoczne jako "okładka" (domyślnie 📐) |
| `author` | NIE | Domyślnie "Olaf Pieprzak" |
| `readTime` | NIE | Liczba minut czytania (np. 5) |
| `featured` | NIE | `true` = wyróżniony na górze listy (max 1 artykuł) |
| `draft` | NIE | `true` = NIE pokazuj na stronie (szkic) |

### Dostępne kategorie

- `matma-biznes` — Matma w biznesie (żółty)
- `inwestowanie` — Inwestowanie (zielony)
- `rozwoj-osobisty` — Rozwój osobisty (turkusowy)
- `matma-praktyczna` — Matma praktyczna (biały)
- `matura` — Matura (czerwony)
- `inne` — Inne (szary)

---

## Formatowanie treści (Markdown)

```markdown
## To jest nagłówek H2 (większy)

### To jest H3 (mniejszy)

To jest **pogrubiony tekst** a to *kursywa*.

- Lista punktowana 1
- Lista punktowana 2

1. Lista numerowana 1
2. Lista numerowana 2

> To jest cytat — ładnie wygląda dla wypowiedzi (Einstein, Buffett, itp.)

[Tekst linka](/kursy) — link do innej strony MATHOUSE
[Link zewnętrzny](https://example.com)

`kod inline` — np. dla wzorów `K_n = K_0(1+r)^n`

---

Pozioma linia (3 myślniki) — oddziela sekcje.
```

---

## Przykład nowego artykułu — krok po kroku

Załóżmy że chcesz dodać artykuł o funkcji wykładniczej w biznesie:

1. **Pomyśl nad slugem (URL)** — krótki, bez polskich znaków, z myślnikami:
   - dobry: `funkcja-wykladnicza-w-biznesie.md`
   - zły: `Funkcja Wykładnicza W Biznesie.md`
   - zły: `funkcja_wykladnicza.md` (używaj myślników, nie podkreślników)

2. **Skopiuj** `procent-skladany-buffett.md` i zmień nazwę na nowy slug

3. **Edytuj nagłówek**:

```markdown
---
title: "Funkcja wykładnicza — dlaczego startupy rosną tak szybko"
description: "Jak działa wzrost wykładniczy w biznesie i dlaczego pierwsze 5 lat startupu wygląda jak porażka, a po 10 latach jak cud."
date: 2026-06-05
category: matma-biznes
coverEmoji: "🚀"
readTime: 6
featured: false
---

## Treść artykułu...
```

4. **Zapisz** plik

5. **GitHub Desktop** → Commit → Push

6. **Cloudflare** zdeployuje w 1-2 min → artykuł pojawi się na `/wiedza` i pod `/wiedza/funkcja-wykladnicza-w-biznesie`

---

## Pomysły na kolejne artykuły

### Matma w biznesie
- Funkcja wykładnicza — dlaczego startupy rosną tak szybko
- Krzywa Lafféra w polityce podatkowej
- Optymalizacja czasu nauki — krzywa Ebbinghausa
- Twierdzenie o wartości średniej w prognozach sprzedaży

### Inwestowanie
- ✅ Procent składany (już jest)
- Wartość oczekiwana — kiedy zagrać, kiedy się wycofać
- Korelacja vs przyczynowość na giełdzie
- Czarne łabędzie — kiedy statystyka kłamie

### Rozwój osobisty
- Reguła 80/20 (Pareto) w codziennym życiu
- Krzywa zapominania Ebbinghausa — jak uczyć się efektywniej
- Twierdzenie o złotej proporcji w designie i naturze

### Matma praktyczna
- ✅ Paradoks Monty Halla (już jest)
- Paradoks urodzin — dlaczego loteria to bzdura
- Liczby Fibonacciego w naturze
- Matematyka pokera — kiedy folde'ować

---

## Co Olaf musi zrobić aby blog działał

1. **Wkleić 6 prawdziwych opinii Google** w `src/components/OpinieGoogle.astro`
2. **Sprawdzić** czy emoji w polu `coverEmoji` Ci się podoba — łatwo zmienić
3. **Pierwszy artykuł** — albo zostaw moje 2 przykładowe jako wzór, albo edytuj
4. **Plan na 4-8 tygodni** — wybierz tematy, opracuj kolejność

---

## Tryb szkicu

Jeśli zaczynasz artykuł ale jeszcze go nie kończysz, daj w nagłówku:

```yaml
draft: true
```

Artykuł nie pojawi się na stronie. Po skończeniu zmień na `draft: false` lub usuń całą linię.

---

## Help

Jakby coś nie działało — daj znać. Najczęstsze błędy:
- **Cudzysłowy w tytule** — używaj zwykłych `"`, nie polskich „"
- **Data w złym formacie** — musi być `2026-05-29`, nie `29.05.2026`
- **Category z literówką** — musi być dokładnie jedna z listy wyżej
- **Brak `---` na początku i końcu nagłówka** — to konieczne

---

## Wzory matematyczne (KaTeX)

Możesz używać LaTeX-owych wzorów w artykułach. Renderują się automatycznie.

### Wzory blokowe (na całą szerokość, wyśrodkowane)

Otaczasz `$$ ... $$`:

```markdown
$$K_n = K_0 \cdot (1 + r)^n$$
```

Renderuje się jako ładny duży wzór wyśrodkowany.

### Wzory inline (w środku zdania)

Otaczasz pojedynczym `$ ... $`:

```markdown
Wzór dla pola koła to $A = \pi r^2$, gdzie $r$ to promień.
```

### Przykłady składni LaTeX

| Co chcę | Składnia |
|---------|----------|
| Ułamek | `\frac{licznik}{mianownik}` |
| Potęga | `x^2` lub `x^{2n}` |
| Indeks dolny | `K_0` lub `x_{i+1}` |
| Pierwiastek | `\sqrt{x}` |
| Pierwiastek n-tego stopnia | `\sqrt[n]{x}` |
| Suma | `\sum_{i=1}^{n} x_i` |
| Całka | `\int_{a}^{b} f(x) dx` |
| Granica | `\lim_{x \to \infty}` |
| Greckie litery | `\alpha, \beta, \pi, \Sigma, \Delta` |
| Mnożenie | `\cdot` (kropka) |
| Plus minus | `\pm` |
| Mniejsze/większe | `\leq, \geq, \neq` |
| Strzałka | `\to, \Rightarrow, \Leftrightarrow` |

### Częsty błąd

Cudzysłów `"` w środku wzoru psuje renderowanie. Zamiast tego użyj `\text{}`:

```markdown
$$E = mc^2 \quad \text{(wzór Einsteina)}$$
```

