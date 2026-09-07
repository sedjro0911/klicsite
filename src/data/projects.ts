/**
 * ---------------------------------------------------------------------------
 * DONNÉES TEMPORAIRES — projets fictifs pour le MVP / maquette.
 * À remplacer par de vraies réalisations (contenu client validé).
 * Ne jamais inventer de résultats chiffrés (PRD §7 / charte).
 * ---------------------------------------------------------------------------
 */

export type Project = {
  /** URL : /realisations/[slug] */
  slug: string;
  company: string;
  sector: string;
  problem: string;
  solution: string;
  /** Impact honnête — pas de métriques inventées */
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "horizon-immobilier",
    company: "Horizon Immobilier",
    sector: "Immobilier",
    problem:
      "Site daté, offre peu claire, visiteurs qui quittaient sans contacter.",
    solution:
      "Refonte complète du site avec proposition de valeur et parcours WhatsApp.",
    impact: "Parcours de contact simplifié",
  },
  {
    slug: "cabinet-nokoue",
    company: "Cabinet Nokoué",
    sector: "Conseil & services",
    problem:
      "Message générique, manque de preuves, demande de devis difficile à trouver.",
    solution:
      "Repositionnement de la proposition de valeur et architecture de confiance.",
    impact: "Nouvelle architecture de conversion",
  },
  {
    slug: "logitrans-afrique",
    company: "LogiTrans Afrique",
    sector: "Logistique",
    problem:
      "Présentation confuse des services, expérience mobile fragile.",
    solution:
      "Site vitrine recentré sur les offres clés et les appels à l'action.",
    impact: "Refonte complète du site",
  },
  {
    slug: "atelier-sena",
    company: "Atelier Sèna",
    sector: "Artisanat & design",
    problem:
      "Belle vitrine visuelle, mais peu d'orientation vers la prise de contact.",
    solution:
      "Parcours clarifié, CTA visibles, contenu orienté demande de projet.",
    impact: "Parcours de contact simplifié",
  },
];
