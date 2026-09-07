import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <PagePlaceholder
      title="Mentions légales"
      description="Informations légales de l'éditeur. Contenu à venir."
    />
  );
}
