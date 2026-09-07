import Link from "next/link";
import { Logo } from "@/components/branding/Logo";
import { LEGAL_NAV, MAIN_NAV } from "@/lib/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Pied de page : navigation, contact, liens légaux.
 */
export function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-paper-raised">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        {/* Marque */}
        <div>
          <Logo withDescriptor />
          <p className="mt-4 max-w-[32ch] font-sans text-sm text-ink-soft">
            Studio web orienté conversion pour les entreprises d&apos;Afrique
            francophone.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="mb-3 font-display text-sm font-bold text-ink">
            Navigation
          </h2>
          <ul className="flex flex-col gap-2">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-sm text-ink-soft hover:text-accent-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + légal */}
        <div>
          <h2 className="mb-3 font-display text-sm font-bold text-ink">
            Contact
          </h2>
          <ul className="mb-6 flex flex-col gap-2 font-sans text-sm text-ink-soft">
            <li>
              <Link href="/contact" className="hover:text-accent-ink">
                Formulaire de contact
              </Link>
            </li>
            <li>
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-ink"
                >
                  WhatsApp
                </a>
              ) : (
                <span title="Configurer NEXT_PUBLIC_WHATSAPP_NUMBER">
                  WhatsApp (à configurer)
                </span>
              )}
            </li>
            <li>Afrique francophone · Lancement Bénin</li>
          </ul>

          <h2 className="mb-3 font-display text-sm font-bold text-ink">
            Légal
          </h2>
          <ul className="flex flex-col gap-2">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-sm text-ink-soft hover:text-accent-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-[1120px] px-5 py-5 font-sans text-caption text-ink-soft sm:px-8">
          © {year} Klic Site. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
