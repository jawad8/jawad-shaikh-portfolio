import { Portfolio } from "@/components/portfolio";
import { getSiteUrl } from "@/data/site";

const siteUrl = getSiteUrl();

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: siteUrl,
  name: "Jawad Shaikh - Senior Software Developer in Abu Dhabi",
  description:
    "Professional portfolio of Jawad Shaikh, a Senior Software Developer specializing in enterprise software, AI, LLM, Banking, and FinTech solutions.",
  dateModified: "2026-06-18",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#jawad-shaikh`,
    name: "Jawad Shaikh",
    givenName: "Jawad",
    familyName: "Shaikh",
    url: siteUrl,
    image: `${siteUrl}/images/jawad-shaikh.jpeg`,
    jobTitle: "Senior Software Developer",
    description:
      "Senior Software Developer with 4+ years of experience in enterprise applications, Python, Django, React, Generative AI, LLMs, RAG, document intelligence, Banking, and FinTech.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    email: "mailto:shaikhjawwad8@gmail.com",
    telephone: "+971503954202",
    sameAs: ["https://www.linkedin.com/in/jawad-shaikh-44a668180"],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "VESIT - Mumbai University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Royal College - Mumbai University",
      },
    ],
    knowsAbout: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Next.js",
      "REST APIs",
      "Microservices",
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Natural Language Processing",
      "Optical Character Recognition",
      "Vector Databases",
      "Document Intelligence",
      "Banking Technology",
      "Financial Technology",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Software Developer",
      occupationLocation: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      skills:
        "Python, Django, React, Next.js, REST APIs, Microservices, PostgreSQL, Oracle, Generative AI, LLMs, RAG, NLP, OCR, Banking, FinTech",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Jawad Shaikh Portfolio",
  inLanguage: "en-AE",
  publisher: {
    "@id": `${siteUrl}/#jawad-shaikh`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([profilePageSchema, websiteSchema]),
        }}
      />
      <Portfolio />
    </>
  );
}
