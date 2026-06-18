import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { RolePage, rolePages } from "@/data/seo-pages";
import { linkedInUrl } from "@/data/site";

const emailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=shaikhjawwad8%40gmail.com&su=Opportunity%20for%20Jawad%20Shaikh";

function Wordmark() {
  return (
    <span className="detail-wordmark">
      jawad<span>.</span>shaikh
      <small>software × intelligence</small>
    </span>
  );
}

export function DetailHeader() {
  return (
    <header className="detail-header">
      <div className="container detail-nav">
        <Link href="/" aria-label="Jawad Shaikh portfolio home">
          <Wordmark />
        </Link>
        <nav aria-label="Detail page navigation">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function DetailFooter() {
  return (
    <footer className="detail-footer">
      <div className="container">
        <Wordmark />
        <p>Senior Software Developer · Abu Dhabi, UAE</p>
        <div>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn <ExternalLink size={14} />
          </a>
          <a href={emailComposeUrl} target="_blank" rel="noreferrer">
            Email <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
            {index < items.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ContactCta({
  heading = "Let’s discuss your next software challenge.",
}: {
  heading?: string;
}) {
  return (
    <section className="detail-cta">
      <div>
        <p>Available in Abu Dhabi, UAE</p>
        <h2>{heading}</h2>
        <span>
          Open to Senior Software Developer, Full Stack, Python, AI/LLM, and
          Banking or FinTech opportunities.
        </span>
      </div>
      <div className="detail-cta-actions">
        <a href={emailComposeUrl} target="_blank" rel="noreferrer">
          <Mail size={17} />
          Contact Jawad
        </a>
        <a href="/Jawad%20Shaikh.pdf" download="Jawad Shaikh.pdf">
          <Download size={17} />
          Resume
        </a>
      </div>
    </section>
  );
}

function ProjectPreview({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const Icon = project.icon;
  return (
    <article className={`detail-project-card project-${project.accent}`}>
      <span className="detail-project-icon">
        <Icon size={21} />
      </span>
      <p>{project.category}</p>
      <h3>{project.title}</h3>
      <span>{project.subtitle}</span>
      <div>
        {project.tags.slice(0, 4).map((tag) => (
          <small key={tag}>{tag}</small>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`}>
        Read case study <ArrowRight size={15} />
      </Link>
    </article>
  );
}

export function RoleDetailPage({ page }: { page: RolePage }) {
  const featuredProjects = page.projectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  const relatedPages = page.relatedRoles
    .map((slug) => rolePages.find((role) => role.slug === slug))
    .filter((role): role is RolePage => Boolean(role));

  return (
    <>
      <DetailHeader />
      <main className="detail-main">
        <div className="detail-hero-grid" aria-hidden="true" />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: page.title },
            ]}
          />

          <section className="role-hero">
            <div className="role-hero-copy">
              <p className="detail-eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p className="detail-lead">{page.intro}</p>
              <p>{page.positioning}</p>
              <div className="detail-location">
                <MapPin size={16} />
                Abu Dhabi, United Arab Emirates
              </div>
            </div>
            <aside className="detail-profile-card">
              <div className="detail-profile-image">
                <Image
                  src="/images/jawad-shaikh.jpeg"
                  alt="Jawad Shaikh, Senior Software Developer in Abu Dhabi, UAE"
                  fill
                  priority
                  sizes="240px"
                />
              </div>
              <h2>Jawad Shaikh</h2>
              <p>Senior Software Developer</p>
              <span>4+ years · Enterprise · AI · FinTech</span>
            </aside>
          </section>

          <div className="detail-content-layout">
            <article className="detail-article">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>
                          <CheckCircle2 size={16} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </article>

            <aside className="detail-skill-panel">
              <p>Core expertise</p>
              <h2>Relevant skills</h2>
              <div>
                {page.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </aside>
          </div>

          <section className="detail-related-section">
            <div className="detail-section-heading">
              <p>Selected work</p>
              <h2>Relevant enterprise projects</h2>
            </div>
            <div className="detail-project-grid">
              {featuredProjects.map((project) => (
                <ProjectPreview key={project.slug} project={project} />
              ))}
            </div>
          </section>

          <section className="related-role-links">
            <p>Explore related expertise</p>
            <div>
              {relatedPages.map((related) => (
                <Link key={related.slug} href={`/${related.slug}`}>
                  {related.title} <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </section>

          <ContactCta />
        </div>
      </main>
      <DetailFooter />
    </>
  );
}

export function ProjectDetailPage({
  project,
  seo,
}: {
  project: (typeof projects)[number];
  seo: {
    headline: string;
    overview: string;
    businessImpact: string;
    roleSummary: string;
  };
}) {
  const Icon = project.icon;
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <DetailHeader />
      <main className="detail-main">
        <div className="detail-hero-grid" aria-hidden="true" />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/#projects" },
              { label: project.title },
            ]}
          />

          <section className={`project-detail-hero project-${project.accent}`}>
            <span className="project-detail-icon">
              <Icon size={30} />
            </span>
            <p>{project.category}</p>
            <h1>{seo.headline}</h1>
            <span>{project.title} · {project.subtitle}</span>
            <div>
              {project.tags.map((tag) => (
                <small key={tag}>{tag}</small>
              ))}
            </div>
          </section>

          <article className="project-case-study">
            <section>
              <p className="detail-section-number">01</p>
              <div>
                <h2>Project overview</h2>
                <p>{seo.overview}</p>
              </div>
            </section>
            <section>
              <p className="detail-section-number">02</p>
              <div>
                <h2>Problem</h2>
                <p>{project.caseStudy.context}</p>
              </div>
            </section>
            <section>
              <p className="detail-section-number">03</p>
              <div>
                <h2>Solution</h2>
                <p>{project.caseStudy.solution}</p>
                <ul>
                  {project.caseStudy.capabilities.map((capability) => (
                    <li key={capability}>
                      <CheckCircle2 size={16} />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <p className="detail-section-number">04</p>
              <div>
                <h2>Technology stack</h2>
                <div className="project-stack">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </section>
            <section>
              <p className="detail-section-number">05</p>
              <div>
                <h2>My role</h2>
                <p>{seo.roleSummary}</p>
              </div>
            </section>
            <section>
              <p className="detail-section-number">06</p>
              <div>
                <h2>Business impact</h2>
                <p>{seo.businessImpact}</p>
                <p>{project.caseStudy.outcome}</p>
              </div>
            </section>
          </article>

          <section className="detail-related-section">
            <div className="detail-section-heading">
              <p>More case studies</p>
              <h2>Explore related software projects</h2>
            </div>
            <div className="detail-project-grid">
              {relatedProjects.map((item) => (
                <ProjectPreview key={item.slug} project={item} />
              ))}
            </div>
          </section>

          <Link className="back-to-portfolio" href="/#projects">
            <ArrowLeft size={16} />
            Back to portfolio projects
          </Link>

          <ContactCta heading="Need a developer for enterprise, AI, or FinTech delivery?" />
        </div>
      </main>
      <DetailFooter />
    </>
  );
}
