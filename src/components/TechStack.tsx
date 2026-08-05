export default function TechStack() {
  const technologies = [
    "React.js",
    "Next.js",
    "Express.js",
    "Golang",
    "Hono",
    "Node.js",
    "AWS",
    "JavaScript",
    "TypeScript",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Tailwind CSS",
    "Redis",
  ];

  return (
    <section className="mt-10 px-8">

      <div className="flex flex-wrap gap-3">

        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}