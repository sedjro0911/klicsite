/**
 * Construit l'URL wa.me avec message prérempli (PRD §13).
 * Le numéro vient de NEXT_PUBLIC_WHATSAPP_NUMBER (sans +).
 */
const DEFAULT_MESSAGE =
  "Bonjour Klic Site, je souhaite discuter de la création ou de la refonte de mon site.";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!number) return null;

  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

/** Indique si le canal WhatsApp est configuré */
export function isWhatsAppConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, ""));
}
