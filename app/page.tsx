import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Typewriter } from "@/components/typewriter";

const stackCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["HTML/CSS", "React.js", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Django"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Messaging & Streaming",
    skills: ["RabbitMQ", "Apache Kafka"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Linux"],
  },
  {
    category: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes"],
  },
  {
    category: "CI/CD",
    skills: ["GitHub Actions", "GitLab CI"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Observability",
    skills: ["SigNoz"],
  },
];

const projects = [
  {
    title: "Quizlo",
    description:
      "Quiz and learning platform built with Next.js, Node.js/Express, and Postgres which leverages AI to streamline quiz generation while providing a scalable, interactive learning experience.",
  },
  {
    title: "Orbit",
    description:
      "Jira-inspired project management platform built with Angular, NestJS and Postgres, featuring organizations, workspaces, Kanban boards, sprint planning, and role-based access control.",
  },
  {
    title: "TraffikWatch",
    description:
      "Real-time traffic monitoring bot that tracks user-defined routes and periodically checks traffic conditions to detect congestion. Built to deliver automated alerts, helping commuters make better decisions about when to leave and which routes to take.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full max-w-full overflow-hidden px-5 pb-24 pt-36 sm:px-10">
      <div className="grain" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl">
        <Reveal>
          <h1 className="display mt-8 text-nowrap text-[clamp(1.1rem,3.8vw,2.5rem)] font-black leading-[.88]">
            <Typewriter text="hi, da4thmusketeer here." />
          </h1>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
            Software engineer passionate about turning complex ideas into practical, thoughtful, and meaningful
            solutions.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/portfolio"
              className="eyebrow underline underline-offset-4 transition-colors hover:text-coral"
            >
              Selected work ↗
            </Link>
            <Link
              href="/contact"
              className="eyebrow underline underline-offset-4 transition-colors hover:text-coral"
            >
              Get in touch ↗
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Professional Summary Section */}
      <section className="relative mx-auto mt-28 max-w-5xl">
        <Reveal>
          <div className="border-t line pt-6">
            <p className="eyebrow text-ink/60">01 / Professional Summary</p>
            <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-ink/90 sm:text-xl sm:leading-relaxed">
              <p>
                I’m{" "}
                <strong className="font-semibold text-ink">
                  Kelvin Donkor
                </strong>
                , a software engineer passionate about turning ideas into
                practical, meaningful solutions. My work spans full-stack web
                development and machine learning/AI with a strong focus on
                building things that are both thoughtful and useful.
              </p>
              <p>
                I’m naturally curious, a critical thinker, and always looking
                for opportunities to learn, experiment, and solve problems in
                better ways.
              </p>
              <p>
                Beyond technology, I enjoy staying active through fitness,
                watching and playing football, and getting lost in a good book.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects Section */}
      <section className="relative mx-auto mt-28 max-w-5xl">
        <Reveal>
          <div className="border-t line pt-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-ink/60">02 / Projects</p>
              <Link
                href="/portfolio"
                className="eyebrow underline underline-offset-4 transition-colors hover:text-coral"
              >
                View all in portfolio ↗
              </Link>
            </div>
            <div className="mt-10 space-y-12">
              {projects.map((project) => (
                <div key={project.title} className="group">
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-2 transition-colors hover:text-coral"
                    >
                      <span>{project.title}</span>
                      <span className="text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 sm:text-xl">
                        ↗
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-3 text-base font-light leading-relaxed text-ink/80 sm:text-lg sm:leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Tech Stack Section */}
      <section className="relative mx-auto mt-28 max-w-5xl">
        <Reveal>
          <div className="border-t line pt-6">
            <p className="eyebrow text-ink/60">03 / Stack & Tools</p>
            <div className="mt-8 border-t line">
              {stackCategories.map((item) => (
                <div
                  key={item.category}
                  className="flex flex-col gap-1 border-b line py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="eyebrow text-ink/70 sm:w-1/3">
                    {item.category}
                  </span>
                  <span className="text-base font-normal text-ink sm:w-2/3">
                    {item.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
