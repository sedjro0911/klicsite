# Klic Site

Site vitrine orienté conversion pour Klic Site (Afrique francophone).

## Prérequis

- Node.js 20+
- npm

## Installation

```bash
npm install
cp .env.example .env.local
```

Renseigner les variables dans `.env.local` (aucune valeur secrète dans le dépôt).

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts utiles

| Commande        | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Serveur de développement   |
| `npm run build` | Build de production        |
| `npm run start` | Serveur de production      |
| `npm run lint`  | ESLint                     |
| `npm run format`| Prettier (écriture)        |

## Stack

Next.js (App Router) · TypeScript strict · Tailwind CSS · Vercel
