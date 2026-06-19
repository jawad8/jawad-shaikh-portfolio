import {
  Activity,
  Bot,
  Braces,
  Building2,
  Code2,
  Database,
  FileSearch,
  Landmark,
  Layers3,
  LineChart,
  ScanSearch,
  Sparkles,
  Users,
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
    slug: "ai-system-health-guardian",
    title: "AI System Health Guardian",
    subtitle: "Infrastructure Monitoring Platform",
    description:
      "Enterprise-style monitoring for infrastructure health, operational metrics, real-time alerts, and distributed environments.",
    icon: Activity,
    tags: ["Next.js", "React", "TypeScript", "Monitoring", "Data Visualization"],
    accent: "cyan",
    category: "Infrastructure / Monitoring",
    liveDemo: "https://ai-system-health-guardian.vercel.app/",
    caseStudy: {
      context:
        "Operations teams need a clear view of system health across servers, data centres, and distributed environments before issues affect availability.",
      solution:
        "Built an enterprise-style monitoring experience that brings infrastructure metrics, health indicators, alerts, and operational trends into a focused dashboard.",
      capabilities: [
        "CPU, memory, storage, and network monitoring",
        "System health status and alert workflows",
        "Operational metrics and trend visualization",
        "Distributed infrastructure and mining environment views",
      ],
      contribution:
        "Designed and developed the responsive Next.js dashboard, reusable monitoring components, metric visualizations, alert states, and operational user experience.",
      outcome:
        "A polished demonstration of how complex infrastructure signals can be organized into an accessible, decision-focused monitoring interface.",
    },
  },
  {
    slug: "peopleops-hrms",
    title: "PeopleOps HRMS",
    subtitle: "Modern Workforce Management",
    description:
      "A modern HR platform for employee operations, attendance, leave, payroll insights, analytics, and AI-assisted workforce queries.",
    icon: Users,
    tags: ["Next.js", "React", "TypeScript", "HR Analytics", "AI Integration"],
    accent: "emerald",
    category: "Enterprise / HR Tech",
    liveDemo: "https://peopleops-hrms.vercel.app/",
    caseStudy: {
      context:
        "HR teams often manage employee records, attendance, leave, payroll signals, and workforce questions across disconnected tools and manual processes.",
      solution:
        "Created a cohesive HRMS experience that centralizes workforce operations, management dashboards, analytical views, and AI-assisted employee queries.",
      capabilities: [
        "Employee information and workforce management",
        "Attendance and leave tracking workflows",
        "Payroll insights and HR analytics dashboards",
        "AI-assisted workforce information queries",
      ],
      contribution:
        "Designed and implemented the product interface, reusable Next.js components, responsive dashboards, analytical views, and AI-assisted interaction patterns.",
      outcome:
        "A professional HR technology prototype demonstrating how workforce data and routine HR workflows can be made easier to understand and manage.",
    },
  },
  {
    slug: "synapse-ai-contract-risk-analyzer",
    title: "Synapse AI",
    subtitle: "Intelligent Contract Risk Analyzer",
    description:
      "AI-powered contract intelligence for clause extraction, semantic search, risk classification, and compliance validation across business documents.",
    icon: FileSearch,
    tags: ["Django", "React", "LLMs", "RAG", "NLP", "Ollama"],
    accent: "violet",
    category: "GenAI / Legal Tech",
    caseStudy: {
      context:
        "Legal and commercial teams need to review large contracts quickly without losing traceability or relying on ungrounded AI answers.",
      solution:
        "Designed a contract intelligence workflow that ingests business documents, identifies clauses, retrieves semantically relevant context, and produces risk-oriented analysis grounded in the source material.",
      capabilities: [
        "PDF, DOCX, and TXT document ingestion",
        "Clause extraction and semantic search",
        "Risk classification and compliance validation",
        "Source-grounded LLM responses with local model support",
      ],
      contribution:
        "Full-stack architecture, Django REST APIs, React workflows, retrieval pipeline design, prompt orchestration, and secure JWT-based access.",
      outcome:
        "A reusable demonstration platform for faster, more consistent first-pass contract review while keeping the reviewer in control.",
    },
  },
  {
    slug: "stock-portfolio-app",
    title: "Stock Portfolio App",
    subtitle: "Investment Performance Dashboard",
    description:
      "A responsive investment dashboard for tracking holdings, portfolio value, gains and losses, and overall financial performance.",
    icon: LineChart,
    tags: ["JavaScript", "Financial Dashboard", "Responsive UI", "Data Visualization"],
    accent: "amber",
    category: "FinTech / Investments",
    liveDemo: "https://jawad8.github.io/stock-portfolio-app/",
    caseStudy: {
      context:
        "Individual investors need a simple way to review holdings and understand portfolio performance without working through dense financial tables.",
      solution:
        "Developed a responsive portfolio interface that organizes investment holdings, total value, gains and losses, and performance indicators into clear visual summaries.",
      capabilities: [
        "Investment and holding tracking",
        "Portfolio value and performance summaries",
        "Gain and loss visualization",
        "Responsive financial dashboard experience",
      ],
      contribution:
        "Developed the application structure, responsive interface, portfolio calculations, reusable UI elements, and financial data presentation.",
      outcome:
        "A concise investment-tracking experience that makes essential portfolio information easy to scan across desktop and mobile devices.",
    },
  },
  {
    slug: "enterprise-knowledge-assistant-rag",
    title: "Enterprise Knowledge Assistant",
    subtitle: "Source-grounded RAG Platform",
    description:
      "An intelligent Q&A platform for policies and knowledge bases, with document ingestion, embeddings, semantic retrieval, and grounded responses.",
    icon: Sparkles,
    tags: ["Python", "React", "RAG", "Vector DB", "REST APIs"],
    accent: "cyan",
    category: "GenAI / Knowledge",
    caseStudy: {
      context:
        "Enterprise information is frequently fragmented across policies, manuals, and internal documents, making reliable answers slow to find.",
      solution:
        "Built a retrieval-augmented assistant that converts documents into searchable knowledge, retrieves the most relevant passages, and generates answers with clear source grounding.",
      capabilities: [
        "Configurable document ingestion and chunking",
        "Vector embeddings and semantic retrieval",
        "Context-aware question answering",
        "Source citations and grounded response generation",
      ],
      contribution:
        "Backend services, REST APIs, vector search workflow, retrieval quality controls, prompt design, and the React conversational experience.",
      outcome:
        "A scalable foundation for secure enterprise Q&A that improves information discovery without presenting generated content as an unsupported fact.",
    },
  },
  {
    slug: "insta-bank-guarantee-automation",
    title: "Insta Bank Guarantee Automation",
    subtitle: "ICICI Bank",
    description:
      "Document automation for intelligent extraction, validation, compliance checks, and bank guarantee generation using OCR and NLP workflows.",
    icon: ScanSearch,
    tags: ["Python", "Django", "OCR", "NLP", "Oracle"],
    accent: "blue",
    category: "Banking / Automation",
    caseStudy: {
      context:
        "Bank guarantee processing involves document-heavy validation, repeated data entry, and strict consistency and compliance checks.",
      solution:
        "Developed an automation workflow that extracts structured information from banking documents, applies business validations, and supports guarantee preparation through controlled stages.",
      capabilities: [
        "OCR and NLP-based data extraction",
        "Multi-occurrence validation and deduplication",
        "Document and business-rule consistency checks",
        "REST API integration with enterprise systems",
      ],
      contribution:
        "Extraction architecture, validation logic, Django services, Oracle-backed workflows, API integrations, and production-focused exception handling.",
      outcome:
        "Improved extraction reliability and reduced repetitive manual verification while preserving review checkpoints for banking operations.",
    },
  },
  {
    slug: "suresanction-loan-automation",
    title: "SureSanction",
    subtitle: "Loan Sanction Automation - Axis Bank",
    description:
      "Enterprise loan processing with document scrutiny, approval workflows, discrepancy detection, and an in-house comparison engine.",
    icon: Workflow,
    tags: ["Django", "JavaScript", "REST APIs", "ML", "Java"],
    accent: "emerald",
    category: "FinTech / Workflow",
    caseStudy: {
      context:
        "Loan sanction workflows require teams to scrutinize multiple documents, identify discrepancies, and coordinate approvals under tight turnaround expectations.",
      solution:
        "Engineered a workflow platform for document scrutiny, discrepancy detection, controlled approvals, and banking document comparison.",
      capabilities: [
        "Configurable loan approval workflow",
        "In-house document comparison engine",
        "Discrepancy identification and review queues",
        "Role-based validation and status tracking",
      ],
      contribution:
        "Solution architecture, Python and Django development, comparison logic, REST endpoints, JavaScript interfaces, and workflow integrations.",
      outcome:
        "Reduced reliance on third-party comparison tooling and helped accelerate approval operations through a clearer digital workflow.",
    },
  },
  {
    slug: "hdfc-analytics-automation",
    title: "HDFC Analytics & Automation",
    subtitle: "Internal Business Platforms",
    description:
      "Applications and analytics tools supporting campaign intelligence, customer segmentation, risk assessment, and operational automation.",
    icon: Landmark,
    tags: ["Python", "Django", "PostgreSQL", "Analytics", "ML"],
    accent: "amber",
    category: "Banking / Analytics",
    caseStudy: {
      context:
        "Marketing, risk, and operations teams needed dependable internal tools to translate customer and campaign data into timely decisions.",
      solution:
        "Delivered analytics and automation applications for campaign planning, customer segmentation, risk classification, and operational workflows.",
      capabilities: [
        "Campaign analytics and performance reporting",
        "Customer segmentation and risk assessment",
        "Risk-based re-KYC classification support",
        "Operational workflow automation",
      ],
      contribution:
        "Python and Django applications, PostgreSQL data models, JavaScript interfaces, machine learning workflows, and stakeholder-led iteration.",
      outcome:
        "Contributed to measurable business efficiency and provided internal teams with faster, more actionable decision support.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

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
