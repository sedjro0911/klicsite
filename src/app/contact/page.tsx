import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact"
      description="Formulaire de qualification et CTA WhatsApp. Contenu à venir."
    />
  );
}
