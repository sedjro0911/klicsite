import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type ProblemIconId =
  | "message"
  | "value"
  | "cta"
  | "mobile"
  | "proof"
  | "speed";

/** 6 freins — grille 3×2, icône métier par point (PRD §7) */
const PROBLEMS: {
  title: string;
  description: string;
  icon: ProblemIconId;
}[] = [
  {
    icon: "message",
    title: "Message difficile à comprendre",
    description:
      "Le visiteur ne saisit pas rapidement ce que vous vendez ni pour qui.",
  },
  {
    icon: "value",
    title: "Proposition de valeur floue",
    description:
      "L'offre se noie dans le jargon. La différenciation n'apparaît pas.",
  },
  {
    icon: "cta",
    title: "CTA peu visibles",
    description:
      "Pas d'action évidente. Le prospect ne sait pas quoi faire ensuite.",
  },
  {
    icon: "mobile",
    title: "Expérience mobile fragile",
    description:
      "Lecture pénible, boutons trop petits, parcours cassé sur téléphone.",
  },
  {
    icon: "proof",
    title: "Manque de preuves",
    description:
      "Peu d'éléments de confiance : cas clients, méthode, réassurance.",
  },
  {
    icon: "speed",
    title: "Site lent",
    description: "Chargement long : l'attention part avant même le message.",
  },
];

/**
 * Section Problème — grille de panneaux, icônes adaptées à chaque frein.
 */
export function ProblemSection() {
  return (
    <section
      aria-labelledby="probleme-heading"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="mb-3 font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
            Le problème
          </p>
          <h2
            id="probleme-heading"
            className="max-w-[22ch] font-display text-h2 font-extrabold tracking-tight text-accent-ink"
          >
            Votre site existe. Mais travaille-t-il vraiment pour votre
            entreprise&nbsp;?
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((item, index) => (
            <Reveal key={item.title} as="li" delay={index * 60}>
              <div className="h-full rounded-brand border border-line bg-paper-raised p-5 sm:p-6">
                <span
                  className="mb-4 flex size-9 items-center justify-center rounded-full border border-line text-accent-ink"
                  aria-hidden="true"
                >
                  <ProblemIcon id={item.icon} />
                </span>
                <h3 className="font-display text-h3 font-bold text-accent-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10" delay={200}>
          <Link
            href="/methode"
            className="inline-flex items-center gap-2 font-display text-sm font-bold text-accent-ink underline-offset-4 hover:underline"
          >
            Voir ce qui peut bloquer vos conversions
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/** Icônes line-art — une par frein */
function ProblemIcon({ id }: { id: ProblemIconId }): ReactNode {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "message":
      // Bulle de dialogue brouillée — message peu clair
      return (
        <svg {...props}>
          <path d="M3 3.5h10v7H8.2L5.5 13V10.5H3v-7z" />
          <path d="M5.5 6.2h5M5.5 8.5h3.5" opacity="0.55" />
        </svg>
      );
    case "value":
      // Cible floue — proposition de valeur
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="5.5" />
          <circle cx="8" cy="8" r="2.8" />
          <circle cx="8" cy="8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "cta":
      // Bouton / curseur — CTA peu visible
      return (
        <svg {...props}>
          <rect x="2.5" y="5" width="11" height="6" rx="1.2" />
          <path d="M5.5 8h5" />
          <path d="M11.5 11.5l2 2" />
        </svg>
      );
    case "mobile":
      // Smartphone fissuré — expérience mobile
      return (
        <svg {...props}>
          <rect x="4.5" y="1.5" width="7" height="13" rx="1.2" />
          <path d="M7 12.5h2" />
          <path d="M7.2 4.5l1.6 2.2-1.5 1.8 1.7 2.3" opacity="0.7" />
        </svg>
      );
    case "proof":
      // Bouclier — manque de preuves / confiance
      return (
        <svg {...props}>
          <path d="M8 2l5 2v4.2c0 2.6-1.8 4.5-5 5.8-3.2-1.3-5-3.2-5-5.8V4l5-2z" />
          <path d="M8 6.2v3" opacity="0.7" />
          <path d="M8 11h.01" opacity="0.7" />
        </svg>
      );
    case "speed":
      // Sablier / jauge lente — site lent
      return (
        <svg {...props}>
          <path d="M5 2.5h6M5 13.5h6" />
          <path d="M5.5 2.5c0 2.2 1.1 3.3 2.5 4.2C9.4 7.6 10.5 8.7 10.5 11v2.5" />
          <path d="M10.5 2.5c0 2.2-1.1 3.3-2.5 4.2C6.6 7.6 5.5 8.7 5.5 11v2.5" />
          <path d="M6.8 11.2h2.4" />
        </svg>
      );
  }
}
