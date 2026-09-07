import Link from "next/link";

type LogoProps = {
  /** Affiche le descriptif « Site » (usage secondaire / footer) */
  withDescriptor?: boolean;
  className?: string;
};

/**
 * Lockup KLiC — repère deux blocs + mot (charte § Logo).
 * Une seule couleur unie dans le lockup.
 */
export function Logo({ withDescriptor = false, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-accent-ink no-underline ${className}`}
      aria-label="Klic Site — Accueil"
    >
      <svg
        className="size-8 shrink-0"
        viewBox="0 0 32 32"
        aria-hidden="true"
        fill="currentColor"
      >
        <rect x="4" y="4" width="18" height="18" rx="4" />
        <rect x="22" y="22" width="8" height="8" rx="2" />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="font-display text-[1.375rem] font-extrabold tracking-tight">
          KLiC
        </span>
        {withDescriptor ? (
          <span className="mt-0.5 font-sans text-caption font-normal text-ink-soft">
            Site
          </span>
        ) : null}
      </span>
    </Link>
  );
}
