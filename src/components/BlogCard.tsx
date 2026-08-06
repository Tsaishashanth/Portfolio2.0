type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  category: string;
};

export default function BlogCard({
  title,
  description,
  date,
  readTime,
  link,
  category,
}: BlogCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">

      {/* Category */}
      <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
        {category}
      </span>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {description}
      </p>

      {/* Meta */}
      <div className="mt-6 flex items-center gap-4 text-sm text-zinc-500">

        <span>{date}</span>

        <span>•</span>

        <span>{readTime} read</span>

      </div>

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-xl border border-zinc-700 px-5 py-2 text-sm text-white transition hover:border-zinc-500 hover:bg-zinc-800"
      >
        Read Article →
      </a>

    </div>
  );
}