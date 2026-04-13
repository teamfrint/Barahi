---
name: Restaurant Single Page Landing Page
description: A complete, config-driven, multi-lingual restaurant landing page template using React + Vite + i18next + CSS.
---
# Restaurant Single Page Landing Page Skill

## Overview
This skill allows you to quickly spin up a premium, localization-ready, and highly config-driven restaurant landing page. 
It uses the "Barahi" project template as its foundation.

## Features
1. **Config-Driven Architecture**: All text, menu categories, menu items, prices, and gallery images are managed via `src/config/siteConfigs.ts` and locales (`src/locales/en.json`, `src/locales/fi.json`).
2. **Multi-Language (i18n)**: Out-of-the-box support for multiple languages using `react-i18next`.
3. **Responsive Menu & Gallery**: CSS Flexbox and Grid based components that respond perfectly from mobile to large desktop screens.
4. **EmailJS Contact Form**: Readily configured Honeypot-enabled contact form using `@emailjs/browser`.

## Examples & Template
The complete starter template is stored in `examples/barahi-template/`.
When you need to initialize a completely new restaurant page:
1. Recursively copy all files inside `.agent/skills/restaurant-landing-page/examples/barahi-template/` into the new empty target directory.
2. Run `npm install` and initialize local environment variables.
3. Update `src/config/siteConfigs.ts` to quickly override all information without touching React layout/components.
4. Fine-tune CSS inside `src/styles/*.css` if alternative brand color tokens are required.
