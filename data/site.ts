export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "https://jawad-shaikh-portfolio.vercel.app";
}

export const seoKeywords = [
  "Jawad Shaikh",
  "Senior Software Developer",
  "Software Engineer",
  "Full Stack Developer",
  "Python Developer",
  "Django Developer",
  "React Developer",
  "GenAI Developer",
  "LLM Developer",
  "RAG Developer",
  "Banking Software Developer",
  "FinTech Developer",
  "Abu Dhabi Developer",
  "UAE Software Developer",
];

export const siteName = "Jawad Shaikh Portfolio";
export const linkedInUrl =
  "https://www.linkedin.com/in/jawad-shaikh-44a668180";
export const emailAddress = "shaikhjawwad8@gmail.com";

export const rolePagePaths = [
  "/software-developer",
  "/full-stack-developer",
  "/python-developer",
  "/software-engineer",
  "/genai-llm-developer",
  "/banking-fintech-developer",
] as const;

export const projectPagePaths = [
  "/projects/synapse-ai-contract-risk-analyzer",
  "/projects/enterprise-knowledge-assistant-rag",
  "/projects/insta-bank-guarantee-automation",
  "/projects/suresanction-loan-automation",
  "/projects/hdfc-analytics-automation",
] as const;
