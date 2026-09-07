/**
 * Contenu temporaire pour tester la navigation (étape 3).
 * Remplacé par le contenu métier aux étapes suivantes.
 */
export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <main className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col justify-center px-5 py-20 sm:px-8">
      <p className="mb-3 font-display text-caption font-bold text-ink-soft">
        Page temporaire
      </p>
      <h1 className="font-display text-h1 font-extrabold tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-4 max-w-[52ch] font-sans text-lede text-ink-soft">
        {description ??
          "Contenu à venir. Cette page permet de valider la navigation et le layout global."}
      </p>
    </main>
  );
}
