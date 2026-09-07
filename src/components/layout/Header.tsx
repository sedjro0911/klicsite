"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/branding/Logo";
import { MAIN_NAV } from "@/lib/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * En-tête sticky : nav desktop + menu mobile accessible
 * (focus, aria-expanded, fermeture Échap).
 */
export function Header() {
  const pathname = usePathname();
  // Ouvert seulement si le pathname correspond — se ferme seul au changement de route
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = getWhatsAppUrl();

  const close = useCallback(() => {
    setMenuPath(null);
    // Retour du focus sur le bouton menu après fermeture
    toggleRef.current?.focus();
  }, []);

  const toggle = useCallback(() => {
    setMenuPath((current) => (current === pathname ? null : pathname));
  }, [pathname]);

  // Fermeture Échap + focus dans le panneau à l'ouverture
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Premier lien du panneau pour la navigation clavier
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        {/* Navigation desktop */}
        <nav aria-label="Principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA WhatsApp desktop (complément du FAB) */}
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-brand bg-accent-ink px-3.5 py-2 font-display text-sm font-bold text-paper-raised transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Démarrer un projet
            </a>
          ) : (
            <Link
              href="/contact"
              className="hidden items-center rounded-brand bg-accent-ink px-3.5 py-2 font-display text-sm font-bold text-paper-raised transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Démarrer un projet
            </Link>
          )}

          {/* Bouton menu mobile */}
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-brand border border-line bg-paper-raised text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={toggle}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Menu mobile" className="mx-auto max-w-[1120px] px-5 py-4 sm:px-8">
          <ul className="flex flex-col gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  pathname={pathname}
                  mobile
                  onNavigate={close}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  label,
  pathname,
  mobile = false,
  onNavigate,
}: {
  href: string;
  label: string;
  pathname: string;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const active =
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={[
        "font-display font-semibold transition-colors",
        mobile
          ? "block rounded-brand px-3 py-3 text-body"
          : "rounded-brand px-3 py-2 text-sm",
        active
          ? "bg-accent-soft text-accent-ink"
          : "text-ink-soft hover:bg-paper-raised hover:text-ink",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

/** Icône hamburger / croix (état ouvert) */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="stroke-current"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M5 5l10 10" />
          <path d="M15 5L5 15" />
        </>
      ) : (
        <>
          <path d="M3 5h14" />
          <path d="M3 10h14" />
          <path d="M3 15h14" />
        </>
      )}
    </svg>
  );
}
