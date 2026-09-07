import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "Réalisations",
};

export default function RealisationsPage() {
  return (
    <PagePlaceholder
      title="Réalisations"
      description="Liste des projets et études de cas. Contenu à venir."
    />
  );
}
