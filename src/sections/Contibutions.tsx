import { Mail, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Pulseboard",
    description: "A real-time analytics dashboard that turns fragmented metrics into a single decision surface.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "StudioFlow",
    description: "A lightweight workflow tool for creative teams that manages approval steps, feedback, and launch checklists.",
    stack: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Northstar AI",
    description: "An AI-assisted workspace that summarizes decisions, actions, and project context in one place.",
    stack: ["Next.js", "OpenAI", "Vercel"],
  },
];

export default function Contributions() {
  return (
    <section id="projects" className="border-t border-zinc-800 bg-[#060606] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Selected products and experiments</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-6">
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles size={16} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">Featured</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-base leading-8 text-zinc-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-[28px] border border-zinc-800 bg-zinc-950/70 p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Let&apos;s connect</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Interested in building something together?</h2>
              <p className="mt-3 max-w-2xl text-lg text-zinc-400">
                I&apos;m always open to conversations about product design, full-stack builds, and ambitious ideas.
              </p>
            </div>
            <a href="mailto:hello@shashanth.dev" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-zinc-900 transition hover:-translate-y-1">
              Reach out <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}