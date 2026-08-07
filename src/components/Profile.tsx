import { bricolage } from "@/app/layout";

export default function ProfileSection() {
  return (
    <section className="px-8 pt-8">

      {/* Top Profile */}
      <div className="flex items-start gap-6">

        <div className="h-32 w-32 overflow-hidden rounded-2xl border border-zinc-700">
          <img
            src="/minecraftportfolio2.png"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>

        <div>

          {/* Name */}
          <h1 className={`${bricolage.className} flex items-center gap-2 text-3xl font-semibold text-white md:text-4xl`}>
            Tarigopula Sai Shashanth

            <span className="inline-block text-[#1D9BF0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-11.4 4.3 6.7-6.7-1.4-1.4-5.3 5.3-2.3-2.3-1.4 1.4 3.7 3.7z" />
              </svg>
            </span>
          </h1>

          {/* Role */}
          <p className="mt-2 text-lg text-zinc-400">
            Software Engineer.
          </p>

        
          <p className="mt-3 text-sm text-zinc-500">
            ◉ 1.7K
          </p>

        </div>

      </div>


      {/* Bio */}
      <div className="mt-7 text-sm text-zinc-300">

        <p className="text-base text-white">
          Developer shipping at ⚡speed
        </p>

        <ul className="mt-3 space-y-2 text-zinc-400">

          <li>
            • Building scalable web applications and developer tools.
          </li>

          <li className="flex flex-wrap items-center gap-2">
            • Currently learning

            <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-200">

              <span className="text-base">
                🟣
              </span>

              Solana

            </span>

          </li>

          <li>
            • Exploring AI, systems programming and open source.
          </li>

        </ul>


        {/* Tech Stack */}
        <div className="mt-5">

          <p className="mb-2 text-sm text-zinc-300">
            My main tech stack is
          </p>

          <div className="flex flex-wrap gap-2">

            {[
              "Next.js",
              "Express.js",
              "PostgreSQL",
              "MongoDB",
              "Prisma",
              "Mongoose",
              "Socket.io",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>


        {/* Animation / Deployment */}
        <div className="mt-4 flex flex-wrap items-center gap-2">

          <span>
            I use
          </span>

          {[
            "Framer Motion",
            "GSAP",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200"
            >
              {tech}
            </span>
          ))}

          <span>
            for animations, and for deployment I use
          </span>

          {[
            "Vercel",
            "AWS",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200"
            >
              {tech}
            </span>
          ))}

        </div>


        {/* Testing / Learning */}
        <div className="mt-4 flex flex-wrap items-center gap-2">

          <span>
            I test with
          </span>

          {[
            "Cypress",
            "Storybook",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200"
            >
              {tech}
            </span>
          ))}

          <span>
            and build apps with
          </span>

          <span className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200">
            Expo
          </span>

          <span>
            and I am currently learning
          </span>

          {[
            "Go",
            "Rust",
            "Three.js",
            "AI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>


      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <button className="rounded-xl bg-white px-5 py-2.5 text-sm text-black">
          Book an intro call
        </button>

        <button className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm text-white">
          Send an email
        </button>

      </div>


      {/* Socials */}
      <div className="mt-6">

        <p className="text-base text-white">
          Here are my{" "}
          <span className="font-semibold">
            socials
          </span>{" "}
          and{" "}
          <span className="font-semibold">
            resume
          </span>
        </p>

        <div className="mt-3 flex flex-wrap gap-2">

          {[
            "GitHub",
            "LinkedIn",
            "Twitter",
            "Resume",
            "More",
          ].map((item) => (
            <button
              key={item}
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}