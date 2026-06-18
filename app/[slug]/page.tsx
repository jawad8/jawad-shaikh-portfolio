import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoleDetailPage } from "@/components/detail-shell";
import { breadcrumbSchema, personSchema } from "@/data/schema";
import { getRolePage, rolePages } from "@/data/seo-pages";
import { getSiteUrl } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rolePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getRolePage(slug);
  if (!page) return {};

  const path = `/${page.slug}`;

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: [
      "Jawad Shaikh",
      ...page.skills,
      page.title,
      "Abu Dhabi",
      "UAE",
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "profile",
      url: path,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: "Jawad Shaikh Portfolio",
      locale: "en_AE",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RolePageRoute({ params }: Props) {
  const { slug } = await params;
  const page = getRolePage(slug);
  if (!page) notFound();

  const siteUrl = getSiteUrl();
  const path = `/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}${path}#profile-page`,
        url: `${siteUrl}${path}`,
        name: page.metaTitle,
        description: page.metaDescription,
        dateModified: "2026-06-18",
        mainEntity: { "@id": `${siteUrl}/#jawad-shaikh` },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: page.title, path },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoleDetailPage page={page} />
    </>
  );
}
