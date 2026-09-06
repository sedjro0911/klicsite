# Documentation du projet Klic Site

Journal des étapes accomplies. Servir de point d'entrée pour reprendre le projet sur n'importe quelle machine.

---

## Étape 0 — Alignement

- Lecture et validation : `.cursorrules`, `klic-site-prd.md`, `klic-site-branding.html`
- Positionnement, cible, offre, canal WhatsApp et contraintes design confirmés

## Étape 1 — Initialisation du projet

- Projet Next.js 16 (App Router) + TypeScript strict (`strict: true`) + Tailwind CSS v4
- Structure : `src/app/` (layout, page placeholder, globals.css)
- ESLint (`eslint-config-next` + `eslint-config-prettier`)
- Prettier (`.prettierrc`, plugin Tailwind)
- `.gitignore` complet avec `.env*` ignoré et `!.env.example` versionné
- `.env.example` listant les variables prévues (site, WhatsApp, contact, Turnstile) sans valeurs
- `README.md` minimal : installation et `npm run dev`
- Déploiement cible : Vercel — pas de CMS / base de données pour le MVP

## Étape 2 — Design system (tokens)

- Tokens de marque dans `src/app/globals.css` via `@theme` Tailwind v4 (pas de `tailwind.config.js` — v4 place le thème en CSS)
- Couleurs nommées : `ink`, `ink-soft`, `paper`, `paper-raised`, `mist`, `line`, `accent`, `accent-soft`, `accent-ink`
- Polices via `next/font` : Manrope (`--font-manrope` / `font-display`) + Inter (`--font-inter` / `font-sans`)
- Échelle typo : `text-caption`, `text-sm`, `text-body`, `text-lede`, `text-h3`, `text-h2`, `text-h1`, `text-display`
- Page de démo temporaire : `/style-guide` (noindex, hors navigation finale)
- Rayon de marque : `rounded-brand` (3px)
