import { Mail } from "lucide-react";

type ThemeMode = "dark" | "light";

interface ContributionsProps {
  theme: ThemeMode;
}

const projects = [
  {
    title: "Autopsy",
    subtitle: "Web3",
    description: "Solana transaction forensics and on-chain risk scoring engine.",
    status: "Live",
  },
  {
    title: "Semora",
    subtitle: "Coming Soon",
    description: "Semantic diff tool for Anchor/Solana programs.",
    status: "Soon",
  },
  {
    title: "Athena",
    subtitle: "Coming Soon",
    description: "In-app Solana wallet and SPL token minter with no extension.",
    status: "Soon",
  },
  {
    title: "Glyphcast",
    subtitle: "Featured",
    description: "Browser-based ASCII art studio for images, GIFs, and video.",
    status: "Live",
  },
];

const posts = [
  {
    title: "How Solana Validators Work",
    date: "Jul 14, 2026",
    excerpt: "A conceptual introduction to what a validator does and how it fits into Solana's proof-of-stake protocol.",
  },
  {
    title: "Building a Frontend for a Solana Program on Devnet",
    date: "Jun 10, 2026",
    excerpt: "Connecting a Next.js frontend to a deployed Solana program on devnet: wallets, RPC, and on-chain instructions.",
  },
  {
    title: "Eraser & Selection Mechanics in CoSketch",
    date: "May 01, 2026",
    excerpt: "How CoSketch handles erasing and selecting shapes in its canvas engine and collaboration model.",
  },
];

export default function Contributions({ theme }: ContributionsProps) {
  const isDark = theme === "dark";
  const panelClasses = isDark
    ? "border-slate-800 bg-slate-900/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const softPanelClasses = isDark
    ? "border-slate-800 bg-slate-950"
    : "border-slate-200 bg-slate-50";
  const mutedText = isDark ? "text-slate-500" : "text-slate-600";
  const strongText = isDark ? "text-slate-100" : "text-slate-900";
  const bodyText = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section className={isDark ? "bg-slate-950 py-20 sm:py-24" : "bg-slate-100 py-20 sm:py-24"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
        <section id="projects" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>Projects</p>
              <h2 className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${strongText}`}>Projects</h2>
            </div>
            <a href="#" className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${isDark ? "border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}>
              View all
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className={`overflow-hidden rounded-[32px] border shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${panelClasses}`}>
                <div className={`h-48 p-6 ${softPanelClasses}`}>
                  <p className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] ${isDark ? "bg-slate-800 text-slate-400" : "bg-slate-200 text-slate-600"}`}>{project.subtitle}</p>
                  <h3 className={`mt-5 text-xl font-semibold ${strongText}`}>{project.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${bodyText}`}>{project.description}</p>
                </div>
                <div className={`flex items-center justify-between border-t px-6 py-4 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                  <span className={`text-sm font-semibold ${strongText}`}>{project.status}</span>
                  <span className={`text-sm ${mutedText}`}>View project</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blogs" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>Blogs</p>
              <h2 className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${strongText}`}>Blogs</h2>
            </div>
            <a href="#" className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${isDark ? "border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}>
              View all
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className={`rounded-[28px] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${panelClasses}`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className={`text-lg font-semibold ${strongText}`}>{post.title}</h3>
                  <span className={`text-sm ${mutedText}`}>{post.date}</span>
                </div>
                <p className={`mt-4 text-sm leading-7 ${bodyText}`}>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="space-y-8">
          <div className={`rounded-[32px] border p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${panelClasses}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>GitHub</p>
                <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${strongText}`}>1,350 contributions</h2>
              </div>
              <div className={`rounded-full px-4 py-2 text-sm font-semibold ${isDark ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-700"}`}>Last 12 months</div>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-14">
              {Array.from({ length: 70 }).map((_, index) => (
                <span key={index} className={`h-3 rounded-full ${isDark ? "bg-slate-800" : "bg-slate-200"}`} />
              ))}
            </div>
          </div>

          <div className={`rounded-[32px] border p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${panelClasses}`}>
            <p className={`text-sm uppercase tracking-[0.35em] ${mutedText}`}>Quote</p>
            <p className={`mt-6 text-xl font-semibold ${strongText}`}>“I’ve copied over a thousand jutsu. Not to steal them, but to understand them, and surpass those who created them.”</p>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.35em] ${mutedText}`}>KAKASHI HATAKE</p>
          </div>
        </section>

        <footer className={`flex flex-col gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between ${isDark ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-600"}`}>
          <p>Built by Shashanth · All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com" className={`transition ${isDark ? "hover:text-slate-100" : "hover:text-slate-900"}`}>GitHub</a>
            <a href="https://linkedin.com" className={`transition ${isDark ? "hover:text-slate-100" : "hover:text-slate-900"}`}>LinkedIn</a>
            <a href="https://x.com" className={`transition ${isDark ? "hover:text-slate-100" : "hover:text-slate-900"}`}>Twitter</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
