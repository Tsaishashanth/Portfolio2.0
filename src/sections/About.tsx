import { CalendarDays, FileText, Link, Mail, Search, Sparkles } from "lucide-react";

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

export default function About() {
  return (
    <section id="home" className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-slate-800 bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <div className="relative h-64 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.98))]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.12),transparent_30%)]" />
            <div className="absolute inset-x-0 top-4 flex items-center justify-between px-6 sm:px-8">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400">20:34:04</div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800">
                  <span className="text-base">⌘</span>
                  K
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800">
                  Toggle theme
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 pb-10 pt-16 sm:px-8 sm:pb-14 lg:px-10 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
              <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-8">
                <div className="flex items-center gap-5">
                  <div className="h-20 w-20 rounded-3xl border border-slate-700 bg-slate-800 p-1">
                    <div className="h-full w-full overflow-hidden rounded-3xl bg-slate-950" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Software Engineer</p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-5xl">Tarigopula Sai Shashanth</h1>
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      1.4K
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-slate-300">
                  <p className="text-xl text-slate-100">Engineer / Builder. I write code that actually ships.</p>
                  <ul className="space-y-3 text-sm leading-7 text-slate-400">
                    <li>Designing systems where information stays private and outcomes stay verifiable.</li>
                    <li>
                      Currently building <span className="font-semibold text-slate-100">Cyphers</span> at the frontier of privacy and prediction.
                    </li>
                    <li>
                      Alongside <span className="font-semibold text-slate-100">Autopsy</span>.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://cal.com/narsi" className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                    <CalendarDays size={18} />
                    Book an intro call
                  </a>
                  <a href="mailto:hello@shashanth.dev" className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
                    <Mail size={18} />
                    Send an email
                  </a>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Here are my socials and resume</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
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
                <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Tech Stack</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded-3xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-200 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Quick stats</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[28px] bg-slate-950 p-4 text-center shadow-sm border border-slate-800">
                      <p className="text-2xl font-semibold text-slate-100">1.4K</p>
                      <p className="mt-1 text-sm text-slate-500">Profile views</p>
                    </div>
                    <div className="rounded-[28px] bg-slate-950 p-4 text-center shadow-sm border border-slate-800">
                      <p className="text-2xl font-semibold text-slate-100">12</p>
                      <p className="mt-1 text-sm text-slate-500">Featured projects</p>
                    </div>
                    <div className="rounded-[28px] bg-slate-950 p-4 text-center shadow-sm border border-slate-800">
                      <p className="text-2xl font-semibold text-slate-100">3</p>
                      <p className="mt-1 text-sm text-slate-500">Active sections</p>
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
