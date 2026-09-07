import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/content/PagePlaceholder";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Étude de cas · ${slug}` };
}

/** Étude de cas dynamique — placeholder pour tester /realisations/[slug] */
export default async function RealisationSlugPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Étude de cas"
      description={`Slug : « ${slug} ». Le détail du projet sera ajouté plus tard.`}
    />
  );
}
