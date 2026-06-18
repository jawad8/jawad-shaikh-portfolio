import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/detail-shell";
import { getProject, projects } from "@/data/portfolio";
import { breadcrumbSchema, personSchema } from "@/data/schema";
import { projectSeo } from "@/data/seo-pages";
import { getSiteUrl } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const seo = projectSeo[slug];
  if (!project || !seo) return {};

  const path = `/projects/${project.slug}`;

  return {
    title: { absolute: seo.metaTitle },
    description: seo.metaDescription,
    keywords: [
      "Jawad Shaikh",
      project.title,
      project.subtitle,
      ...project.tags,
      project.category,
      "Software Development",
      "Abu Dhabi",
      "UAE",
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: seo.metaTitle,
      description: seo.metaDescription,
      siteName: "Jawad Shaikh Portfolio",
      locale: "en_AE",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectPageRoute({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const seo = projectSeo[slug];
  if (!project || !seo) notFound();

  const siteUrl = getSiteUrl();
  const path = `/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      {
        "@type": "CreativeWork",
        "@id": `${siteUrl}${path}#project`,
        url: `${siteUrl}${path}`,
        name: project.title,
        headline: seo.headline,
        description: seo.metaDescription,
        creator: { "@id": `${siteUrl}/#jawad-shaikh` },
        keywords: project.tags.join(", "),
        about: [project.category, project.subtitle],
        inLanguage: "en-AE",
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/#projects" },
        { name: project.title, path },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailPage project={project} seo={seo} />
    </>
  );
}
