export default function ProfileSection() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Golang",
    "Rust",
    "Next.js",
    "React.js",
  ];

  return (
    <section className="px-8 pt-8">

      <div className="flex items-center gap-6">

        <div className="h-32 w-32 overflow-hidden rounded-xl bg-zinc-800">
          <img
            src="/profile.png"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>


        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold text-white">
            Tarigopula Sai Shashanth
            <span className="text-blue-500">✓</span>
          </h1>

          <p className="mt-2 text-xl text-zinc-400">
            Software Engineer
          </p>

          <p className="mt-3 text-lg text-zinc-300">
            Developer shipping at speed
          </p>
        </div>

      </div>


      <div className="mt-8 flex gap-4">

        <button className="rounded-lg bg-blue-600 px-8 py-3 text-white">
          Resume
        </button>

        <button className="rounded-lg border border-zinc-700 px-8 py-3 text-white">
          Send email
        </button>

      </div>


      {/* Skills */}
      <div className="mt-10 grid grid-cols-3 gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-center text-white"
          >
            {skill}
          </div>
        ))}

      </div>


    </section>
  );
}