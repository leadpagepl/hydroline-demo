# HYDROLINE — demo

Jednostronicowa witryna demonstracyjna dla firmy wykonującej instalacje wodne,
kanalizacyjne i grzewcze. React + Vite, bez backendu.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview
```

## Stos

- **Vite 7 + React 19** — statyczny build, brak routingu (jedna strona, kotwice `#uslugi`, `#realizacje`, …).
- **Framer Motion** przez `LazyMotion` + komponenty `m.*` (tryb `strict`). Nie używaj `motion.*` — `strict` to zablokuje i przywróci pełny bundle.
- **Fonty self-hosted** (`@fontsource`): Archivo Variable (display) i Inter Variable — jedna proporcjonalna rodzina dla całej reszty, łącznie z mikro-etykietami.
- Bez GSAP i bez bibliotek UI. Animacje scroll-driven opierają się na `useScroll` / `IntersectionObserver`, reszta na CSS.

## Grafika

Oryginały leżą w `assets-source/` (PNG, ~28 MB) i **nie trafiają do builda**.
Do wyświetlania służą pochodne WebP w `public/img/` (~2,8 MB łącznie ze wszystkimi
szerokościami), wygenerowane przez ffmpeg:

```bash
ffmpeg -i assets-source/<nazwa>.png -vf "scale=<W>:-2:flags=lanczos" \
       -c:v libwebp -quality 80 -compression_level 6 public/img/<nazwa>-<W>.webp
```

Po dodaniu nowej grafiki dopisz ją do manifestu `src/ui/media.js` (lista szerokości
+ proporcje). Manifest zasila `srcset`/`sizes` i rezerwuje miejsce, żeby nie było
przeskoków układu.

Pary „przed/po” muszą mieć **identyczne wymiary** — `project-plumbing-*` są
przeskalowane do wspólnych 1448×1086.

## Sekcje

Hero → Usługi → Detale → Realizacje → Jak pracujemy → O nas → Awarie →
Dlaczego my → Kontakt → stopka.

## Struktura

```
src/
  App.jsx              kolejność sekcji
  components/          po jednym pliku na sekcję
  ui/
    Img.jsx            obrazek responsywny (srcset + rezerwacja miejsca)
    Compare.jsx        suwak przed/po — poziomy i pionowy, obsługa klawiatury
    XRay.jsx           prześwietlenie w hero; poniżej 901 px → Compare
    Annot.jsx          opisy techniczne z odnośnikami na marginesie
    Flow.jsx           piony i trasy rurowe (CSS + Motion)
    Reveal.jsx         wejścia na scrollu, maskowane nagłówki
    media.js           manifest grafik
  styles/
    tokens.css         kolory, typografia, siatka, animacje
    base.css           reset + prymitywy (.wrap, .display, .tech, .lead)
    app.css            style sekcji, na końcu media queries
```

## System

Kolory i typografia siedzą w `src/styles/tokens.css`.

- 85% neutralnych tonów, niebieski = woda zimna, czerwony = ciepła. Akcenty
  pojawiają się tylko jako linia 1 px, punkt, numer albo stan hover.
- Jeden głos typograficzny — **Inter** — dla wszystkiego: przycisków, pól
  formularza, nawigacji i mikro-etykiet (`.tech`: eyebrowy, numery przy
  zdjęciach, podpisy, dymek na zdjęciu w hero). `.tech` siedzi w
  `src/styles/base.css` jako jedno miejsce — waga 560, tracking 0.085em,
  wersaliki. Wcześniej ta warstwa używała IBM Plex Mono; zamieniona na Inter,
  bo mono czytało się jako „konsolowe”, nie premium. Font nie jest już
  ładowany (usunięty z `src/main.jsx`), więc nie zostawiaj gdzieś osobnego
  `font-family: monospace` dla nowych etykiet — dorzuć klasę `.tech`.
- Akcje mają dwa poziomy: `.btn` (główne CTA — prostokątne, wypełnione) oraz
  `.ctrl` (kompaktowa pigułka: przełączniki nad zdjęciem, chipy w formularzu,
  etykiety PRZED/PO). `.ctrl--over` to wariant na zdjęcie, `.ctrl.is-on` to stan
  aktywny. Nowe drobne akcje dokładaj do `.ctrl`, nie stylizuj ich osobno.
- `--cold` / `--hot` służą **grafice** (linie, kropki). Tam, gdzie akcent jest
  tekstem, używaj `--cold-ink` / `--hot-ink` (na jasnym tle) albo `--hot-dk`
  (na ciemnym) — te warianty przechodzą kontrast AA.
- `--gray` (#666B70) i `--gray-2` to lekko przyciemniona wersja szarości z
  palety (#6F7479). Oryginał daje 4,36:1 na tle #F5F6F7, czyli poniżej progu
  AA dla tekstu. Jeśli wrócisz do #6F7479, tekst przestanie spełniać AA.
- Easing: `--ease` = `cubic-bezier(0.22, 1, 0.36, 1)`, czasy 380–1000 ms.

## Dostępność

- Semantyczne sekcje z `aria-labelledby`, widoczny focus, link „Przejdź do treści”.
- Suwaki przed/po to `role="slider"` — strzałki (Shift = większy krok), Home/End.
- Prześwietlenie w hero ma dostępny z klawiatury przełącznik „Pokaż instalację”.
- `prefers-reduced-motion`: parallaksa i skalowanie zdjęć są wyłączone,
  a karuzela opinii (po jej włączeniu) zatrzymuje się i staje przewijalna.

## Do uzupełnienia przed publikacją

Miejsca oznaczone klasą `is-placeholder` albo dopiskiem „do uzupełnienia”:

- telefon (`+48 XXX XXX XXX` — w `Nav`, `Emergency`, `Contact`, `Footer`, `MobileBar`),
- e-mail, adres, obszar działania, godziny kontaktu, NIP/REGON,
- lokalizacja realizacji 01,
- podpis pod zdjęciem w sekcji „O nas”,
- **opinie klientów** — sekcja jest **wyłączona**. Nie ma na stronie żadnych
  wymyślonych cytatów ani ocen. Komponent `src/components/Reviews.jsx` jest
  gotowy i czeka na prawdziwe wypowiedzi: uzupełnij `q` i `who` w slotach,
  a potem odkomentuj import i `<Reviews />` w `src/App.jsx` oraz przywróć
  pozycję `OPINIE` w `NAV_LINKS` (`src/components/Nav.jsx`).

Formularz kontaktowy nie ma podłączonej wysyłki — obsłuż `onSubmit`
w `src/components/Contact.jsx`.

Świadomie **nie ma** tu liczby lat doświadczenia, liczby realizacji, ocen Google
ani certyfikatów. Dodaj je dopiero wtedy, gdy będą potwierdzone.

## Nieużywane grafiki

`plumber-at-work` i `cta-premium-bathroom` nie są nigdzie wyświetlane — sekcje,
w których były, zostały usunięte. Pliki WebP zostają w `public/img/`, a wpisy
w `src/ui/media.js` są nadal poprawne, więc wystarczy wstawić `<Img name="…" />`,
żeby ich użyć. Jeśli mają zniknąć z builda, skasuj oba zestawy z `public/img/`
i odpowiadające im wpisy z manifestu.

## Favicon

Znak: geometryczne „H” z dwóch grubych pionów i belki — czarny (`--ink`,
`#151719`) na białym kwadracie z lekko zaokrąglonym rogiem. Belka trzyma się
w prześwicie między pionami, więc przy odrobinie dobrej woli czyta się też
jako złączka na dwóch rurach — spójne z branżą, ale bez żadnego dodatkowego
detalu, który mógłby się rozmyć w 16 px.

Źródło: `src/assets/favicon.svg` (ten sam plik jest skopiowany do
`public/favicon.svg`, bo stamtąd serwuje go przeglądarka). Wygenerowane z niego:

- `favicon.svg` — używany jako pierwszy `<link rel="icon">`, ostry w każdym rozmiarze
- `favicon.ico` — PNG-w-ICO (16/32/48 px), fallback dla przeglądarek ignorujących SVG
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
- `apple-touch-icon.png` (180 px) — ikona przy dodaniu do ekranu na iOS
- `icon-192.png`, `icon-512.png` + `site.webmanifest` — ikony pod Android/PWA

Żeby zmienić znak: edytuj `src/assets/favicon.svg`, skopiuj do `public/`, a PNG-i
i `favicon.ico` wygeneruj ponownie z tego samego pliku (każdy rozmiar to SVG
narysowany na `<canvas>` i wyeksportowany jako PNG — nie wymaga żadnych
narzędzi poza przeglądarką; `.ico` to po prostu 16/32/48 px spakowane w jeden
kontener PNG-w-ICO).

## Ton tekstów

Bardzo proste zdania i słowa, których klient używa sam („naprawa przecieków”,
a nie „usuwanie nieszczelności instalacji”). Bez metafor, bez opowieści o marce,
bez sloganów. Jeśli zdanie nie mówi, co robimy, jak pracujemy albo jak się
skontaktować — nie ma go na stronie.

Nagłówki są rozbite na linie ręcznie (tablice `lines` w komponentach) i
dopasowane do szerokości kolumn — jeśli zmieniasz tekst nagłówka, sprawdź,
czy linia nie zawija się w połowie.
