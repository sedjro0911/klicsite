import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <PagePlaceholder
      title="Politique de confidentialité"
      description="Traitement des données personnelles (formulaire de contact). Contenu à venir."
    />
  );
}
