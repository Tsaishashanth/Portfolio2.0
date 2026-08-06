type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  live?: boolean;
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  category,
  live = true,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-[#181818] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">

      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl">

        <img
          src={image}
          alt={title}
          className="h-52 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {category}
        </span>

      </div>

      {/* Content */}
      <div className="mt-4">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          {live && (
            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs text-emerald-400">
                Live
              </span>

            </div>
          )}

        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <a
            href={demo}
            target="_blank"
            className="text-sm font-medium text-white transition group-hover:translate-x-1"
          >
            View Project →
          </a>

          <a
            href={github}
            target="_blank"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}