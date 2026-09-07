import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "Offres",
};

export default function OffresPage() {
  return (
    <PagePlaceholder
      title="Offres"
      description="Essentiel, Conversion et Sur mesure. Contenu à venir."
    />
  );
}
