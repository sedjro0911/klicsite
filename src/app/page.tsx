/**
 * Page d'accueil temporaire — structure du projet uniquement.
 * Le contenu métier sera ajouté aux étapes suivantes.
 */
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-paper p-8">
      <p className="font-sans text-body text-ink-soft">
        Klic Site — structure du projet en place.{" "}
        <a
          href="/style-guide"
          className="font-medium text-accent-ink underline-offset-4 hover:underline"
        >
          Voir le style guide
        </a>
      </p>
    </main>
  );
}
