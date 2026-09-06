import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

/* Manrope — titres & display (charte § Typographie) */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

/* Inter — texte courant */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <html
      lang="fr"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
