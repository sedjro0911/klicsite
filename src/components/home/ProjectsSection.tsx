import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

/** Accueil : 2 projets mis en avant (maquette), le reste sur /realisations */
const FEATURED = projects.slice(0, 2);

/**
 * Section Réalisations — cartes image + texte (maquette).
 */
export function ProjectsSection() {
  return (
    <section
      aria-labelledby="realisations-heading"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
                Nos Réalisations
              </p>
              <h2
                id="realisations-heading"
                className="max-w-[18ch] font-display text-h2 font-extrabold tracking-tight text-accent-ink"
              >
                Des interfaces pour des entreprises ambitieuses.
              </h2>
            </div>
            <Link
              href="/realisations"
              className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold text-accent-ink underline-offset-4 hover:underline"
            >
              Toutes les réalisations
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {FEATURED.map((project, index) => (
            <Reveal key={project.slug} as="li" delay={index * 100}>
              <Link
                href={`/realisations/${project.slug}`}
                className="group block overflow-hidden rounded-brand border border-line bg-paper-raised transition-colors hover:border-accent"
              >
                <div
                  className="flex aspect-[16/10] items-end bg-accent-ink p-5"
                  aria-hidden="true"
                >
                  <span className="font-display text-sm font-bold text-paper-raised/80">
                    {project.company}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-sans text-caption text-ink-soft">
                    {project.sector}
                  </p>
                  <h3 className="mt-1 font-display text-h3 font-bold text-accent-ink group-hover:underline group-hover:underline-offset-4">
                    {project.company}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                    {project.solution}
                  </p>
                  <p className="mt-3 font-display text-sm font-semibold text-accent-ink">
                    {project.impact}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
