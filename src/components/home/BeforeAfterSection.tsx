import { Reveal } from "@/components/ui/Reveal";

/** Points « Avant » — formulations enrichies (maquette), alignées PRD §7 */
const BEFORE = [
  "Message verbeux, abstrait et rempli de clichés corporatifs.",
  "Hiérarchie confuse : le visiteur ne sait pas où regarder ni où cliquer.",
  "Formulaire de contact lourd ou lien déconnecté de la réalité mobile.",
  "Navigation à tiroirs inutilement complexe et dense.",
  "Absence de preuves et de cas clients clairement présentés.",
] as const;

/** Points « Après » — transformation attendue, sans promesse chiffrée inventée */
const AFTER = [
  "Proposition de valeur claire, comprise dès les premières secondes.",
  "Hiérarchie typographique forte qui guide naturellement la lecture.",
  "Accès WhatsApp direct et formulaires légers, pensés pour convertir.",
  "Parcours fluide, sans détour superflu, focalisé sur l'action.",
  "Études de cas et preuves d'expertise présentées avec rigueur.",
] as const;

/**
 * Section Avant / Après — Accueil (PRD §7).
 * Contraste fort type maquette : colonne claire vs panneau accent-ink.
 */
export function BeforeAfterSection() {
  return (
    <section
      aria-labelledby="avant-apres-heading"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="mb-4 font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
            La transformation
          </p>
          <h2
            id="avant-apres-heading"
            className="max-w-[20ch] font-display text-h2 font-extrabold tracking-tight text-accent-ink"
          >
            Ce qui change quand votre site est conçu pour convertir.
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-lede text-ink-soft">
            Une comparaison claire entre une vitrine passive et une interface
            conçue pour travailler.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:items-stretch md:gap-5">
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-brand border border-line bg-mist/50 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
                  Avant Klic Site
                </h3>
                <span className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-sans text-[0.6875rem] font-medium text-ink-soft">
                  Vitrine passive
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-5">
                {BEFORE.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-sans text-[0.9375rem] leading-snug text-ink-soft"
                  >
                    <CrossIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line pt-5 font-sans text-sm text-ink-soft">
                <span className="font-medium text-ink">Résultat&nbsp;:</span> un
                site qui rassure peu et génère peu de demandes utiles.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex h-full flex-col rounded-brand bg-accent-ink p-6 text-paper-raised sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-caption font-bold uppercase tracking-[0.08em] text-paper-raised!">
                  Après Klic Site
                </h3>
                <span className="rounded-full border border-paper-raised/25 bg-paper-raised/10 px-2.5 py-1 font-sans text-[0.6875rem] font-medium text-paper-raised">
                  Outil commercial
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-5">
                {AFTER.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-sans text-[0.9375rem] leading-snug text-paper-raised/95"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-paper-raised/20 pt-5 font-sans text-sm text-paper-raised/75">
                <span className="font-medium text-paper-raised">
                  Résultat&nbsp;:
                </span>{" "}
                un actif crédible, pensé pour générer des prises de contact
                sérieuses.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CrossIcon() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C45C4A]/15 text-[#C45C4A]"
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2.5 2.5l5 5M7.5 2.5l-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-paper-raised/15 text-paper-raised"
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2L4.1 7.2L8 2.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
