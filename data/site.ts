export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const seoKeywords = [
  "Jawad Shaikh",
  "Senior Software Developer UAE",
  "Senior Software Engineer UAE",
  "Software Developer Abu Dhabi",
  "Software Engineer Abu Dhabi",
  "Full Stack Developer UAE",
  "Backend Developer UAE",
  "Python Developer UAE",
  "Python Developer Abu Dhabi",
  "Django Developer UAE",
  "Django REST Framework Developer",
  "React Developer UAE",
  "Next.js Developer UAE",
  "JavaScript Developer Abu Dhabi",
  "Generative AI Engineer UAE",
  "GenAI Developer UAE",
  "LLM Engineer UAE",
  "RAG Developer UAE",
  "AI Software Engineer UAE",
  "NLP Developer UAE",
  "OCR Developer UAE",
  "Document Intelligence Developer",
  "FinTech Developer UAE",
  "Banking Software Developer UAE",
  "Banking Technology Abu Dhabi",
  "REST API Developer UAE",
  "Microservices Developer UAE",
  "PostgreSQL Developer UAE",
  "Oracle Database Developer UAE",
  "Enterprise Software Developer UAE",
  "Digital Transformation Developer UAE",
];
