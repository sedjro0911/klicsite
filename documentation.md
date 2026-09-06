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
