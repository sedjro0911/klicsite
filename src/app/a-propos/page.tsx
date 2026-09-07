import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "À propos",
};

export default function AProposPage() {
  return (
    <PagePlaceholder
      title="À propos"
      description="Qui est Klic Site, pour qui, et pourquoi. Contenu à venir."
    />
  );
}
