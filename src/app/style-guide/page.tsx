import type { Metadata } from "next";

/**
 * Style guide temporaire — validation visuelle des tokens de marque.
 * Non liée à la navigation finale ; noindex pour éviter l'indexation SEO.
 */
export const metadata: Metadata = {
  title: "Style guide — Klic Site",
  robots: { index: false, follow: false },
};

/** Nuancier : nom du token Tailwind + hex de référence */
const COLORS = [
  { name: "Encre", token: "ink", hex: "#16140F", className: "bg-ink" },
  {
    name: "Encre soft",
    token: "ink-soft",
    hex: "#4A473E",
    className: "bg-ink-soft",
  },
  { name: "Papier", token: "paper", hex: "#F1EEE6", className: "bg-paper" },
  {
    name: "Papier raised",
    token: "paper-raised",
    hex: "#FBFAF6",
    className: "bg-paper-raised",
  },
  { name: "Brume", token: "mist", hex: "#DCD6C7", className: "bg-mist" },
  { name: "Ligne", token: "line", hex: "#CFC8B4", className: "bg-line" },
  {
    name: "Indigo (accent)",
    token: "accent",
    hex: "#223A5E",
    className: "bg-accent",
  },
  {
    name: "Accent soft",
    token: "accent-soft",
    hex: "#DEE5EE",
    className: "bg-accent-soft",
  },
  {
    name: "Accent ink",
    token: "accent-ink",
    hex: "#14283F",
    className: "bg-accent-ink",
  },
] as const;

export default function StyleGuidePage() {
  return (
    <main className="mx-auto max-w-[1080px] bg-paper px-6 py-16 sm:px-10">
      {/* En-tête de la démo */}
      <header className="mb-16 border-b border-line pb-10">
        <p className="mb-3 font-display text-caption font-bold text-ink-soft">
          Design system · temporaire
        </p>
        <h1 className="font-display text-display font-extrabold tracking-tight text-ink">
          Style guide
        </h1>
        <p className="mt-4 max-w-[56ch] font-sans text-lede text-ink-soft">
          Tokens issus de la charte : couleurs, Manrope / Inter, échelle
          typographique. Valider ici avant de construire les pages métier.
        </p>
      </header>

      {/* --- Couleurs --- */}
      <section className="mb-20" aria-labelledby="couleurs-title">
        <h2
          id="couleurs-title"
          className="mb-2 font-display text-h2 font-extrabold tracking-tight"
        >
          Couleurs
        </h2>
        <p className="mb-8 max-w-[62ch] text-body text-ink-soft">
          Une base neutre, un seul accent. Utiliser les classes{" "}
          <code className="text-sm text-accent-ink">bg-*</code> /{" "}
          <code className="text-sm text-accent-ink">text-*</code> nommées — pas
          la palette Tailwind par défaut.
        </p>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLORS.map((color) => (
            <li
              key={color.token}
              className="overflow-hidden rounded-brand border border-line"
            >
              <div
                className={`h-24 ${color.className}`}
                aria-hidden="true"
              />
              <div className="bg-paper-raised px-4 py-3">
                <p className="font-display text-sm font-bold text-ink">
                  {color.name}
                </p>
                <p className="font-sans text-caption text-ink-soft">
                  {color.token} · {color.hex}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* --- Typographie --- */}
      <section className="mb-20" aria-labelledby="typo-title">
        <h2
          id="typo-title"
          className="mb-2 font-display text-h2 font-extrabold tracking-tight"
        >
          Typographie
        </h2>
        <p className="mb-8 max-w-[62ch] text-body text-ink-soft">
          Manrope pour les titres (display), Inter pour le corps. Hiérarchie
          claire, interlignage généreux.
        </p>

        <div className="divide-y divide-line border-t border-line">
          <TypeRow
            label="Display · Manrope 800"
            sampleClassName="font-display text-display font-extrabold tracking-tight"
          >
            Votre site devrait vous apporter des clients
          </TypeRow>
          <TypeRow
            label="H1 · Manrope 800"
            sampleClassName="font-display text-h1 font-extrabold tracking-tight"
          >
            Des sites qui transforment l&apos;attention en action
          </TypeRow>
          <TypeRow
            label="H2 · Manrope 800"
            sampleClassName="font-display text-h2 font-extrabold tracking-tight"
          >
            Éditorial. Premium. Confiant.
          </TypeRow>
          <TypeRow
            label="H3 · Manrope 700"
            sampleClassName="font-display text-h3 font-bold"
          >
            Une base neutre, un seul accent
          </TypeRow>
          <TypeRow
            label="Lede · Inter 400"
            sampleClassName="font-sans text-lede text-ink-soft"
          >
            Klic Site conçoit des sites vitrines rapides, crédibles et pensés
            autour d&apos;un objectif simple : transformer vos visiteurs en
            prospects.
          </TypeRow>
          <TypeRow
            label="Body · Inter 400"
            sampleClassName="font-sans text-body"
          >
            Chaque décision de design sert la clarté, la confiance ou la
            conversion. Le client n&apos;a pas besoin de comprendre la
            technologie pour comprendre la valeur.
          </TypeRow>
          <TypeRow
            label="Caption · Inter 400"
            sampleClassName="font-sans text-caption text-ink-soft"
          >
            Charte de marque v1.0 · Septembre 2026
          </TypeRow>
        </div>
      </section>

      {/* --- Accent / CTA --- */}
      <section aria-labelledby="accent-title">
        <h2
          id="accent-title"
          className="mb-2 font-display text-h2 font-extrabold tracking-tight"
        >
          Accent &amp; CTA
        </h2>
        <p className="mb-8 max-w-[62ch] text-body text-ink-soft">
          L&apos;indigo sert les actions et liens — un seul accent dominant à
          la fois.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-brand bg-accent px-5 py-3 font-display text-sm font-bold text-paper-raised transition-opacity hover:opacity-90"
          >
            Parler de mon projet
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-brand border border-line bg-paper-raised px-5 py-3 font-display text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent-ink"
          >
            Voir nos réalisations
          </a>
          <a
            href="#"
            className="font-sans text-body font-medium text-accent-ink underline-offset-4 hover:underline"
          >
            Lien texte
          </a>
        </div>
      </section>
    </main>
  );
}

/** Ligne d'échantillon typographique (label + rendu) */
function TypeRow({
  label,
  sampleClassName,
  children,
}: {
  label: string;
  sampleClassName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-6">
      <p className="mb-3 font-sans text-caption text-ink-soft">{label}</p>
      <p className={sampleClassName}>{children}</p>
    </div>
  );
}
