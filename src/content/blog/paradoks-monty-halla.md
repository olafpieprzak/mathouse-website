---
title: "Paradoks Monty Halla — kiedy intuicja kosztuje Cię realne pieniądze"
description: "Słynny paradoks teleturnieju, który ośmiesza nawet matematyków. Prosty przykład pokazujący, dlaczego intuicja w decyzjach finansowych potrafi być zła."
date: 2026-05-22
category: matma-biznes
coverEmoji: "🎰"
author: "Olaf Pieprzak"
readTime: 4
featured: false
draft: false
---

## Sytuacja

Jesteś w amerykańskim teleturnieju. Prowadzący pokazuje Ci **3 zamknięte bramy**:
- Za jedną stoi nowy samochód
- Za dwoma — kozy

Wybierasz np. bramę nr **1**. Prowadzący — który **wie gdzie jest samochód** — otwiera jedną z pozostałych bram (np. nr **3**) i pokazuje kozę. Mówi:

> *"Możesz zostać przy bramie 1 albo zmienić na bramę 2. Co wybierasz?"*

**Pytanie:** co się bardziej opłaca — zostać czy zmienić?

## Intuicja mówi: "bez różnicy, 50/50"

Większość ludzi (włącznie z matematykami, którzy się o to publicznie kłócili w latach 90.) powie: skoro zostały 2 bramy, to szansa na samochód za każdą wynosi 50%. Bez znaczenia.

**Intuicja kłamie.** Zmiana bramy daje **2× wyższą szansę** wygranej.

## Dlaczego — bez wzorów, logicznie

Gdy wybierałeś bramę nr 1 **na początku**, miałeś:
- **1/3** szansy że trafiłeś w samochód
- **2/3** szansy że jest w jednej z dwóch pozostałych

Te 2/3 szansy **gdzieś dalej istnieje** — nie znikło. Prowadzący odsłania jedną z dwóch bram (zawsze tę z kozą, bo wie). Cała ta szansa **2/3 skupia się teraz na drugiej, nieotwartej bramie**.

Czyli:
- Brama 1 (Twoja pierwotna): **1/3** szansy
- Brama 2 (ta druga, niepokazana): **2/3** szansy

**Zmiana = podwojenie szans.**

## Symulacja w głowie

Wyobraź sobie **100 bram** zamiast 3. Wybierasz jedną. Prowadzący otwiera **98 z pozostałych 99**, wszystkie z kozą. Zostaje Twoja brama i jedna inna.

Czy nadal myślisz że to "50/50"? Twoja pierwotna szansa była **1/100**. Pozostała brama "przejęła" szansę 99/100 z odrzuconych. Oczywiste że trzeba zmieniać.

## Co to ma wspólnego z biznesem

Wszystko. Paradoks Monty Halla pokazuje **fundamentalny błąd ludzkiej intuicji**: nie aktualizujemy poprawnie ocen prawdopodobieństwa, gdy dostajemy nowe informacje.

Przykłady z prawdziwego życia:

**Inwestowanie:**
Kupiłeś spółkę X (intuicja). Po 6 miesiącach spółka traci 30%, pojawiają się złe newsy (nowa informacja). Sprzedać czy "trzymać bo wróci"? Intuicja mówi "trzymaj, w końcu wybierałem świadomie". Bayesowska aktualizacja mówi: **zmieniaj ocenę w świetle nowych danych**.

**Rekrutacja:**
Masz kandydata A z dobrym CV. Po pierwszej rozmowie pojawiają się sygnały ostrzegawcze. Intuicja: "ale CV było dobre, dam szansę". Statystyka: nowe dane są mocniejsze niż pierwsza ocena.

**Negocjacje cenowe:**
Sprzedawca zna swoją kartę. Ty znasz tylko 1/3 obrazu. Jeśli zachowuje się dziwnie — to **informacja**. Uwzględnij ją.

## Zasada Bayesowska — formalna nazwa tego zjawiska

To co tu się dzieje, w matematyce nazywa się **twierdzeniem Bayesa**:

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

W skrócie: **prawdopodobieństwo czegoś, GDY znasz nowe informacje**, jest inne niż prawdopodobieństwo początkowe. To podstawa nowoczesnego myślenia o ryzyku, od medycyny po sztuczną inteligencję.

## Wniosek

1. Twoja intuicja w decyzjach probabilistycznych **jest zwykle zła** — i to nie wstyd, mózg ewoluował do unikania tygrysów, nie do liczenia szans
2. Gdy dostajesz nową informację — **aktualizuj ocenę**. To nie jest "niekonsekwencja", to jest racjonalność
3. Decyzje typu "trzymam bo zainwestowałem dużo czasu/pieniędzy" (sunk cost fallacy) są **dokładnie tym** błędem co "zostaję przy bramie 1"

## Word do refleksji

Następnym razem gdy będziesz mówił "ja po prostu wiem że tak będzie" — zatrzymaj się. **Sprawdź dane. Policz.** Matematyka jest po Twojej stronie, jeśli pozwolisz jej pracować.

---

*Jeśli chcesz głębiej zrozumieć rachunek prawdopodobieństwa — w [dziale prawdopodobieństwa](/kursy) z matury rozszerzonej idziemy przez to wszystko krok po kroku.*
