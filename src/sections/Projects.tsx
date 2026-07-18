type ThemeMode = "dark" | "light";

interface ProjectsProps {
  theme: ThemeMode;
}

const experience = [
  {
    title: "Infrastructure Engineer",
    company: "Cyphers",
    period: "May 2026 - Present",
    location: "UAE · Remote",
    bullets: [
      "Own infrastructure end-to-end for Cyphers, a privacy-preserving prediction market protocol built on Solana.",
      "Manage RPC and indexing infrastructure supporting encrypted, verifiable prediction markets.",
      "Build and operate CI/CD, containerization, and monitoring stacks for production services.",
    ],
    stack: ["Rust", "Solana", "Anchor", "TypeScript", "Docker", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "AudoraLabs",
    period: "Oct 2025 - Present",
    location: "India · Remote",
    bullets: [
      "Built an all-in-one business workspace for freelancers and teams to manage invoices, contracts, payments, and projects.",
      "Engineered invoicing, contract workflows, and payroll modules across Next.js, TypeScript, and PostgreSQL.",
      "Delivered client web applications end-to-end from design through deployment.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Full-Stack Engineer",
    company: "Freelance",
    period: "Mar 2024 - Sep 2025",
    location: "Rajasthan · Remote",
    bullets: [
      "Delivered 10+ production applications across healthcare, hospitality, and SaaS.",
      "Architected a multi-tenant travel booking platform with booking workflows and revenue-sharing.",
      "Built a restaurant POS and loyalty system with real-time order tracking.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  },
];

export default function Projects({ theme }: ProjectsProps) {
  const isDark = theme === "dark";
  const panelClasses = isDark
    ? "border-slate-800 bg-slate-900/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const softPanelClasses = isDark
    ? "border-slate-800 bg-slate-950"
    : "border-slate-200 bg-slate-50";
  const textMuted = isDark ? "text-slate-500" : "text-slate-600";
  const textStrong = isDark ? "text-slate-100" : "text-slate-900";
  const textBody = isDark ? "text-slate-300" : "text-slate-700";

  return (
    <section id="experience" className={isDark ? "bg-slate-950 py-20 sm:py-24" : "bg-slate-100 py-20 sm:py-24"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${textMuted}`}>Experience</p>
          <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${textStrong}`}>Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={item.title} className={`overflow-hidden rounded-[32px] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-8 ${panelClasses}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className={`text-xl font-semibold tracking-tight ${textStrong}`}>{item.title}</h3>
                  <p className={`mt-1 text-sm ${textMuted}`}>{item.company}</p>
                </div>
                <div className={`space-y-1 rounded-3xl border px-4 py-3 text-sm ${softPanelClasses} ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              <ul className={`mt-6 space-y-3 text-sm leading-7 ${textBody}`}>
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className={`rounded-full border px-3 py-1 text-sm ${softPanelClasses} ${isDark ? "text-slate-400" : "text-slate-600"}`}>
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
