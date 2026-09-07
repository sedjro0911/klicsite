/**
 * Liens de navigation principale — libellés FR, routes PRD §6.
 */
export const MAIN_NAV = [
  { href: "/", label: "Accueil" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/offres", label: "Offres" },
  { href: "/methode", label: "Méthode" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

/** Liens légaux du pied de page */
export const LEGAL_NAV = [
  { href: "/mentions-legales", label: "Mentions légales" },
  {
    href: "/politique-de-confidentialite",
    label: "Politique de confidentialité",
  },
] as const;

export type NavItem = (typeof MAIN_NAV)[number];
