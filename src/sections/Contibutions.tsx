type ThemeMode = "dark" | "light";

interface ContributionsProps {
  theme: ThemeMode;
}

const graphCells = [
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-700",
  "bg-slate-800",
  "bg-slate-900",
];

export default function Contributions({ theme }: ContributionsProps) {
  const isDark = theme === "dark";
  const panelClasses = isDark
    ? "border-white/10 bg-[#0b1220]"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const mutedText = isDark ? "text-slate-400" : "text-slate-600";
  const strongText = isDark ? "text-slate-100" : "text-slate-900";

  return (
    <section className={isDark ? "bg-[#030712] pb-8" : "bg-slate-100 pb-8"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`rounded-[28px] border p-6 ${panelClasses}`}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>GitHub Contribution Graph</p>
              <h2 className={`mt-2 text-2xl font-semibold ${strongText}`}>Consistency builds credibility.</h2>
            </div>
            <span className={`rounded-full px-4 py-2 text-sm ${isDark ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
              Last 12 months
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1 sm:grid-cols-14 lg:grid-cols-14">
            {Array.from({ length: 70 }, (_, index) => (
              <div
                key={index}
                className={`h-3 rounded-[2px] ${graphCells[index % graphCells.length]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
