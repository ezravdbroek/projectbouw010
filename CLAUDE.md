# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Projectbouw 010 — aannemersbedrijf in Rotterdam (eigenaar: Mike). Website gebouwd in Astro 5 met Tailwind CSS, deployed op Cloudflare Pages. Donker thema (#1E2228) met witte tekst en witte accenten. Geen goud/kleur-accenten behalve Google-sterren (#FBBC04) bij reviews.

### Bedrijfsinfo
- **Naam:** Projectbouw 010
- **Eigenaar:** Mike
- **Telefoon:** 06-53999433
- **Email:** info@projectbouw010.nl
- **Website:** projectbouw010.nl
- **Regio:** Rotterdam e.o.
- **Diensten:** Aanbouw, Uitbouw, Opbouw, Badkamer Renovatie, Keukenrenovatie, Stukadoor, Cinewall, Pvc Vloer Leggen, Toilet Renovatie, Stalen Deuren, Verlaagd Plafond, Traprenovatie, Tegelzetter
- **Reviews:** Trustoo 9.3 (173+ reviews), Google reviews

### Branding regels
- Primaire kleur: `#1E2228` (donker antraciet)
- Tekst: wit op donker, grijs-tinten voor secundaire tekst
- Accenten: wit knoppen, wit icons — **GEEN goud/kleur-accenten**
- Uitzondering: Google review-sterren gebruiken `#FBBC04`
- Fonts: Inter (body), Playfair Display (headings)
- Icons: Lucide via astro-icon — **NOOIT emoji's gebruiken**
- Logo: `/public/images/logo.png` (het "010" logo) — alleen afbeelding, geen tekst ernaast
- Stijl: luxe, professioneel, minimalistisch donker
- **GEEN witte/lichte secties** — alles blijft donker. Subtiele variatie via `bg-primary-800/30` is ok, maar geen `bg-white`, `bg-gray-100`, of `bg-[#f5f5f5]`

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- No test or lint commands configured yet

## Architecture

- **File-based routing:** Pages in `src/pages/` map directly to routes (e.g., `index.astro` → `/`)
- **Layouts:** `src/layouts/Layout.astro` is the base HTML shell with fonts, meta tags, IntersectionObserver for reveal animations, counter animation, marquee pause-on-hover
- **Components:** `src/components/` contains reusable `.astro` components
- **Assets:** `src/assets/` for source assets; `public/images/` for served images (logo.png, hero.jpg, hero-telefoon.jpeg, over.jpeg, badkamer.jpeg, keuken.jpeg, uitbouw.jpeg, 1.jpg, 2.jpg, 3.jpg)
- **API:** `src/pages/api/offerte.ts` — Postmark email endpoint (prerender = false)

### Key components
- `Navbar.astro` — Sticky nav with Diensten dropdown (3-column, hover on desktop, accordion on mobile), hamburger → X on mobile, `.nav-link` hover underline animation
- `Footer.astro` — Large outlined "PROJECTBOUW 010" header text, 3-column layout (logo+socials, diensten, contact+offerte CTA)
- `CookieConsent.astro` — Cookie banner with localStorage persistence

### Deleted components (now inlined in index.astro)
- ~~`ServiceCard.astro`~~ — Replaced by bento grid items in diensten section
- ~~`ProcessStep.astro`~~ — Replaced by vertical timeline items in werkwijze section
- ~~`TestimonialCard.astro`~~ — Replaced by marquee cards in reviews section

### Pages
- `index.astro` — Homepage secties:
  1. **Hero** — Split-screen (grid-cols-5: 3+2), "010" outlined background text, stats strip (grid-cols-3 on mobile)
  2. **Diensten** — Bento grid (3-kolom), eerste kaart 2-kolom+2-rij, alle kaarten met achtergrondafbeeldingen
  3. **Over Ons** — Grid layout met overlappend glassmorphism tekstblok (`lg:-mr-16`), foto rechts
  4. **Projecten** — Scroll-linked horizontale galerij (350vh sticky section op desktop, horizontaal scrollbaar op mobiel)
  5. **Werkwijze** — Verticale timeline, alternerende links/rechts, grote outlined nummers
  6. **Reviews** — Dubbele marquee (2 rijen, tegengestelde richting), glassmorphism kaarten
  7. **CTA Banner** — Asymmetrisch met subtle diagonale accent (clip-path)
  8. **Contact** — 4 glassmorphism blokken (telefoon, WhatsApp, email, locatie)
- `offerte.astro` — Offerte formulier met file uploads (huidige + gewenste situatie), Postmark integratie, links-uitgelijnde hero
- `api/offerte.ts` — Server endpoint voor Postmark email

### Animation system (defined in Layout.astro `<style is:global>`)
- **Reveal animations:** `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale` — start hidden, animate to visible via IntersectionObserver adding `.is-visible`
- **Stagger delays:** Via CSS `--delay` custom property, e.g. `style="--delay: 0.2s"`
- **Counter animation:** Elements with `data-count` attribute animate from 0 to target value
- **Marquee:** `.marquee-track` (left) en `.marquee-track-reverse` (right), 40s linear infinite, pauze on hover
- **Glassmorphism:** `.glass` utility — `rgba(255,255,255,0.05)` bg + `backdrop-filter: blur(12px)` + white/10 border
- **Outlined text:** `.text-outline` (wit stroke op transparant) en `.text-outline-dark` (donkere stroke)

### Scroll-linked horizontal gallery (Projecten sectie)
- Desktop (>640px): Section is 350vh, sticky container, JavaScript translateX op scroll
- Mobiel (≤640px): Section auto height, overflow-x auto met touch scrolling, hidden scrollbar
- Project kaarten: `w-[300px] sm:w-[360px] lg:w-[420px]`, aspect-[3/4]

### Important patterns
- **Hamburger → X:** Uses absolutely positioned bars with translateY for spacing, rotate for X shape. Default: `translateY(-6px)`, `translateY(0)`, `translateY(6px)`. Open: `rotate(45deg)`, `opacity:0`, `rotate(-45deg)`
- **Overflow prevention:** `overflow-x-hidden` op html + body voorkomt horizontale scroll op mobiel
- **Diensten dropdown:** max-height animatie (niet display:none/block) voor smooth open/close

## Conventions

- Astro component structure: frontmatter (`---`) for logic, HTML template, then `<style>` for scoped CSS
- TypeScript strict mode via `astro/tsconfigs/strict`
- No UI framework integrations (React, Vue, etc.) — pure Astro components
- ES Modules (`"type": "module"` in package.json)
- Tailwind for styling (utility classes), global styles in Layout.astro `<style is:global>`
- Cloudflare Pages adapter (`@astrojs/cloudflare`), output: `static`
- Secties afwisselen met `bg-primary-800/30` voor subtiel contrast — **nooit wit/licht**

## Werkregels voor het bouwen van deze website

### Voordat je begint
- Lees altijd eerst de bestanden die je gaat wijzigen
- Bij een nieuwe feature: bekijk bestaande pagina's/componenten voor de huidige stijl en patronen
- Vraag de gebruiker om verduidelijking als een opdracht meerdere interpretaties heeft

### Tijdens het bouwen
- Maak eerst de HTML-structuur, dan de styling — niet tegelijk
- Gebruik semantische HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) in plaats van alleen `<div>`
- Schrijf mobile-first CSS: begin met de mobile layout, voeg dan media queries toe voor tablet/desktop
- Houd styling in scoped `<style>` tags binnen Astro-componenten — geen losse CSS-bestanden tenzij global styles nodig zijn
- Hergebruik bestaande componenten in plaats van nieuwe te maken met dezelfde functie
- Test met `npm run build` als je twijfelt of iets werkt — build-fouten vang je zo vroeg op
- Zorg dat decoratieve elementen (grote achtergrondtekst, absolute borders) niet buiten hun container lekken — gebruik `overflow-hidden`

### Na elke wijziging
- Draai `npm run build` om te checken op build-fouten

### Kwaliteitsregels
- Elke pagina moet er goed uitzien op alle 3 viewports (desktop, tablet, mobile)
- Geen hardcoded pixel-breedtes voor containers — gebruik `max-width` met `%` of `rem`
- Afbeeldingen altijd met `alt` tekst
- Links en knoppen moeten visueel duidelijk klikbaar zijn
- Kleurcontrast moet voldoende zijn (donkere tekst op lichte achtergrond of vice versa)
- Laad geen externe fonts/scripts tenzij de gebruiker erom vraagt
- Horizontale overflow testen op mobiel — voorkom dat gebruikers kunnen uitzoomen/zijwaarts scrollen

### Bij problemen
- Als de dev server crashed: lees de error output, fix de oorzaak, herstart
- Als een build faalt: lees de foutmelding volledig, zoek de genoemde file en regelnummer op
- Als iets visueel niet klopt maar de code correct lijkt: controleer of er conflicterende CSS is van een parent component of layout
- Probeer niet blindelings dingen totdat het werkt — analyseer de fout eerst

## Configuration

- `astro.config.mjs` — Astro config with Tailwind, sitemap, icon integrations + Cloudflare adapter
- `tailwind.config.mjs` — Custom colors (primary #1E2228), fonts (Inter, Playfair Display), marquee animations
- `tsconfig.json` — Extends `astro/tsconfigs/strict`
- `.env` — `POSTMARK_API_KEY` (niet in repo, moet door gebruiker worden ingesteld)
