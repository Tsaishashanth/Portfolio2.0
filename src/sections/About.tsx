import { CalendarDays, FileText, Link, Mail, Search, Sparkles } from "lucide-react";

type ThemeMode = "dark" | "light";

interface AboutProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const skills = [
  "Solana",
  "Anchor",
  "AWS",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Terraform",
  "Next.js",
  "TypeScript",
  "Rust",
  "Bun",
  "PostgreSQL",
  "Redis",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/narsixyz", icon: Sparkles },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/narsibhati", icon: Link },
  { label: "Twitter", href: "https://x.com/intent/follow?screen_name=narsixyz", icon: Sparkles },
  { label: "Resume", href: "/resume", icon: FileText },
  { label: "More", href: "#", icon: Search },
];

export default function About({ theme, onToggleTheme }: AboutProps) {
  const isDark = theme === "dark";
  const shellClasses = isDark
    ? "border-slate-800 bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const panelClasses = isDark
    ? "border-slate-800 bg-slate-900/95 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const softPanelClasses = isDark
    ? "border-slate-800 bg-slate-950"
    : "border-slate-200 bg-slate-50";
  const mutedText = isDark ? "text-slate-400" : "text-slate-600";
  const strongText = isDark ? "text-slate-100" : "text-slate-900";
  const bodyText = isDark ? "text-slate-300" : "text-slate-700";
  const buttonClasses = isDark
    ? "border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800"
    : "border-slate-300 bg-white/80 text-slate-700 hover:bg-slate-100";
  const pillClasses = isDark
    ? "border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800"
    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100";

  return (
    <section id="home" className={isDark ? "bg-slate-950 py-16 sm:py-20" : "bg-slate-100 py-16 sm:py-20"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`overflow-hidden rounded-[40px] border ${shellClasses}`}>
          <div className={`relative h-64 overflow-hidden ${isDark ? "bg-slate-900" : "bg-slate-100"}`}>
            <div className={isDark ? "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.98))]" : "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.12),_transparent_35%),linear-gradient(180deg,rgba(248,250,252,0.92),rgba(226,232,240,0.98))]"} />
            <div className={isDark ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.12),transparent_30%)]" : "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.2),transparent_30%)]"} />
            <div className="absolute inset-x-0 top-4 flex items-center justify-between px-6 sm:px-8">
              <div className={`text-xs uppercase tracking-[0.35em] ${mutedText}`}>20:34:04</div>
              <div className="flex items-center gap-3">
                <button className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${buttonClasses}`} onClick={onToggleTheme}>
                  <span className="text-base">{isDark ? "☀" : "☾"}</span>
                  {isDark ? "Light mode" : "Dark mode"}
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 pb-10 pt-16 sm:px-8 sm:pb-14 lg:px-10 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
              <div className={`rounded-[32px] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-8 ${panelClasses}`}>
                <div className="flex items-center gap-5">
                  <div className={`h-20 w-20 rounded-3xl border p-1 ${isDark ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-slate-100"}`}>
                    <div className={`h-full w-full overflow-hidden rounded-3xl ${isDark ? "bg-slate-950" : "bg-slate-200"}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>Software Engineer</p>
                    <h1 className={`mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${strongText}`}>Tarigopula Sai Shashanth</h1>
                    <p className={`mt-2 flex items-center gap-2 text-sm ${mutedText}`}>
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      1.4K
                    </p>
                  </div>
                </div>

                <div className={`mt-8 space-y-5 ${bodyText}`}>
                  <p className={`text-xl ${strongText}`}>Engineer / Builder. I write code that actually ships.</p>
                  <ul className={`space-y-3 text-sm leading-7 ${mutedText}`}>
                    <li>Designing systems where information stays private and outcomes stay verifiable.</li>
                    <li>
                      Currently building <span className={`font-semibold ${strongText}`}>Cyphers</span> at the frontier of privacy and prediction.
                    </li>
                    <li>
                      Alongside <span className={`font-semibold ${strongText}`}>Autopsy</span>.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://cal.com/narsi" className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition ${isDark ? "bg-slate-100 text-slate-950 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                    <CalendarDays size={18} />
                    Book an intro call
                  </a>
                  <a href="mailto:hello@shashanth.dev" className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition ${pillClasses}`}>
                    <Mail size={18} />
                    Send an email
                  </a>
                </div>

                <div className="mt-10">
                  <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${mutedText}`}>Here are my socials and resume</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition ${pillClasses}`}
                        >
                          <Icon size={16} />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`rounded-[32px] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${panelClasses}`}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>Tech Stack</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span key={skill} className={`inline-flex items-center rounded-3xl border px-4 py-2 text-sm shadow-sm ${softPanelClasses} ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`rounded-[32px] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${panelClasses}`}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>Quick stats</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className={`rounded-[28px] border p-4 text-center shadow-sm ${softPanelClasses}`}>
                      <p className={`text-2xl font-semibold ${strongText}`}>1.4K</p>
                      <p className={`mt-1 text-sm ${mutedText}`}>Profile views</p>
                    </div>
                    <div className={`rounded-[28px] border p-4 text-center shadow-sm ${softPanelClasses}`}>
                      <p className={`text-2xl font-semibold ${strongText}`}>12</p>
                      <p className={`mt-1 text-sm ${mutedText}`}>Featured projects</p>
                    </div>
                    <div className={`rounded-[28px] border p-4 text-center shadow-sm ${softPanelClasses}`}>
                      <p className={`text-2xl font-semibold ${strongText}`}>3</p>
                      <p className={`mt-1 text-sm ${mutedText}`}>Active sections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
