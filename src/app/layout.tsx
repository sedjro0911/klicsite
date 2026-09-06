import type { Metadata } from "next";
import "./globals.css";

// Métadonnées minimales — le SEO complet arrivera avec les pages de contenu
export const metadata: Metadata = {
  title: "Klic Site",
  description:
    "Studio web orienté conversion pour les entreprises d'Afrique francophone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
