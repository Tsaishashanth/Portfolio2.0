const experience = [
  {
    title: "Software Engineer",
    company: "Independent / Freelance",
    period: "2023 — Present",
    description:
      "Designing and shipping web products for startups, SaaS tools, and modern brands with an emphasis on performance and user experience.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Product Builder",
    company: "Open-source & community projects",
    period: "2021 — 2023",
    description:
      "Contributed to UI libraries, developer tooling, and reusable frontend patterns that simplified collaboration across teams.",
    stack: ["Node.js", "PostgreSQL", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="experience" className="border-t border-zinc-800 bg-zinc-950/80 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Experience</h2>

        <div className="mt-8 space-y-5">
          {experience.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-zinc-800 bg-[#060606] p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-zinc-400">{item.company}</p>
                </div>
                <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-400">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}