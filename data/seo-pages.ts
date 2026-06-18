export type RolePage = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  positioning: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  skills: string[];
  projectSlugs: string[];
  relatedRoles: string[];
};

export const rolePages: RolePage[] = [
  {
    slug: "software-developer",
    eyebrow: "Software development",
    title: "Senior Software Developer in Abu Dhabi, UAE",
    metaTitle: "Jawad Shaikh - Senior Software Developer in Abu Dhabi",
    metaDescription:
      "Meet Jawad Shaikh, a Senior Software Developer in Abu Dhabi building enterprise applications, REST APIs, AI automation, Banking, and FinTech platforms.",
    intro:
      "Jawad Shaikh is a Senior Software Developer based in Abu Dhabi, UAE, with 4+ years of experience delivering enterprise web applications, REST APIs, workflow automation, and AI-powered products.",
    positioning:
      "My work connects dependable software engineering with practical business outcomes. I develop systems that must handle complex documents, regulated workflows, large datasets, and integrations without becoming difficult for teams to operate.",
    sections: [
      {
        heading: "Enterprise software development experience",
        paragraphs: [
          "I have delivered software across banking operations, marketing analytics, loan processing, bank guarantee workflows, contract intelligence, and enterprise knowledge management. These products required careful data modelling, secure APIs, validation rules, user-focused interfaces, and maintainable deployment practices.",
          "As a software developer, I work across the delivery lifecycle: understanding operational problems, defining architecture, implementing backend and frontend features, integrating services, testing edge cases, and improving production workflows after release.",
        ],
        bullets: [
          "Python and Django application development",
          "REST API design and enterprise integrations",
          "React.js and Next.js user experiences",
          "PostgreSQL and Oracle-backed systems",
          "AI-assisted document and knowledge workflows",
        ],
      },
      {
        heading: "Software designed for real operating environments",
        paragraphs: [
          "Enterprise software succeeds when it remains clear under pressure. I focus on reliable validation, explicit workflow states, useful error handling, traceable data, and interfaces that help users make decisions instead of adding friction.",
          "That approach is especially valuable in Banking and FinTech, where document accuracy, controlled approvals, compliance checks, and auditability are central to the product—not optional extras.",
        ],
      },
    ],
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "Next.js",
      "REST APIs",
      "PostgreSQL",
      "Oracle",
      "Microservices",
    ],
    projectSlugs: [
      "suresanction-loan-automation",
      "insta-bank-guarantee-automation",
      "synapse-ai-contract-risk-analyzer",
    ],
    relatedRoles: ["full-stack-developer", "software-engineer"],
  },
  {
    slug: "full-stack-developer",
    eyebrow: "Full-stack engineering",
    title: "Full Stack Developer for Enterprise and AI Products",
    metaTitle: "Jawad Shaikh - Full Stack Developer | Python and React",
    metaDescription:
      "Jawad Shaikh is a Full Stack Developer in Abu Dhabi using Python, Django, React.js, Next.js, APIs, PostgreSQL, and AI technologies.",
    intro:
      "I build complete digital products—from database models and service architecture to responsive React interfaces and production-ready integrations.",
    positioning:
      "My full-stack background lets me make better decisions across system boundaries. I understand how frontend choices affect API design, how data models shape workflows, and how AI features must fit into an understandable user experience.",
    sections: [
      {
        heading: "Backend and frontend working as one product",
        paragraphs: [
          "On the backend, I use Python, Django, Django REST Framework, relational databases, and service integrations to create secure, testable application foundations. On the frontend, I use React.js, Next.js, JavaScript, Tailwind CSS, and component-based design to make complex workflows approachable.",
          "This combined perspective has been valuable for document intelligence systems, analytics dashboards, approval platforms, and RAG applications where the quality of the user experience depends directly on backend reliability and response transparency.",
        ],
        bullets: [
          "API-first architecture and data modelling",
          "Responsive React and Next.js interfaces",
          "Authentication and role-aware workflows",
          "Database queries, validation, and reporting",
          "End-to-end debugging across the stack",
        ],
      },
      {
        heading: "Full-stack delivery for enterprise teams",
        paragraphs: [
          "I favour reusable components, clear API contracts, purposeful state management, and incremental delivery. This keeps products easier to maintain as business rules evolve.",
          "For AI-enabled products, I also design the interaction between retrieval, model output, source context, and human review so the interface communicates confidence and evidence rather than presenting AI as a black box.",
        ],
      },
    ],
    skills: [
      "Python",
      "Django",
      "REST APIs",
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Oracle",
    ],
    projectSlugs: [
      "enterprise-knowledge-assistant-rag",
      "synapse-ai-contract-risk-analyzer",
      "hdfc-analytics-automation",
    ],
    relatedRoles: ["software-developer", "python-developer"],
  },
  {
    slug: "python-developer",
    eyebrow: "Python engineering",
    title: "Python Django Developer in Abu Dhabi",
    metaTitle: "Jawad Shaikh - Python Django Developer in Abu Dhabi",
    metaDescription:
      "Python Django Developer in Abu Dhabi experienced in REST APIs, automation, OCR, NLP, RAG, PostgreSQL, Oracle, Banking, and FinTech systems.",
    intro:
      "Python has been the core of my work across enterprise web development, data processing, machine learning, document extraction, and Generative AI integration.",
    positioning:
      "I use Python because it supports both robust application engineering and intelligent automation. Django and Django REST Framework provide the structure for secure business applications, while the broader Python ecosystem supports OCR, NLP, analytics, embeddings, and LLM workflows.",
    sections: [
      {
        heading: "Django and REST API development",
        paragraphs: [
          "I design Django applications around clear domains, reusable services, explicit validation, and well-defined REST APIs. My experience includes authentication, workflow state, document processing, database transactions, background operations, and integrations with enterprise systems.",
          "I have worked with PostgreSQL and Oracle databases, translating complex business rules into maintainable application logic while keeping APIs predictable for frontend and integration consumers.",
        ],
        bullets: [
          "Django and Django REST Framework",
          "RESTful service design and integration",
          "PostgreSQL and Oracle Database",
          "Validation, deduplication, and document pipelines",
          "Python analytics and machine learning workflows",
        ],
      },
      {
        heading: "Python for AI and intelligent automation",
        paragraphs: [
          "Beyond conventional web development, I use Python to build RAG pipelines, semantic retrieval, OCR and NLP extraction, document comparison, embeddings, and LLM orchestration.",
          "The engineering priority is always reliability: validate extracted data, ground generated answers in source material, handle failure modes, and preserve human review where the decision carries operational or compliance risk.",
        ],
      },
    ],
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "PostgreSQL",
      "Oracle",
      "OCR",
      "NLP",
      "RAG",
      "LLMs",
    ],
    projectSlugs: [
      "insta-bank-guarantee-automation",
      "enterprise-knowledge-assistant-rag",
      "suresanction-loan-automation",
    ],
    relatedRoles: ["full-stack-developer", "genai-llm-developer"],
  },
  {
    slug: "software-engineer",
    eyebrow: "Software engineering",
    title: "Software Engineer for Scalable Enterprise Systems",
    metaTitle: "Jawad Shaikh - Software Engineer | Enterprise Systems UAE",
    metaDescription:
      "Software Engineer in Abu Dhabi focused on scalable enterprise architecture, APIs, microservices, document intelligence, and financial technology.",
    intro:
      "My software engineering approach centres on turning complicated operational requirements into systems that are understandable, testable, and resilient.",
    positioning:
      "I have worked on products where reliability and clarity matter as much as feature delivery: banking approvals, document validation, customer analytics, contract risk, and enterprise knowledge access.",
    sections: [
      {
        heading: "Architecture shaped by business risk",
        paragraphs: [
          "Good architecture is contextual. A banking workflow needs explicit approval states and audit-friendly validation. A document intelligence product needs confidence checks, deduplication, and source traceability. A RAG assistant needs retrieval quality, context controls, and grounded responses.",
          "I design services, APIs, data models, and interfaces around those realities. The objective is not complexity for its own sake; it is a system that teams can reason about, extend, and support.",
        ],
        bullets: [
          "Domain-focused backend architecture",
          "Microservices and integration boundaries",
          "Secure and maintainable REST APIs",
          "Database design and consistency controls",
          "Observability-minded error and workflow handling",
        ],
      },
      {
        heading: "Engineering across product boundaries",
        paragraphs: [
          "My experience spans backend systems, frontend applications, databases, machine learning workflows, and AI integrations. That breadth helps me identify problems that sit between components, where many production issues actually occur.",
          "I collaborate closely with product stakeholders and operational users, translating process knowledge into technical decisions and iterating based on real usage rather than assumptions.",
        ],
      },
    ],
    skills: [
      "System Design",
      "Python",
      "Django",
      "React.js",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "Oracle",
      "Git",
      "Linux",
    ],
    projectSlugs: [
      "suresanction-loan-automation",
      "synapse-ai-contract-risk-analyzer",
      "hdfc-analytics-automation",
    ],
    relatedRoles: ["software-developer", "banking-fintech-developer"],
  },
  {
    slug: "genai-llm-developer",
    eyebrow: "Applied AI engineering",
    title: "GenAI and LLM Developer in the UAE",
    metaTitle: "Jawad Shaikh - GenAI LLM and RAG Developer UAE",
    metaDescription:
      "GenAI and LLM Developer in the UAE building RAG assistants, semantic search, contract intelligence, OCR, NLP, and grounded enterprise AI.",
    intro:
      "I develop applied Generative AI systems that connect LLM capabilities to enterprise documents, knowledge, and operational workflows.",
    positioning:
      "My focus is not a chatbot veneer. I work on the engineering around the model: ingestion, chunking, embeddings, retrieval, prompt context, source grounding, validation, access control, and the interface through which people review results.",
    sections: [
      {
        heading: "RAG and source-grounded enterprise AI",
        paragraphs: [
          "Retrieval-Augmented Generation is most useful when the retrieval layer is treated as a product capability rather than a hidden implementation detail. I design ingestion and chunking strategies, semantic search, context selection, and responses that point users back to their sources.",
          "This approach supports enterprise knowledge assistants and contract intelligence tools where accuracy, explainability, and controlled access are more important than novelty.",
        ],
        bullets: [
          "LLM integration and prompt orchestration",
          "RAG pipelines and vector databases",
          "Document ingestion and semantic search",
          "Source-grounded answer generation",
          "Ollama and OpenAI-compatible model workflows",
        ],
      },
      {
        heading: "Document intelligence with OCR and NLP",
        paragraphs: [
          "My AI experience also includes OCR and NLP pipelines for extracting and validating information from structured and unstructured financial documents.",
          "I combine extraction models with deterministic validation, multi-occurrence handling, deduplication, and human review. This hybrid approach is often more dependable for regulated enterprise workflows than relying on model output alone.",
        ],
      },
    ],
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Vector Databases",
      "Semantic Search",
      "NLP",
      "OCR",
      "Python",
      "Ollama",
      "REST APIs",
    ],
    projectSlugs: [
      "synapse-ai-contract-risk-analyzer",
      "enterprise-knowledge-assistant-rag",
      "insta-bank-guarantee-automation",
    ],
    relatedRoles: ["python-developer", "banking-fintech-developer"],
  },
  {
    slug: "banking-fintech-developer",
    eyebrow: "Banking technology",
    title: "Banking and FinTech Software Developer in the UAE",
    metaTitle: "Jawad Shaikh - Banking FinTech Software Developer UAE",
    metaDescription:
      "Banking and FinTech Software Developer in the UAE with experience in loan automation, bank guarantees, document intelligence, analytics, and compliance workflows.",
    intro:
      "I bring hands-on software development experience from banking analytics, loan sanction automation, bank guarantee processing, document validation, and financial workflow digitisation.",
    positioning:
      "Financial technology products operate within strict business rules and real operational constraints. I build software that supports those constraints through clear workflow states, validation, controlled approvals, secure APIs, and traceable document processing.",
    sections: [
      {
        heading: "Banking workflow and document automation",
        paragraphs: [
          "At ImpactSure Technologies, I worked on enterprise platforms for loan sanction and bank guarantee operations. The work involved document scrutiny, extraction, discrepancy detection, compliance-oriented checks, approval workflows, and integration with banking systems.",
          "I also helped develop an in-house document comparison engine, reducing dependence on third-party tooling while improving control over verification logic and workflow integration.",
        ],
        bullets: [
          "Loan sanction workflow automation",
          "Bank guarantee document processing",
          "OCR and NLP-based financial extraction",
          "Document comparison and discrepancy detection",
          "Oracle and REST API integrations",
        ],
      },
      {
        heading: "Analytics and risk-focused applications",
        paragraphs: [
          "At HDFC Bank, I built internal applications and analytics solutions for campaign management, customer segmentation, risk assessment, and operational automation.",
          "This combination of product engineering and banking domain experience helps me communicate with business teams, understand process risk, and build systems that support measurable efficiency without sacrificing control.",
        ],
      },
    ],
    skills: [
      "Banking Technology",
      "FinTech",
      "Python",
      "Django",
      "REST APIs",
      "Oracle",
      "PostgreSQL",
      "OCR",
      "NLP",
      "Workflow Automation",
    ],
    projectSlugs: [
      "suresanction-loan-automation",
      "insta-bank-guarantee-automation",
      "hdfc-analytics-automation",
    ],
    relatedRoles: ["software-engineer", "genai-llm-developer"],
  },
];

export function getRolePage(slug: string) {
  return rolePages.find((page) => page.slug === slug);
}

export const projectSeo: Record<
  string,
  {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    overview: string;
    businessImpact: string;
    roleSummary: string;
  }
> = {
  "synapse-ai-contract-risk-analyzer": {
    metaTitle: "Synapse AI Contract Risk Analyzer | Jawad Shaikh",
    metaDescription:
      "Synapse AI is a contract risk analyzer using Django, React, LLMs, RAG, NLP, semantic search, and source-grounded compliance workflows.",
    headline: "AI Contract Risk Analyzer with LLMs and RAG",
    overview:
      "Synapse AI is a document intelligence platform designed to support faster, more consistent contract review. It combines full-stack application engineering with Retrieval-Augmented Generation, semantic search, and structured risk workflows.",
    businessImpact:
      "The platform demonstrates how legal and commercial teams can reduce repetitive first-pass review, find relevant clauses faster, and retain source traceability when using Generative AI.",
    roleSummary:
      "I designed and developed the full-stack architecture, including Django REST APIs, React workflows, document ingestion, retrieval design, prompt orchestration, JWT authentication, and local LLM integration.",
  },
  "enterprise-knowledge-assistant-rag": {
    metaTitle: "Enterprise Knowledge Assistant RAG Project | Jawad Shaikh",
    metaDescription:
      "Enterprise RAG assistant by Jawad Shaikh using Python, Django, React, vector databases, embeddings, semantic search, and grounded answers.",
    headline: "Enterprise Knowledge Assistant with Source-Grounded RAG",
    overview:
      "The Enterprise Knowledge Assistant turns policies, manuals, and internal documents into a searchable knowledge experience. Users can ask natural-language questions and receive answers based on retrieved source passages.",
    businessImpact:
      "The solution provides a foundation for faster information discovery while reducing the risk of unsupported AI responses through retrieval controls and visible grounding.",
    roleSummary:
      "I developed the backend services, REST APIs, ingestion and chunking workflow, vector retrieval, prompt context strategy, quality controls, and React-based conversational interface.",
  },
  "insta-bank-guarantee-automation": {
    metaTitle: "Bank Guarantee Automation Project | Jawad Shaikh",
    metaDescription:
      "Bank guarantee automation using Python, Django, OCR, NLP, Oracle, validation, compliance checks, and REST API integrations.",
    headline: "Bank Guarantee Document Automation Platform",
    overview:
      "This enterprise Banking automation platform supports document intake, intelligent extraction, business validation, compliance-oriented checks, and controlled guarantee preparation workflows.",
    businessImpact:
      "The solution improved extraction reliability and reduced repetitive manual verification by combining OCR and NLP with deterministic validation, deduplication, and review checkpoints.",
    roleSummary:
      "I worked on the extraction architecture, Django services, Oracle-backed workflows, multi-occurrence validation, deduplication logic, API integrations, and production exception handling.",
  },
  "suresanction-loan-automation": {
    metaTitle: "SureSanction Loan Automation Project | Jawad Shaikh",
    metaDescription:
      "Enterprise loan sanction automation using Python, Django, REST APIs, document scrutiny, approval workflows, and document comparison.",
    headline: "Loan Sanction and Document Scrutiny Automation",
    overview:
      "SureSanction digitises loan processing activities that depend on document review, discrepancy identification, validation, and coordinated approvals.",
    businessImpact:
      "The workflow helped reduce approval turnaround time and external tooling dependency through an integrated in-house document comparison engine.",
    roleSummary:
      "I contributed to solution architecture, Python and Django development, workflow services, discrepancy logic, REST APIs, JavaScript interfaces, and the document comparison capability.",
  },
  "hdfc-analytics-automation": {
    metaTitle: "Banking Analytics and Automation Project | Jawad Shaikh",
    metaDescription:
      "HDFC Bank analytics and automation work covering Python, Django, PostgreSQL, customer segmentation, risk assessment, and campaign intelligence.",
    headline: "Banking Analytics and Operational Automation",
    overview:
      "This body of work includes internal applications and analytical solutions supporting campaign planning, customer segmentation, risk assessment, re-KYC classification, and operational decision-making.",
    businessImpact:
      "The applications contributed to business efficiency by giving internal teams faster access to actionable customer and campaign intelligence and by automating repeatable operational work.",
    roleSummary:
      "I developed Python and Django applications, PostgreSQL data models, JavaScript interfaces, machine learning workflows, reporting features, and stakeholder-led product improvements.",
  },
};
