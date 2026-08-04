type ThemeMode = "dark" | "light";

interface ProjectsProps {
  theme: ThemeMode;
}

const projects = [
  {
    title: "Project Name",
    summary: "Short description of the project",
    tag: "Web2",
  },
  {
    title: "Project Name",
    summary: "Short description of the project",
    tag: "Web3",
  },
  {
    title: "Project Name",
    summary: "Short description of the project",
    tag: "AI",
  },
];

export default function Projects({ theme }: ProjectsProps) {
  const isDark = theme === "dark";
  const mutedText = isDark ? "text-slate-400" : "text-slate-600";
  const strongText = isDark ? "text-slate-100" : "text-slate-900";
  const chipClasses = isDark
    ? "border-white/10 bg-[#111827] text-slate-100"
    : "border-slate-200 bg-slate-50 text-slate-700";

  return (
    <section id="projects" className={isDark ? "bg-[#030712] py-6 sm:py-8" : "bg-slate-100 py-6 sm:py-8"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            { label: "Projects", active: true },
            { label: "Open Source", active: false },
            { label: "Blogs", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                item.active
                  ? isDark
                    ? "bg-white/10 text-white"
                    : "bg-slate-900 text-white"
                  : `${chipClasses} hover:bg-slate-800 hover:text-white`
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {[
            { label: "Web2", active: true },
            { label: "Web3", active: false },
            { label: "AI", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`rounded-full px-4 py-2 text-sm ${
                item.active
                  ? "bg-blue-600 text-white"
                  : `${chipClasses} hover:bg-slate-800 hover:text-white`
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`rounded-[28px] border p-4 ${isDark ? "border-white/10 bg-[#0b1220]" : "border-slate-200 bg-white"}`}
            >
              <div className={`rounded-[20px] border p-4 ${chipClasses}`}>
                <p className={`text-sm font-semibold ${mutedText}`}>{project.tag}</p>
                <h3 className={`mt-4 text-2xl font-semibold ${strongText}`}>{project.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${mutedText}`}>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
