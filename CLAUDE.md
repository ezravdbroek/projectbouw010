# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro 5 static site (SSG) using the official Basics starter template. Single production dependency: `astro`.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- No test or lint commands configured yet

## Architecture

- **File-based routing:** Pages in `src/pages/` map directly to routes (e.g., `index.astro` → `/`)
- **Layouts:** `src/layouts/Layout.astro` is the base HTML shell using `<slot />` for content injection
- **Components:** `src/components/` contains reusable `.astro` components with scoped CSS
- **Assets:** `src/assets/` for optimized/imported assets; `public/` for static files served as-is

## Conventions

- Astro component structure: frontmatter (`---`) for logic, HTML template, then `<style>` for scoped CSS
- TypeScript strict mode via `astro/tsconfigs/strict`
- No UI framework integrations (React, Vue, etc.) — pure Astro components
- ES Modules (`"type": "module"` in package.json)

## Visual Debugging with Screenshots

Playwright is installed as a dev dependency for taking screenshots of the website. Screenshots are saved to `screenshots/` (gitignored, separate from project assets).

### How to take screenshots

1. Start the dev server: `npm run dev`
2. Run the screenshot script: `node scripts/screenshot.mjs http://localhost:4321 index`
   - First arg: base URL (default `http://localhost:4321`)
   - Second arg: comma-separated page routes using names, not `/` (e.g., `index`, `about`, `index,about,contact`)
   - On Windows/Git Bash, avoid passing bare `/` as an argument (it gets mangled); use `index` instead
3. Screenshots are saved as `{page}-{viewport}.png` in `screenshots/` for three viewports: desktop (1920x1080), tablet (768x1024), mobile (375x812)

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

- `astro.config.mjs` — Astro config (currently minimal/default)
- `tsconfig.json` — Extends `astro/tsconfigs/strict`
