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
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#171717] p-4 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">

        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-1 text-sm font-medium text-white backdrop-blur-md">
          {category}
        </span>

      </div>

      {/* Content */}
      <div className="mt-6">

        <div className="flex items-center justify-between">

          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>

          {live && (
            <div className="flex items-center gap-2">

              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#4ade80]" />

              <span className="text-lg font-medium text-emerald-400">
                Live
              </span>

            </div>
          )}

        </div>


        <p className="mt-4 line-clamp-2 text-lg text-zinc-400">
          {description}
        </p>


        <div className="mt-6 flex items-center gap-5">

          <a
            href={demo}
            target="_blank"
            className="font-medium text-white transition group-hover:gap-3"
          >
            View Project →
          </a>

          <a
            href={github}
            target="_blank"
            className="text-zinc-500 hover:text-white"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}