"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  achievements,
  experiences,
  navItems,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { rolePages } from "@/data/seo-pages";
import { SectionHeading } from "@/components/section-heading";

const emailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=shaikhjawwad8%40gmail.com&su=Opportunity%20for%20Jawad%20Shaikh";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function Brand() {
  return (
    <span className="brand-identity">
      <span className="brand-name">
        jawad<span>.</span>shaikh
      </span>
      <span className="brand-role">software × intelligence</span>
    </span>
  );
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Jawad Shaikh home">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta desktop-only" href="#contact">
          Let&apos;s talk
          <ArrowRight size={15} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                  <ChevronRight size={17} />
                </a>
              ))}
              <a
                className="mobile-contact"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contact Jawad
                <ArrowRight size={17} />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 56]);

  return (
    <section id="home" className="hero">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={stagger}
        >
          <motion.div
            className="mobile-identity-card"
            variants={reveal}
            aria-label="Jawad Shaikh, Senior Software Developer in Abu Dhabi"
          >
            <div className="mobile-portrait">
              <Image
                src="/images/jawad-shaikh.jpeg"
                alt="Jawad Shaikh, Senior Software Developer in Abu Dhabi, UAE"
                fill
                priority
                sizes="88px"
              />
            </div>
            <div className="mobile-identity-copy">
              <span className="mobile-hello">Hi, I&apos;m</span>
              <strong>Jawad Shaikh</strong>
              <span>Senior Software Developer</span>
              <small>
                <i />
                Abu Dhabi, UAE
              </small>
            </div>
          </motion.div>

          <motion.div
            className="availability-pill desktop-availability"
            variants={reveal}
          >
            <span className="status-dot" />
            Abu Dhabi, UAE · Open to opportunities
          </motion.div>

          <motion.p className="hero-kicker" variants={reveal}>
            Abu Dhabi, UAE · Enterprise Software · Applied AI
          </motion.p>
          <motion.h1 variants={reveal}>
            Jawad Shaikh
            <span className="gradient-text"> - Senior Software Developer</span>
          </motion.h1>
          <motion.p className="hero-statement" variants={reveal}>
            Engineering software for finance, intelligence, and scale.
          </motion.p>
          <motion.div className="hero-specialties" variants={reveal}>
            <span>Python · Django</span>
            <span>React · Next.js</span>
            <span>GenAI · RAG</span>
            <span>Banking · FinTech</span>
          </motion.div>
          <motion.p className="hero-intro" variants={reveal}>
            From secure banking workflows to production-ready LLM systems, I
            turn complex operations into clear, scalable digital products.
          </motion.p>

          <motion.div className="hero-actions" variants={reveal}>
            <a
              className="button button-primary resume-button"
              href="/Jawad%20Shaikh.pdf"
              download="Jawad Shaikh.pdf"
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a className="button button-secondary contact-button" href="#contact">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
            <a className="text-link projects-link" href="#projects">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero-proof" variants={reveal}>
            <div>
              <strong>4+</strong>
              <span>Years building</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Enterprise projects</span>
            </div>
            <div>
              <strong>AI + FinTech</strong>
              <span>Core specialization</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imageY }}
        >
          <div className="portrait-shell">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <Image
                src="/images/jawad-shaikh.jpeg"
                alt="Jawad Shaikh, Senior Software Developer based in Abu Dhabi"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 420px"
                className="portrait-image"
              />
              <div className="portrait-overlay" />
            </div>
            <div className="floating-card floating-card-top">
              <Sparkles size={17} />
              <span>
                <small>Specialized in</small>
                GenAI &amp; RAG
              </span>
            </div>
            <div className="floating-card floating-card-bottom">
              <CheckCircle2 size={17} />
              <span>
                <small>Engineering focus</small>
                Enterprise-grade
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="capability-rail" aria-hidden="true">
        <div className="capability-track">
          {[
            "Enterprise Web Applications",
            "REST API Architecture",
            "Banking Automation",
            "Document Intelligence",
            "LLM Integrations",
            "Retrieval-Augmented Generation",
            "Enterprise Web Applications",
            "REST API Architecture",
            "Banking Automation",
            "Document Intelligence",
            "LLM Integrations",
            "Retrieval-Augmented Generation",
          ].map((item, index) => (
            <span key={`${item}-${index}`}>
              <i />
              {item}
            </span>
          ))}
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll to explore</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <AnimatedSection className="about-layout">
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow="About me"
              title="About Jawad Shaikh"
            />
          </motion.div>
          <motion.div className="about-copy" variants={reveal}>
            <p className="about-lead">
              I&apos;m a senior software developer who enjoys working where
              reliable enterprise engineering meets practical AI.
            </p>
            <p>
              Over the past four years, I&apos;ve built full-stack applications,
              REST APIs, banking automation platforms, analytics tools, and
              document intelligence systems. My work spans Python and Django
              backends, React interfaces, relational databases, and
              microservice-based integrations.
            </p>
            <p>
              More recently, I&apos;ve focused on LLM-powered products including
              RAG assistants, semantic search, contract intelligence, OCR/NLP
              extraction, and source-grounded automation. I care about solutions
              that are secure, understandable, maintainable, and genuinely
              useful to the people operating them.
            </p>
          </motion.div>

          <motion.div className="about-bento" variants={stagger}>
            {[
              {
                number: "01",
                title: "Enterprise software",
                copy: "Scalable applications and APIs designed for complex business workflows.",
              },
              {
                number: "02",
                title: "Banking automation",
                copy: "Document-heavy processes made faster, safer, and easier to operate.",
              },
              {
                number: "03",
                title: "AI & document intelligence",
                copy: "LLMs, RAG, OCR, NLP, and semantic retrieval applied with purpose.",
              },
              {
                number: "04",
                title: "Full-stack delivery",
                copy: "From data model and API design to polished React user experiences.",
              },
            ].map((item) => (
              <motion.article
                key={item.number}
                className="glass-card about-card"
                variants={reveal}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <AnimatedSection>
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow="Technical toolkit"
              title="Software Development Skills"
              description="A practical technology set shaped by enterprise delivery, intelligent automation, and modern product engineering."
            />
          </motion.div>
          <motion.div className="skills-grid" variants={stagger}>
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  className="glass-card skill-card"
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-card-head">
                    <span className="icon-box">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <p>{group.eyebrow}</p>
                      <h3>{group.title}</h3>
                    </div>
                  </div>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <AnimatedSection>
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow="Career journey"
              title="Software Engineering Experience"
              description="Progressing from product development to leading enterprise automation and AI-enabled banking solutions."
            />
          </motion.div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                className="timeline-item"
                variants={reveal}
              >
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="experience-meta">
                  <p>{experience.period}</p>
                  <span>{experience.location}</span>
                </div>
                <div className="glass-card experience-card">
                  <p className="company">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  <p className="experience-summary">{experience.summary}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <AnimatedSection>
          <motion.div className="section-title-row" variants={reveal}>
            <SectionHeading
              eyebrow="Selected work"
              title="Selected Software Projects"
              description="Representative enterprise and prototype work. Client details are intentionally limited to public, non-confidential context."
            />
            <div className="project-note">
              <span />
              Case-study overview
            </div>
          </motion.div>

          <motion.div className="projects-grid" variants={stagger}>
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  className={`glass-card project-card project-${project.accent} ${
                    index < 2 ? "project-featured" : ""
                  }`}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="project-top">
                    <span className="project-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-icon">
                    <Icon size={27} aria-hidden="true" />
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    <Link href={`/projects/${project.slug}`}>
                      Full case study
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                    <button
                      className="project-detail-button"
                      type="button"
                      onClick={() => setActiveProject(project)}
                      aria-label={`Quick view ${project.title} case study`}
                    >
                      Quick view
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div className="specialization-grid" variants={stagger}>
            <motion.article className="specialization-card" variants={reveal}>
              <p>Applied artificial intelligence</p>
              <h2>AI &amp; LLM Solutions</h2>
              <span>
                Enterprise RAG, semantic search, Generative AI,
                source-grounded assistants, OCR, NLP, and document intelligence
                engineered with Python and Django.
              </span>
              <Link href="/genai-llm-developer">
                Explore GenAI experience <ArrowRight size={15} />
              </Link>
            </motion.article>
            <motion.article className="specialization-card" variants={reveal}>
              <p>Financial technology</p>
              <h2>Banking &amp; FinTech Work</h2>
              <span>
                Loan automation, bank guarantee processing, document
                validation, analytics, risk workflows, and enterprise API
                integrations for financial services.
              </span>
              <Link href="/banking-fintech-developer">
                Explore FinTech experience <ArrowRight size={15} />
              </Link>
            </motion.article>
          </motion.div>
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="case-study-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveProject(null);
            }}
          >
            <motion.article
              className={`case-study-panel project-${activeProject.accent}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="case-study-header">
                <div>
                  <p>{activeProject.category}</p>
                  <h3 id="case-study-title">{activeProject.title}</h3>
                  <span>{activeProject.subtitle}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close project case study"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="case-study-grid">
                <section>
                  <small>Context</small>
                  <p>{activeProject.caseStudy.context}</p>
                </section>
                <section>
                  <small>Solution</small>
                  <p>{activeProject.caseStudy.solution}</p>
                </section>
                <section className="case-study-capabilities">
                  <small>Key capabilities</small>
                  <ul>
                    {activeProject.caseStudy.capabilities.map((capability) => (
                      <li key={capability}>
                        <CheckCircle2 size={15} />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <small>My contribution</small>
                  <p>{activeProject.caseStudy.contribution}</p>
                </section>
              </div>

              <div className="case-study-outcome">
                <span>Outcome</span>
                <p>{activeProject.caseStudy.outcome}</p>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section achievements-section">
      <div className="container">
        <AnimatedSection>
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow="Impact"
              title="Outcomes, not just output."
              align="center"
            />
          </motion.div>
          <motion.div className="achievement-grid" variants={stagger}>
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <motion.article
                  key={achievement.title}
                  className="achievement-card"
                  variants={reveal}
                >
                  <span className="achievement-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <AnimatedSection className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <motion.div className="contact-copy" variants={reveal}>
            <p className="eyebrow">
              <span />
              Let&apos;s connect
            </p>
            <h2>Contact Jawad Shaikh</h2>
            <p>
              Looking for a senior developer who can bridge software and AI?
              I&apos;m based in Abu Dhabi and open to conversations about senior
              software engineering, full-stack, AI/LLM, and FinTech
              opportunities across the UAE.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={emailComposeUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Mail size={18} />
                Email Jawad
              </a>
              <a
                className="button button-whatsapp"
                href="https://wa.me/971503954202"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div className="contact-details" variants={stagger}>
            <motion.a
              href={emailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
              variants={reveal}
            >
              <span>
                <Mail size={20} />
              </span>
              <div>
                <small>Email</small>
                <strong>shaikhjawwad8@gmail.com</strong>
              </div>
              <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href="tel:+971503954202"
              className="contact-detail"
              variants={reveal}
            >
              <span>
                <Phone size={20} />
              </span>
              <div>
                <small>Phone</small>
                <strong>+971 50 395 4202</strong>
              </div>
              <ExternalLink size={16} />
            </motion.a>
            <motion.div className="contact-detail" variants={reveal}>
              <span>
                <MapPin size={20} />
              </span>
              <div>
                <small>Location</small>
                <strong>Abu Dhabi, UAE</strong>
              </div>
            </motion.div>
            <motion.a
              href="https://www.linkedin.com/in/jawad-shaikh-44a668180"
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
              variants={reveal}
            >
              <span>
                <LinkedInIcon size={20} />
              </span>
              <div>
                <small>LinkedIn</small>
                <strong>Connect professionally</strong>
              </div>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function SearchProfileSummary() {
  return (
    <section className="section profile-summary-section">
      <div className="container">
        <AnimatedSection className="profile-summary-panel">
          <motion.div className="profile-summary-copy" variants={reveal}>
            <p className="eyebrow">
              <span />
              Search-friendly profile summary
            </p>
            <h2>Senior Software Developer in Abu Dhabi, UAE</h2>
            <p className="profile-summary-lead">
              Jawad Shaikh is a Senior Software Developer based in Abu Dhabi,
              UAE, with 4+ years of experience building enterprise web
              applications, REST APIs, Banking/FinTech automation platforms,
              and AI-powered solutions using Python, Django, React.js, GenAI,
              LLMs, RAG, OCR, and NLP.
            </p>
            <p>
              His experience covers Full Stack Development, Python and Django
              engineering, React and Next.js interfaces, enterprise Software
              Engineering, document intelligence, and applied AI/LLM delivery.
              He is available for senior technology opportunities across Abu
              Dhabi and the wider UAE.
            </p>
          </motion.div>

          <motion.div className="profile-role-links" variants={stagger}>
            {rolePages.map((page) => (
              <motion.div key={page.slug} variants={reveal}>
                <Link href={`/${page.slug}`}>
                  <span>{page.eyebrow}</span>
                  <strong>{page.title}</strong>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home" aria-label="Back to top">
          <Brand />
        </a>
        <p>Built with Next.js, React, Tailwind CSS &amp; Framer Motion.</p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/jawad-shaikh-44a668180"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={emailComposeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <SearchProfileSummary />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
