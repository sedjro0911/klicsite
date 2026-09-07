import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "Méthode",
};

export default function MethodePage() {
  return (
    <PagePlaceholder
      title="Méthode"
      description="Comprendre, Structurer, Concevoir, Construire. Contenu à venir."
    />
  );
}
