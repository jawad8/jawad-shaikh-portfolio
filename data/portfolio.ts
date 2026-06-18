import {
  Bot,
  Braces,
  Building2,
  Code2,
  Database,
  FileSearch,
  Landmark,
  Layers3,
  ScanSearch,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Backend",
    eyebrow: "Systems & APIs",
    icon: Braces,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Java",
      "Node.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    eyebrow: "Product Interfaces",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "AI / ML",
    eyebrow: "Intelligent Automation",
    icon: Bot,
    skills: [
      "LLMs",
      "Generative AI",
      "RAG",
      "NLP",
      "OCR",
      "Vector Databases",
      "Ollama / OpenAI",
    ],
  },
  {
    title: "Data & Tools",
    eyebrow: "Engineering Workflow",
    icon: Database,
    skills: ["PostgreSQL", "Oracle Database", "Git", "JIRA", "Linux"],
  },
];

export const experiences = [
  {
    role: "Senior Software Developer",
    company: "ImpactSure Technologies",
    period: "07/2024 - 06/2026",
    location: "Mumbai, India",
    summary:
      "Led enterprise banking automation and document intelligence initiatives across the full delivery lifecycle.",
    highlights: [
      "Built scalable loan and guarantee automation workflows for banking use cases.",
      "Architected an in-house document comparison engine to improve verification efficiency and reduce external dependency.",
      "Designed robust extraction pipelines with validation and deduplication for complex financial documents.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "HDFC Bank",
    period: "10/2022 - 07/2024",
    location: "Mumbai, India",
    summary:
      "Developed data-driven internal products supporting marketing, risk, and operational teams.",
    highlights: [
      "Built full-stack analytics applications with Python, Django, JavaScript, and PostgreSQL.",
      "Delivered machine learning solutions for segmentation, risk assessment, and campaign optimization.",
      "Implemented risk-based re-KYC classification aligned with banking compliance workflows.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Cyphware Infotech",
    period: "01/2022 - 07/2022",
    location: "Mumbai, India",
    summary:
      "Contributed to a travel booking product spanning user interfaces, APIs, integrations, and payments.",
    highlights: [
      "Developed frontend features and backend APIs for real-time booking workflows.",
      "Integrated external travel services and a secure payment gateway.",
    ],
  },
];

export const projects = [
  {
    title: "Synapse AI",
    subtitle: "Intelligent Contract Risk Analyzer",
    description:
      "AI-powered contract intelligence for clause extraction, semantic search, risk classification, and compliance validation across business documents.",
    icon: FileSearch,
    tags: ["Django", "React", "LLMs", "RAG", "NLP", "Ollama"],
    accent: "violet",
    category: "GenAI / Legal Tech",
  },
  {
    title: "Enterprise Knowledge Assistant",
    subtitle: "Source-grounded RAG Platform",
    description:
      "An intelligent Q&A platform for policies and knowledge bases, with document ingestion, embeddings, semantic retrieval, and grounded responses.",
    icon: Sparkles,
    tags: ["Python", "React", "RAG", "Vector DB", "REST APIs"],
    accent: "cyan",
    category: "GenAI / Knowledge",
  },
  {
    title: "Insta Bank Guarantee Automation",
    subtitle: "ICICI Bank",
    description:
      "Document automation for intelligent extraction, validation, compliance checks, and bank guarantee generation using OCR and NLP workflows.",
    icon: ScanSearch,
    tags: ["Python", "Django", "OCR", "NLP", "Oracle"],
    accent: "blue",
    category: "Banking / Automation",
  },
  {
    title: "SureSanction",
    subtitle: "Loan Sanction Automation - Axis Bank",
    description:
      "Enterprise loan processing with document scrutiny, approval workflows, discrepancy detection, and an in-house comparison engine.",
    icon: Workflow,
    tags: ["Django", "JavaScript", "REST APIs", "ML", "Java"],
    accent: "emerald",
    category: "FinTech / Workflow",
  },
  {
    title: "HDFC Analytics & Automation",
    subtitle: "Internal Business Platforms",
    description:
      "Applications and analytics tools supporting campaign intelligence, customer segmentation, risk assessment, and operational automation.",
    icon: Landmark,
    tags: ["Python", "Django", "PostgreSQL", "Analytics", "ML"],
    accent: "amber",
    category: "Banking / Analytics",
  },
];

export const achievements = [
  {
    title: "Faster decisions",
    description:
      "Reduced loan approval turnaround time through workflow digitization and automation.",
    icon: Workflow,
  },
  {
    title: "Built in-house",
    description:
      "Created a document comparison engine that reduced third-party dependency.",
    icon: Layers3,
  },
  {
    title: "Higher accuracy",
    description:
      "Improved banking document extraction with validation and deduplication logic.",
    icon: ScanSearch,
  },
  {
    title: "Business impact",
    description:
      "Delivered AI, machine learning, and analytics solutions that improved operating efficiency.",
    icon: Building2,
  },
];
