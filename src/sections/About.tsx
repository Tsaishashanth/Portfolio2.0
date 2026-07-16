import {
  Eye,
  Calendar,
  Mail,
//   Github,
//   Linkedin,
  FileText,
  Menu,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">

        <img
          src="/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-3xl object-cover border"
        />

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-bold">
              Tarigopula Sai Shashanth
            </h1>

            <span className="text-blue-500 text-3xl">✓</span>
          </div>

          <p className="text-2xl text-zinc-500 mt-2">
            Software Engineer
          </p>

          <div className="flex items-center gap-2 mt-4 text-zinc-500">
            <Eye size={18} />
            <span>500+</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mt-12">
        <h2 className="text-4xl leading-relaxed">
          Engineer / Builder. I build products that solve
          real-world problems.
        </h2>

        <ul className="mt-8 space-y-4 text-xl text-zinc-600">
          <li>
            • Building modern web applications with React,
            Next.js and TypeScript.
          </li>

          <li>
            • Currently focused on full-stack development
            and open-source projects.
          </li>

          <li>
            • Passionate about learning, shipping and
            improving every day.
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">
        <button className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-2xl">
          <Calendar size={20} />
          Book an Intro Call
        </button>

        <button className="flex items-center gap-2 border px-6 py-4 rounded-2xl">
          <Mail size={20} />
          Send an Email
        </button>
      </div>

      {/* Socials */}
      <div className="mt-12">
        <p className="text-xl">
          Here are my <strong>socials</strong> and{" "}
          <strong>resume</strong>
        </p>

        <div className="flex flex-wrap gap-4 mt-6">

          <button className="flex items-center gap-2 border px-5 py-3 rounded-xl">
            {/* <Github size={18} /> */}
            GitHub
          </button>

          <button className="flex items-center gap-2 border px-5 py-3 rounded-xl">
            {/* <Linkedin size={18} /> */}
            LinkedIn
          </button>

          <button className="flex items-center gap-2 border px-5 py-3 rounded-xl">
            X
            Twitter
          </button>

          <button className="flex items-center gap-2 border px-5 py-3 rounded-xl">
            <FileText size={18} />
            Resume
          </button>

          <button className="flex items-center gap-2 border px-5 py-3 rounded-xl">
            <Menu size={18} />
            More
          </button>

        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <h3 className="text-sm font-bold tracking-[0.2em]">
          TECH STACK
        </h3>

        <div className="flex flex-wrap gap-4 mt-6">

          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind",
            "Java",
            "Spring Boot",
            "Git",
          ].map((tech) => (
            <div
              key={tech}
              className="px-5 py-3 rounded-xl border bg-zinc-100 dark:bg-zinc-900"
            >
              {tech}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}