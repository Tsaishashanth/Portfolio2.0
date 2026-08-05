export default function TechStack() {
  const technologies = [
    "⚛️ React.js",
    "▲ Next.js",
    "◇ Express.js",
    "🔥 Golang",
    "🟠 Hono",
    "🟢 Node.js",
    "☁️ AWS",
    "JS JavaScript",
    "TS TypeScript",
    "▲ Prisma",
    "🍃 MongoDB",
    "🐘 PostgreSQL",
    "🐳 Docker",
    "〰 Tailwind CSS",
    "🔴 Redis",
  ];

  return (
    <section className="mt-10 px-8">

      <div className="flex flex-wrap gap-3">

        {technologies.map((tech) => (
          <div
            key={tech}
            className="
              flex items-center gap-2
              rounded-lg
              border border-dashed border-zinc-700
              bg-zinc-700/40
              px-4 py-2
              text-sm
              font-semibold
              text-zinc-100
              backdrop-blur-sm
              shadow-sm
              transition
              hover:border-zinc-500
              hover:bg-zinc-800
            "
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}