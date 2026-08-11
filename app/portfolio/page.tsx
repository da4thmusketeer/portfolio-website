import { Reveal } from "@/components/reveal";

const projects = [
  {
    id: "01",
    title: "Quizlo",
    description:
      "Quiz and learning platform built with Next.js, Node.js/Express, and Postgres which leverages AI to streamline quiz generation while providing a scalable, interactive learning experience.",
    technologies: [
      "TypeScript",
      "Next.js / React",
      "Tailwind CSS",
      "Node.js / Express",
      "PostgreSQL",
      "Redis",
    ],
    liveUrl: "http://quizlo-app.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: "02",
    title: "Orbit",
    description:
      "Jira-inspired project management platform built with Angular, NestJS and Postgres, featuring organizations, workspaces, Kanban boards, sprint planning, and role-based access control.",
    technologies: [
      "TypeScript",
      "Angular",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Redis",
    ],
    liveUrl: "https://google.com",
    githubUrl: "https://github.com",
  },
  {
    id: "03",
    title: "TraffikWatch",
    description:
      "Real-time traffic monitoring bot that tracks user-defined routes and periodically checks traffic conditions to detect congestion. Built to deliver automated alerts, helping commuters make better decisions about when to leave and which routes to take.",
    technologies: [
      "Python",
      "Telegram Bot API",
      "FastAPI",
      "Google Maps Platform",
      "PostgreSQL",
      "Redis",
    ],
    liveUrl: "https://google.com",
    githubUrl: "https://github.com",
  },
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen w-full max-w-full overflow-hidden px-5 pb-24 pt-36 sm:px-10">
      <div className="grain" />
      <section className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow text-ink/60">Portfolio / Selected Work</p>
          <h1 className="display mt-4 text-4xl font-black tracking-tight sm:text-6xl text-ink">
            Featured Projects
          </h1>
        </Reveal>

        <div className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <Reveal delay={index * 0.05} key={project.id}>
              <article className="relative border-b line pb-12">
                {/* Header with Title and Links at top right */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="eyebrow text-ink/50">{project.id}</span>
                    <h2 className="display text-2xl font-bold sm:text-3xl text-ink mt-1">
                      {project.title}
                    </h2>
                  </div>

                  {/* Top right links */}
                  <div className="flex items-center gap-3 font-sans">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border border-ink/30 px-3 py-1.5 text-xs font-medium text-ink/80 hover:text-ink hover:border-ink transition-colors rounded-none bg-cloud"
                    >
                      GitHub 
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border border-ink/30 px-3 py-1.5 text-xs font-medium text-ink/80 hover:text-ink hover:border-ink transition-colors rounded-none bg-cloud"
                    >
                      Live  
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 max-w-3xl text-base font-light leading-relaxed text-ink/80 sm:text-lg sm:leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies used in very small card-like form with square pointed edges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border bg-ink/[0.04] px-2.5 py-1 text-xs font-sans font-light text-ink/120 rounded-none shadow-none tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

