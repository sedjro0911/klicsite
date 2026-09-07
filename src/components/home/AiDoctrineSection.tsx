import { Reveal } from "@/components/ui/Reveal";

/** Points bas de la doctrine — alignés charte IA (PRD §10) */
const DOCTRINE_POINTS = [
  "Audit & recherche assistés",
  "Conception stratégique humaine",
  "Code pensé pour la vitesse",
] as const;

/**
 * Section doctrine technique / IA — Accueil.
 */
export function AiDoctrineSection() {
  return (
    <section
      aria-labelledby="doctrine-heading"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="rounded-brand border border-line bg-paper-raised px-6 py-10 sm:px-10 sm:py-14">
            <p className="font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
              Notre doctrine technique
            </p>

            <h2
              id="doctrine-heading"
              className="mt-5 max-w-[22ch] font-display text-h2 font-extrabold tracking-tight text-accent-ink"
            >
              L&apos;IA accélère notre travail. La stratégie le dirige.
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-10">
              <p className="font-sans text-body text-ink-soft">
                Chez Klic Site, nous utilisons l&apos;intelligence artificielle
                pour accélérer la recherche, explorer des hypothèses, prototyper
                et contrôler la qualité. C&apos;est un levier opérationnel, pas
                le cœur de la promesse commerciale.
              </p>
              <p className="font-sans text-body text-ink-soft">
                L&apos;analyse de votre marché, le jugement sur la conversion et
                le soin du détail restent humains. Vous bénéficiez de la vitesse
                de l&apos;outil, dirigée par une stratégie claire.
              </p>
            </div>

            <ul className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
              {DOCTRINE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 font-sans text-sm font-medium text-accent-ink"
                >
                  <CheckCircle />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckCircle() {
  return (
    <span
      className="flex size-5 shrink-0 items-center justify-center rounded-full border border-accent text-accent"
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2L4.1 7.2L8 2.8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
