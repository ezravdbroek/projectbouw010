# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Projectbouw 010 — aannemersbedrijf in Rotterdam (eigenaar: Mike Gouri). Website gebouwd in Astro 5 met Tailwind CSS, deployed op Cloudflare Pages. Puur zwart-wit-grijs design — geen kleuraccenten. Typografie, witruimte en warme foto's bepalen de sfeer.

### Bedrijfsinfo
- **Naam:** Projectbouw 010
- **Eigenaar:** Mike Gouri
- **Telefoon:** 06-53999433
- **Email:** info@projectbouw010.nl
- **Website:** projectbouw010.nl
- **Adres:** Theodoor Colenbranderhof 5, 3059 LS Rotterdam
- **KVK:** 86943030
- **Regio:** Rotterdam e.o.
- **Diensten:** Aanbouw, Uitbouw, Opbouw, Badkamer Renovatie, Keukenrenovatie, Stukadoor, Cinewall, PVC Vloer Leggen, Toilet Renovatie, Stalen Deuren, Verlaagd Plafond, Traprenovatie, Tegelzetter, Beton Ciré
- **Reviews:** Trustoo 9.3 (173+ reviews), Google reviews

### Branding regels
- Basis bg: `#ffffff` (wit — content secties)
- Donkere secties: `#111111` (nav, footer, hero banners, reviews, CTA's)
- Donkere kaarten: `#1c1c1c` (kaartjes op donkere bg)
- Lichte alt: `#f4f4f4` (afwisseling lichte secties)
- Warme sectie: `#f7f5f0` (over-ons op homepage)
- Tekst donker: `#111111`
- Tekst muted: `#777777`
- Borders: `#e0e0e0`
- **Geen kleuraccenten** — puur zwart-wit-grijs
- Fonts: **Oswald** (headings, weight 600-700, uppercase), **Source Sans 3** (body, weight 400-600)
- Font loading: Google Fonts `<link>` tags (geen npm packages)
- Hero font-size: `clamp(3rem, 7vw, 6rem)` via `text-hero` Tailwind class
- Icons: Lucide via astro-icon — **NOOIT emoji's gebruiken**
- Logo: `/public/images/logo.png` (het "010" logo) — alleen afbeelding, geen tekst ernaast
- Stijl: luxe, professioneel, minimalistisch met zwart-wit contrast
- CTA knoppen: `bg-[#111] text-white` op lichte secties, `bg-white text-[#111]` op donkere secties
- Review sterren: wit (geen kleur)
- Hover underline nav: wit

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- No test or lint commands configured yet

## Architecture

- **File-based routing:** Pages in `src/pages/` map directly to routes
- **Data files:** `src/data/diensten.ts` (14 diensten met slug, naam, omschrijving, afbeelding, kenmerken), `src/data/projecten.ts` (6 projecten met slug, titel, locatie, categorie, afbeeldingen, uitgelicht flag)
- **Layouts:** `src/layouts/Layout.astro` is the base HTML shell with Google Fonts, meta tags, GSAP + Lenis initialization, reveal animations, counter animation, marquee pause-on-hover
- **Components:** `src/components/` contains reusable `.astro` components
- **Assets:** `public/images/` for served images (logo.png, hero.jpg, hero.mp4, hero-telefoon.jpeg, over.jpeg, badkamer.jpeg, keuken.jpeg, uitbouw.jpeg, 1.jpg, 2.jpg, 3.jpg)
- **API:** `src/pages/api/offerte.ts` — Postmark email endpoint (prerender = false)

### Key components
- `Navbar.astro` — Sticky nav with Diensten dropdown (3-column, dynamisch uit data, hover on desktop, accordion on mobile), hamburger -> X on mobile, `.nav-link` hover underline animation (wit)
- `Footer.astro` — Large outlined "PROJECTBOUW 010" header text, 4-column layout (logo+socials, diensten, pagina's, contact+offerte CTA), bg `#111`
- `CookieConsent.astro` — Cookie banner with localStorage persistence, bg `#1c1c1c`

### Pages
- `index.astro` — Homepage secties:
  1. **Hero** — Full-viewport video background (hero.mp4 + hero.jpg poster), gradient overlay, Oswald headline, 2 CTA's (wit + outline), stats strip (15+, 500+, 9.3, 4jr)
  2. **Diensten** — `bg-[#f4f4f4]`, grid (2/3/4 kolommen) van alle 14 diensten uit data, foto achtergrond + gradient + naam
  3. **Over Ons** — Warme sectie (`bg-[#f7f5f0]`), 2 kolommen, donkere tekst, stats, link naar /over-ons
  4. **Werkwijze** — Desktop: `bg-[#111]` GSAP horizontale pin-scroll, mobiel: `bg-white` verticaal gestapeld
  5. **Projecten Preview** — `bg-white`, asymmetrisch grid (1 groot + 2 kleiner) van uitgelichte projecten
  6. **Reviews** — `bg-[#111]`, dubbele marquee, glassmorphism kaarten, witte sterren
  7. **CTA Banner** — `bg-[#1c1c1c]`, "Klaar om te verbouwen?" met witte offerte-knop
- `over-ons.astro` — Verhaal Mike Gouri, waarden (`bg-[#f4f4f4]`), stats
- `projecten/index.astro` — Portfolio grid met categorie-filter (filter: zwart actief)
- `projecten/[slug].astro` — Individueel project met galerij, details, sidebar CTA
- `diensten/[slug].astro` — Individuele dienstpagina met kenmerken, sidebar CTA, gerelateerde diensten
- `contact.astro` — Contactkaarten met border, Google Maps embed
- `offerte-aanvragen.astro` — Formulier met file uploads, alle 14 diensten in dropdown, Postmark integratie
- `api/offerte.ts` — Server endpoint voor Postmark email

### Animation system (GSAP + Lenis)
- **Lenis:** Smooth scroll, disabled on form focus
- **GSAP + ScrollTrigger:** Reveal animations for `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale` — uses `gsap.from()` with ScrollTrigger
- **Stagger delays:** Via CSS `--delay` custom property, picked up by GSAP
- **Counter animation:** Elements with `data-count` attribute animate via GSAP `onUpdate`
- **Werkwijze pin-scroll:** GSAP ScrollTrigger horizontal pin on desktop (>= 1024px)
- **Marquee:** `.marquee-track` (left) en `.marquee-track-reverse` (right), 40s linear infinite, pause on hover
- **Glassmorphism:** `.glass` utility — `rgba(255,255,255,0.05)` bg + `backdrop-filter: blur(12px)` + white/8 border (alleen op donkere secties)
- **Outlined text:** `.text-outline` (wit stroke op transparant) en `.text-outline-dark` (donkere stroke)
- **Reduced motion:** `prefers-reduced-motion` fallback disables all animations

### Important patterns
- **Hamburger -> X:** Absolutely positioned bars with translateY, rotate for X shape
- **Overflow prevention:** `overflow-x: clip` op html + body
- **Diensten dropdown:** max-height animatie voor smooth open/close
- **GSAP imports:** In client-side `<script>` tags, niet in Astro frontmatter
- **Lichte secties:** `bg-white` of `bg-[#f4f4f4]` met donkere tekst (`text-[#111]`, `text-[#333]`)
- **Donkere secties:** `bg-[#111]` met witte tekst en `bg-white text-[#111]` CTA knoppen
- **Sidebar CTA's:** `border border-[#e0e0e0]` op lichte pagina's (geen glass effect)

## Conventions

- Astro component structure: frontmatter (`---`) for logic, HTML template, then `<style>` for scoped CSS
- TypeScript strict mode via `astro/tsconfigs/strict`
- No UI framework integrations (React, Vue, etc.) — pure Astro components
- ES Modules (`"type": "module"` in package.json)
- Tailwind for styling (utility classes), global styles in Layout.astro `<style is:global>`
- Cloudflare Pages adapter (`@astrojs/cloudflare`), output: `static`
- Headings: Oswald, font-bold (600-700), uppercase
- Secties afwisselen: wit / `#f4f4f4` / `#f7f5f0` voor licht, `#111` / `#1c1c1c` voor donker
- CTA knoppen: context-afhankelijk zwart of wit (geen kleuraccenten)
- Data-driven content: diensten en projecten uit `src/data/` bestanden

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
- Horizontale overflow testen op mobiel — voorkom dat gebruikers kunnen uitzoomen/zijwaarts scrollen

### Bij problemen
- Als de dev server crashed: lees de error output, fix de oorzaak, herstart
- Als een build faalt: lees de foutmelding volledig, zoek de genoemde file en regelnummer op
- Als iets visueel niet klopt maar de code correct lijkt: controleer of er conflicterende CSS is van een parent component of layout
- Probeer niet blindelings dingen totdat het werkt — analyseer de fout eerst

## Configuration

- `astro.config.mjs` — Astro config with Tailwind, sitemap, icon integrations + Cloudflare adapter
- `tailwind.config.mjs` — Custom colors (dark #111, dark-card #1c1c1c, light-alt #f4f4f4, warm #f7f5f0, border #e0e0e0), fonts (Oswald, Source Sans 3), hero font-size, marquee animations
- `tsconfig.json` — Extends `astro/tsconfigs/strict`
- `.env` — `POSTMARK_API_KEY` (niet in repo, moet door gebruiker worden ingesteld)
