import { Mail } from "lucide-react";

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

export default function Contributions() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
        <section id="projects" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Projects</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Projects</h2>
            </div>
            <a href="#" className="rounded-full border border-slate-800 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
              View all
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="h-48 bg-slate-950 p-6">
                  <p className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{project.subtitle}</p>
                  <h3 className="mt-5 text-xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">
                  <span className="text-sm font-semibold text-slate-100">{project.status}</span>
                  <span className="text-sm text-slate-500">View project</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blogs" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Blogs</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Blogs</h2>
            </div>
            <a href="#" className="rounded-full border border-slate-800 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
              View all
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-100">{post.title}</h3>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="space-y-8">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">GitHub</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-100 sm:text-4xl">1,350 contributions</h2>
              </div>
              <div className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200">Last 12 months</div>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-14">
              {Array.from({ length: 70 }).map((_, index) => (
                <span key={index} className="h-3 rounded-full bg-slate-800" />
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quote</p>
            <p className="mt-6 text-xl font-semibold text-slate-100">“I’ve copied over a thousand jutsu. Not to steal them, but to understand them, and surpass those who created them.”</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">KAKASHI HATAKE</p>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Built by Shashanth · All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com" className="transition hover:text-slate-100">GitHub</a>
            <a href="https://linkedin.com" className="transition hover:text-slate-100">LinkedIn</a>
            <a href="https://x.com" className="transition hover:text-slate-100">Twitter</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
