import { CalendarDays, FileText, Link, Mail, Search, Sparkles } from "lucide-react";

type ThemeMode = "dark" | "light";

interface AboutProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Solidity",
  "Ethereum",
  "Node.js",
  "Supabase",
  "Terraform",
  "Docker",
  "Rust",
  "AWS",
  "PostgreSQL",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/narsixyz", icon: Sparkles },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/narsibhati", icon: Link },
  { label: "Twitter", href: "https://x.com/intent/follow?screen_name=narsixyz", icon: Sparkles },
  { label: "Resume", href: "/resume", icon: FileText },
  { label: "More", href: "#", icon: Search },
];

const heroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
const avatarImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80";

export default function About({ theme, onToggleTheme }: AboutProps) {
  const isDark = theme === "dark";
  const shellClasses = isDark
    ? "border-white/10 bg-[#050914] shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const panelClasses = isDark
    ? "border-white/10 bg-[#0b1220]/95"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const mutedText = isDark ? "text-slate-400" : "text-slate-600";
  const strongText = isDark ? "text-slate-100" : "text-slate-900";
  const buttonClasses = isDark
    ? "border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800"
    : "border-slate-300 bg-white/80 text-slate-700 hover:bg-slate-100";
  const pillClasses = isDark
    ? "border-white/10 bg-[#101827] text-slate-100 hover:bg-slate-800"
    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100";
  const chipClasses = isDark
    ? "border-white/10 bg-[#111827] text-slate-100"
    : "border-slate-200 bg-slate-50 text-slate-700";

  return (
    <section id="home" className={isDark ? "bg-[#030712] py-8 sm:py-12" : "bg-slate-100 py-8 sm:py-12"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`overflow-hidden rounded-[32px] border ${shellClasses}`}>
          <div className="relative h-72 overflow-hidden">
            <img src={heroImage} alt="Landscape hero" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-[#040814]/80" />
            <div className="absolute inset-x-0 top-4 flex items-center justify-between px-5 sm:px-7">
              <div className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                20:34:04
              </div>
              <button
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${buttonClasses}`}
                onClick={onToggleTheme}
              >
                <span className="text-base">{isDark ? "☀" : "☾"}</span>
                {isDark ? "Light mode" : "Dark mode"}
              </button>
            </div>
            <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
              Made with AI
            </div>
          </div>

          <div className="px-5 pb-8 pt-4 sm:px-8 sm:pb-10">
            <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
              <div className="-mt-16 flex flex-col items-start gap-3 lg:-mt-14">
                <img
                  src={avatarImage}
                  alt="Profile"
                  className="h-28 w-28 rounded-[24px] border-4 border-[#050914] object-cover shadow-2xl"
                />
                <div className="flex items-center gap-2">
                  <h1 className={`text-3xl font-semibold tracking-tight ${strongText}`}>Tarigopula Sai Shashanth</h1>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">✓</span>
                </div>
                <p className={`text-lg ${mutedText}`}>Software Engineer</p>
                <p className={`text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  Developer shipping at speed.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/resume"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Resume
                  </a>
                  <a
                    href="mailto:hello@shashanth.dev"
                    className={`rounded-xl border px-5 py-3 text-sm font-semibold transition ${pillClasses}`}
                  >
                    Send email
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className={`rounded-2xl border px-4 py-3 text-center text-sm font-medium ${chipClasses}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition ${pillClasses}`}
                      >
                        <Icon size={16} />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
