type OpenSourceCardProps = {
  title: string;
  description: string;
  github: string;
  stars: number;
  forks: number;
  language: string;
  category: string;
};

export default function OpenSourceCard({
  title,
  description,
  github,
  stars,
  forks,
  language,
  category,
}: OpenSourceCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">

      {/* Top */}
      <div className="flex items-center justify-between">

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {category}
        </span>

        <span className="text-xs text-zinc-500">
          Public Repository
        </span>

      </div>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      {/* Stats */}
      <div className="mt-6 flex gap-6 text-sm text-zinc-400">

        <span>⭐ {stars}</span>

        <span>🍴 {forks}</span>

        <span>{language}</span>

      </div>

      {/* Button */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-xl border border-zinc-700 px-5 py-2 text-sm text-white transition hover:border-zinc-500"
      >
        View Repository →
      </a>

    </div>
  );
}