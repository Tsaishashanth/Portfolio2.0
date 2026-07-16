import {
  Eye,
  CalendarDays,
  Mail,
  // Github,
  // Linkedin,
  FileText,
  Menu,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">

      {/* Top Right Buttons */}
      <div className="mb-10 flex justify-end gap-3">
        <button className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 shadow-sm">
          ⌘ K
        </button>

        <button className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 shadow-sm">
          ☀
        </button>
      </div>

      {/* Profile */}
      <div className="flex items-start gap-6">
        <div className="rounded-[24px] border border-zinc-200 bg-white p-1 shadow-sm">
          <img
            src="/profile.jpg"
            alt="profile"
            className="h-40 w-40 rounded-[20px] object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-bold tracking-tight">
              Tarigopula Sai Shashanth
            </h1>

            <span className="text-3xl text-blue-500">✓</span>
          </div>

          <p className="mt-2 text-3xl text-zinc-500">
            Software Engineer
          </p>

          <div className="mt-4 flex items-center gap-2 text-zinc-500">
            <Eye size={18} />
            <span>1.4K</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mt-14">
        <h2 className="text-[42px] font-medium leading-tight">
          Engineer / Builder. I write code that actually ships.
        </h2>

        <ul className="mt-8 space-y-5 text-2xl text-zinc-500">
          <li>
            • Designing systems where information stays private
            and outcomes stay verifiable.
          </li>

          <li>
            • Currently building products using React,
            Next.js and TypeScript.
          </li>

          <li>
            • Building real-world applications and improving
            every day.
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap gap-4">
        <button className="flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-white shadow-md">
          <CalendarDays size={20} />
          Book an intro call
        </button>

        <button className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-6 py-4 text-zinc-700 shadow-sm">
          <Mail size={20} />
          Send an email
        </button>
      </div>

      {/* Socials */}
      <div className="mt-14">
        <p className="text-2xl">
          Here are my <span className="font-semibold">socials</span> and{" "}
          <span className="font-semibold">resume</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {[
            // { icon: <Github size={18} />, text: "GitHub" },
            // { icon: <Linkedin size={18} />, text: "LinkedIn" },
            { icon: "𝕏", text: "Twitter" },
            { icon: <FileText size={18} />, text: "Resume" },
            { icon: <Menu size={18} />, text: "More" },
          ].map((item) => (
            <button
              key={item.text}
              className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1"
            >
              {item.icon}
              {item.text}
            </button>
          ))}

        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <h3 className="text-sm font-bold tracking-[0.25em]">
          TECH STACK
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">

          {[
            "⚛️",
            "▲",
            "TS",
            "🟢",
            "🍃",
            "☕",
            "⚡",
            "🐳",
            "☁️",
            "🔧",
          ].map((item, index) => (
            <div
              key={index}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg shadow-sm ring-1 ring-zinc-200"
            >
              {item}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}