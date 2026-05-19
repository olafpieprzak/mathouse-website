# 🧹 Jak czyścić cache (gdy widzisz buga)

Po wgraniu zmian na GitHub, Cloudflare zbuduje w 60 sek — **ale Twoja przeglądarka może pokazywać stary cache**.

## 🚀 Szybkie rozwiązania (od najszybszego)

### 1. Hard Reload — najszybsze
- **Chrome / Edge:** `Ctrl + Shift + R` (Windows) lub `Cmd + Shift + R` (Mac)
- **Firefox:** `Ctrl + F5`
- **Safari:** `Cmd + Option + R`

Wymusza ponowne ściągnięcie wszystkich plików, bez używania cache.

### 2. Tryb incognito — najpewniejsze
- **Chrome:** `Ctrl + Shift + N`
- **Firefox:** `Ctrl + Shift + P`
- **Safari:** `Cmd + Shift + N`

Świeży cache, czyste cookies. **Otwórz stronę w incognito** żeby zobaczyć "jak widzi nowy odwiedzający".

### 3. DevTools — dla deweloperów
1. F12 → karta **Network**
2. Zaznacz **"Disable cache"**
3. Trzymaj tę kartę otwartą gdy testujesz

### 4. Cloudflare Cache Purge — na maksa
Jeśli problem jest po stronie serwera Cloudflare:

1. Wejdź na `dash.cloudflare.com`
2. Wybierz domenę
3. **Caching** → **Configuration**
4. **Purge Everything** (lub Custom Purge dla konkretnego URL-a)

Wymusza świeże pliki dla **wszystkich** użytkowników, nie tylko Ciebie. **Używaj rzadko** — to "reset wszystkiego".

---

## 🎯 Workflow po każdej zmianie

1. Wgraj ZIP zawartość na GitHub
2. **Poczekaj 60 sek** aż Cloudflare zbuduje (sprawdź w `Pages → Deployments`)
3. Otwórz stronę w **trybie incognito** żeby pewno zobaczyć świeżą wersję
4. Jeśli widzisz starą wersję → **Hard reload** (Ctrl+Shift+R) w incognito
5. Jeśli **dalej** stara → **Cloudflare Purge Everything**

---

## 🔍 Jak sprawdzić czy nowa wersja jest na serwerze?

Dodaj `?v=999` do URL — np. `mathouse-website-pages.pages.dev/?v=999`
To omija cache przeglądarki i wymusza świeżą wersję z serwera.

---

## 💡 Pro tip

Otwórz **DevTools (F12) → Application → Storage → Clear site data**
To wyczyści **wszystko** związane z tym konkretnym sajtem.
