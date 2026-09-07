import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

/** Quatre piliers — PRD §7, libellés enrichis type maquette */
const PILLARS = [
  {
    number: "01",
    label: "Stratégie",
    title: "Stratégie commerciale",
    description:
      "Comprendre l'entreprise, ses clients et l'objectif business avant de dessiner une page.",
  },
  {
    number: "02",
    label: "Conversion",
    title: "Architecture de conversion",
    description:
      "Construire le parcours autour de l'action qui compte : contact, WhatsApp, devis.",
  },
  {
    number: "03",
    label: "Design",
    title: "Design & crédibilité",
    description:
      "Une expérience visuelle professionnelle qui inspire confiance, sans bruit inutile.",
  },
  {
    number: "04",
    label: "Technologie",
    title: "Vitesse & robustesse",
    description:
      "Un site rapide, responsive, accessible et maintenable — pensé mobile-first.",
  },
] as const;

/**
 * Section Méthode — grille 2×2 (maquette).
 */
export function MethodSection() {
  return (
    <section
      aria-labelledby="methode-heading"
      className="border-b border-line bg-paper-raised"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="mb-3 font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
            La Méthode Klic
          </p>
          <h2
            id="methode-heading"
            className="max-w-[20ch] font-display text-h2 font-extrabold tracking-tight text-accent-ink"
          >
            Quatre piliers pour un site qui travaille.
          </h2>
          <p className="mt-4 max-w-[46ch] font-sans text-lede text-ink-soft">
            Chaque décision sert la clarté, la confiance ou la conversion.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.number} as="li" delay={index * 80}>
              <div className="flex h-full flex-col rounded-brand border border-line bg-paper p-6 sm:min-h-[220px] sm:p-8">
                <span className="font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
                  {pillar.number} / {pillar.label}
                </span>
                <h3 className="mt-4 font-display text-h3 font-bold text-accent-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-body text-ink-soft">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10" delay={200}>
          <Link
            href="/methode"
            className="inline-flex items-center gap-2 font-display text-sm font-bold text-accent-ink underline-offset-4 hover:underline"
          >
            Découvrir la méthode
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
