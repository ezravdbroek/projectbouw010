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

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- No test or lint commands configured yet

## Architecture

- **File-based routing:** Pages in `src/pages/` map directly to routes (e.g., `index.astro` → `/`)
- **Layouts:** `src/layouts/Layout.astro` is the base HTML shell with fonts, meta tags, IntersectionObserver for fade-in animations, counter animation, carousel pause-on-hover
- **Components:** `src/components/` contains reusable `.astro` components
- **Assets:** `src/assets/` for source assets; `public/images/` for served images (logo.png, over.jpg)
- **API:** `src/pages/api/offerte.ts` — Postmark email endpoint (prerender = false)

### Key components
- `Navbar.astro` — Sticky nav with Diensten dropdown (3-column, hover on desktop, accordion on mobile), hamburger → X on mobile
- `Footer.astro` — 4-column footer with logo, diensten links, contact info
- `CookieConsent.astro` — Cookie banner with localStorage persistence
- `TestimonialCard.astro` — Compact review card with Google-goud sterren (#FBBC04)
- `ServiceCard.astro` — Dienst kaart met wit icon
- `ProcessStep.astro` — Werkwijze stap met nummer

### Pages
- `index.astro` — Homepage: Hero, Diensten (6 cards), Over Ons, Projecten, Werkwijze (4 stappen), Reviews (auto-scroll carousel), CTA Banner, Contact
- `offerte.astro` — Offerte formulier met file uploads (huidige + gewenste situatie), Postmark integratie
- `api/offerte.ts` — Server endpoint voor Postmark email

### Important patterns
- **Fade-in animations:** Elements with `.fade-in` class start at `opacity:0; translateY(24px)` and get `.is-visible` added by IntersectionObserver
- **Counter animation:** Elements with `data-count` attribute animate from 0 to target value
- **Review carousel:** CSS keyframe `scrollReviews` (28s, translateX 0→-50%), cards duplicated for seamless loop, pause on hover
- **Hamburger → X:** Uses absolutely positioned bars with translateY for spacing, rotate for X shape. Default: `translateY(-6px)`, `translateY(0)`, `translateY(6px)`. Open: `rotate(45deg)`, `opacity:0`, `rotate(-45deg)`

## Conventions

- Astro component structure: frontmatter (`---`) for logic, HTML template, then `<style>` for scoped CSS
- TypeScript strict mode via `astro/tsconfigs/strict`
- No UI framework integrations (React, Vue, etc.) — pure Astro components
- ES Modules (`"type": "module"` in package.json)
- Tailwind for styling (utility classes), global styles in Layout.astro `<style is:global>`
- Cloudflare Pages adapter (`@astrojs/cloudflare`), output: `static`

## Visual Debugging with Screenshots

Playwright is installed as a dev dependency for taking screenshots of the website. Screenshots are saved to `screenshots/` (gitignored, separate from project assets).

### How to take screenshots

1. Start the dev server: `npm run dev`
2. Run the screenshot script: `node scripts/screenshot.mjs http://localhost:4321 index`
   - First arg: base URL (default `http://localhost:4321`)
   - Second arg: comma-separated page routes using names, not `/` (e.g., `index`, `about`, `index,about,contact`)
   - On Windows/Git Bash, avoid passing bare `/` as an argument (it gets mangled); use `index` instead
3. Screenshots are saved as `{page}-{viewport}.png` in `screenshots/` for three viewports: desktop (1920x1080), tablet (768x1024), mobile (375x812)
4. The screenshot script forces `.is-visible` on all `.fade-in` elements and sets `[data-count]` values before capture

### Reference screenshots
- `screenshots/referentie-diensten-dropdown.png` — Diensten dropdown van de huidige live site als referentie

### When to use screenshots

- **After making visual/CSS changes:** Take before and after screenshots to verify layout, spacing, colors, and responsiveness across all three viewports
- **When debugging UI bugs:** Screenshot the broken state, fix the code, screenshot again to confirm the fix
- **After adding new pages or components:** Screenshot to verify they render correctly on all viewports
- **Read screenshots using the Read tool** — it displays images visually, allowing direct inspection of the rendered page

### Screenshot workflow

1. Take screenshots of the current state before making changes
2. Make code changes
3. Take new screenshots and compare visually using Read tool
4. Check all three viewports (desktop, tablet, mobile) for responsive issues
5. Old screenshots are overwritten automatically — take them again if you need a fresh baseline

## Visuele fouten herkennen in screenshots

Controleer screenshots altijd op deze punten:

### Layout & structuur
- Elementen die overlappen of buiten hun container vallen
- Onverwachte horizontale scrollbar (wijst op overflow)
- Content die tegen de rand van het scherm plakt zonder padding
- Lege ruimtes waar content hoort te staan (kapotte imports, missende afbeeldingen)
- Footer die niet onderaan de pagina staat bij weinig content

### Typografie & leesbaarheid
- Tekst die te klein is op mobile (kleiner dan ~14px)
- Tekst die over afbeeldingen of andere elementen loopt zonder contrast
- Regels die te breed zijn op desktop (meer dan ~75 tekens per regel)
- Afgeknipte tekst (text-overflow) waar dat niet hoort

### Responsiveness (vergelijk alle 3 viewports)
- Desktop-layout die onveranderd op mobile verschijnt (niet responsive)
- Knoppen of links die te klein zijn om op mobile te tappen (min 44x44px)
- Kolommen die op mobile naast elkaar blijven staan in plaats van stapelen
- Afbeeldingen die niet meeschalen en buiten het scherm vallen

### Visuele consistentie
- Inconsistente spacing/margins tussen vergelijkbare elementen
- Kleuren die niet bij het ontwerp passen of slecht contrast hebben
- Afbeeldingen die uitgerekt of samengedrukt zijn (verkeerde aspect ratio)
- Borders, schaduwen of hoeken die inconsistent zijn tussen componenten

### Kapotte elementen
- Afbeeldingen die niet laden (gebroken icoon of lege ruimte)
- Iconen die als tekst/vierkantjes verschijnen (missend font)
- Lege secties waar dynamische content hoort
- Console-errors zichtbaar in de pagina (Astro error overlay)

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

### Na elke wijziging
- Draai `npm run build` om te checken op build-fouten
- Neem screenshots van alle gewijzigde pagina's op alle 3 viewports
- Bekijk de screenshots met Read tool en controleer op de punten hierboven
- Als er een visueel probleem is: fix het direct, screenshot opnieuw, en verifieer

### Kwaliteitsregels
- Elke pagina moet er goed uitzien op alle 3 viewports (desktop, tablet, mobile)
- Geen hardcoded pixel-breedtes voor containers — gebruik `max-width` met `%` of `rem`
- Afbeeldingen altijd met `alt` tekst
- Links en knoppen moeten visueel duidelijk klikbaar zijn
- Kleurcontrast moet voldoende zijn (donkere tekst op lichte achtergrond of vice versa)
- Laad geen externe fonts/scripts tenzij de gebruiker erom vraagt

### Bij problemen
- Als de dev server crashed: lees de error output, fix de oorzaak, herstart
- Als een build faalt: lees de foutmelding volledig, zoek de genoemde file en regelnummer op
- Als iets visueel niet klopt maar de code correct lijkt: controleer of er conflicterende CSS is van een parent component of layout
- Probeer niet blindelings dingen totdat het werkt — analyseer de fout eerst

## Configuration

- `astro.config.mjs` — Astro config with Tailwind, sitemap, icon integrations + Cloudflare adapter
- `tailwind.config.mjs` — Custom colors (primary #1E2228), fonts (Inter, Playfair Display), animations
- `tsconfig.json` — Extends `astro/tsconfigs/strict`
- `.env` — `POSTMARK_API_KEY` (niet in repo, moet door gebruiker worden ingesteld)
