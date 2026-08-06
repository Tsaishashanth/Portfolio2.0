type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  github: string;
  demo: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  category,
  github,
  demo,
  tech,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category + Live */}
        <div className="flex items-center justify-between">

          <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
            {category}
          </span>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400">
              Live
            </span>
          </div>

        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white transition hover:translate-x-1"
          >
            View Project →
          </a>

        </div>

      </div>

    </div>
  );
}