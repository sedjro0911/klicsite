import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Hero — Accueil, disposition maquette (texte + image dans le conteneur).
 */
export function Hero() {
  const whatsappUrl = getWhatsAppUrl();
  const primaryHref = whatsappUrl ?? "/contact";
  const primaryExternal = Boolean(whatsappUrl);

  const primaryClassName =
    "inline-flex items-center justify-center gap-2 rounded-brand bg-accent-ink px-5 py-3.5 font-display text-sm font-bold text-paper-raised transition-opacity hover:opacity-90";

  return (
    <section aria-labelledby="hero-heading" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
        <p className="hero-reveal font-display text-caption font-bold uppercase tracking-[0.08em] text-ink-soft">
          Studio web orienté conversion
        </p>

        <h1
          id="hero-heading"
          className="hero-reveal hero-reveal-delay-1 mt-5 max-w-[15ch] font-display text-[clamp(2.5rem,6.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-accent-ink"
        >
          Votre site devrait vous apporter des clients.
        </h1>

        <p className="hero-reveal hero-reveal-delay-2 mt-5 max-w-[36rem] font-sans text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lede">
          Klic Site conçoit des sites vitrines rapides, crédibles et pensés
          autour d&apos;un objectif simple&nbsp;: transformer vos visiteurs en
          prospects.
        </p>

        <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
          {primaryExternal ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryClassName}
            >
              Parler de mon projet
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link href={primaryHref} className={primaryClassName}>
              Parler de mon projet
              <span aria-hidden="true">→</span>
            </Link>
          )}
          <Link
            href="/realisations"
            className="inline-flex items-center justify-center rounded-brand border border-line bg-paper-raised px-5 py-3.5 font-display text-sm font-bold text-accent-ink transition-colors hover:border-accent"
          >
            Voir nos réalisations
          </Link>
        </div>

        <p className="hero-reveal hero-reveal-delay-3 mt-5 flex items-center gap-2 font-sans text-sm text-ink-soft">
          <CheckIcon />
          <span>Réponse sous 24&nbsp;h · WhatsApp ou visio</span>
        </p>

        {/* Image dans le flux (maquette) — pas full-bleed */}
        <figure className="hero-reveal hero-reveal-delay-4 mt-12 overflow-hidden rounded-brand border border-line bg-mist">
          <Image
            src="/images/hero-showcase.jpg"
            alt="Exemple de site vitrine professionnel sur ordinateur et portable"
            width={1024}
            height={571}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1120px) 100vw, 1120px"
          />
        </figure>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-accent"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M5 8.2L7 10.2L11 5.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
