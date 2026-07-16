import { CalendarDays, Mail, Menu, Sparkles } from "lucide-react";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
  { label: "Resume", href: "#" },
];

export default function About() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-6 text-zinc-100 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_24%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col">
        <div className="mb-8 flex justify-end gap-3">
          <button className="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300">
            ⌘ K
          </button>
          <button className="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300">
            Toggle theme
          </button>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/70 p-2 shadow-2xl shadow-black/30">
            <img
              src="/profile.png"
              alt="Tarigopula Sai Shashanth"
              className="h-36 w-36 rounded-[22px] object-cover sm:h-44 sm:w-44"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Tarigopula Sai Shashanth
              </h1>
              <span className="text-2xl text-cyan-400">✓</span>
            </div>

            <p className="mt-2 text-2xl text-zinc-400 sm:text-3xl">Software Engineer</p>

            <div className="mt-6 flex items-center gap-2 text-zinc-400">
              <Sparkles size={16} />
              <span>Building polished products with React, Next.js and TypeScript.</span>
            </div>

            <h2 className="mt-8 text-3xl font-medium leading-tight text-zinc-100 sm:text-[2.6rem]">
              Engineer / Builder. I write code that actually ships.
            </h2>

            <ul className="mt-7 space-y-4 text-lg leading-8 text-zinc-400 sm:text-xl">
              <li>Designing systems where information stays private and outcomes stay verifiable.</li>
              <li>Currently building products using React, Next.js and TypeScript.</li>
              <li>Shipping real-world applications and refining every detail.</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@shashanth.dev"
                className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-zinc-900 transition hover:-translate-y-1"
              >
                <CalendarDays size={18} />
                Book an intro call
              </a>
              <a
                href="mailto:hello@shashanth.dev"
                className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-5 py-3 font-medium text-zinc-200 transition hover:-translate-y-1"
              >
                <Mail size={18} />
                Send an email
              </a>
            </div>

            <div className="mt-10">
              <p className="text-xl text-zinc-200">
                Here are my <span className="font-semibold text-white">socials</span> and <span className="font-semibold text-white">resume</span>
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300 transition hover:-translate-y-1"
                  >
                    {item.label === "Resume" ? <Menu size={16} /> : null}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                TECH STACK
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/70 text-sm font-medium text-zinc-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}