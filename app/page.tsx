import { Portfolio } from "@/components/portfolio";
import { personSchema } from "@/data/schema";
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
  mainEntity: personSchema(),
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
