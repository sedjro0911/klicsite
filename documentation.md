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

## Étape 3 — Layout global, navigation, footer

- `Header` sticky : nav Accueil / Réalisations / Offres / Méthode / À propos / Contact ; menu mobile accessible (aria-expanded, focus, Échap)
- `WhatsAppFab` permanent (PRD §13) + CTA header ; fallback `/contact` si `NEXT_PUBLIC_WHATSAPP_NUMBER` absent
- `Footer` : nav, contact, liens légaux (`/mentions-legales`, `/politique-de-confidentialite`)
- Routes placeholder PRD §6 : `/`, `/realisations`, `/realisations/[slug]`, `/offres`, `/methode`, `/a-propos`, `/contact`, pages légales
- Lib : `src/lib/navigation.ts`, `src/lib/whatsapp.ts` ; logo `src/components/branding/Logo.tsx`

## Étape 4 — Accueil (maquette)

Accueil aligné sur la maquette fournie, tokens de marque + règles PRD (pas de chiffres inventés).

- **Hero** : texte + image dans le conteneur (`hero-showcase.jpg`), CTA WhatsApp/contact
- **Problème** : grille 3×2 de panneaux (6 freins)
- **Méthode** : grille 2×2 (4 piliers)
- **Avant / Après** : contraste brume / `accent-ink`
- **Réalisations** : 2 projets mis en avant (données `src/data/projects.ts`)
- **Doctrine IA** + **CTA final** : inchangés dans l'esprit, branchés en bas de page
- Header CTA : « Démarrer un projet »
- Animations : `Reveal` au scroll (`src/components/ui/Reveal.tsx`) + hero-reveal ; désactivées si `prefers-reduced-motion`
