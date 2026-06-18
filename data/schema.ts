import { getSiteUrl, linkedInUrl } from "@/data/site";

export function personSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@type": "Person",
    "@id": `${siteUrl}/#jawad-shaikh`,
    name: "Jawad Shaikh",
    givenName: "Jawad",
    familyName: "Shaikh",
    url: siteUrl,
    image: `${siteUrl}/images/jawad-shaikh.jpeg`,
    jobTitle: "Senior Software Developer",
    description:
      "Senior Software Developer and Full Stack Developer based in Abu Dhabi, UAE, specializing in Python, Django, React.js, Next.js, REST APIs, GenAI, LLMs, RAG, OCR, NLP, Banking, and FinTech.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    email: "mailto:shaikhjawwad8@gmail.com",
    telephone: "+971503954202",
    sameAs: [linkedInUrl],
    knowsAbout: [
      "Python",
      "Django",
      "React.js",
      "Next.js",
      "REST APIs",
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Optical Character Recognition",
      "Natural Language Processing",
      "PostgreSQL",
      "Oracle Database",
      "Banking Technology",
      "Financial Technology",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Software Developer",
      occupationLocation: {
        "@type": "City",
        name: "Abu Dhabi",
      },
      skills:
        "Python, Django, React.js, Next.js, REST APIs, GenAI, LLMs, RAG, OCR, NLP, PostgreSQL, Oracle, Banking, FinTech",
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  const siteUrl = getSiteUrl();

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
