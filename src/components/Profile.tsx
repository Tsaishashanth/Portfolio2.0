export default function ProfileSection() {
  return (
    <section className="px-8 pt-8">

      {/* Top Profile */}
      <div className="flex items-start gap-6">

        <div className="h-36 w-36 overflow-hidden rounded-2xl border border-zinc-700">
          <img
            src="/profile.png"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>


        <div>

          <h1 className="flex items-center gap-2 text-4xl font-bold text-white">
            Tarigopula Sai Shashanth

            <span className="text-blue-500">
              ✓
            </span>
          </h1>


          <p className="mt-2 text-2xl text-zinc-400">
            Software Engineer
          </p>


          <p className="mt-4 text-zinc-400">
            ◉ 1.7K
          </p>


        </div>

      </div>


      {/* Bio */}
      <div className="mt-10 text-lg text-zinc-300">

        <p className="text-xl text-white">
          Engineer / Builder. I write code that actually ships.
        </p>


        <ul className="mt-5 space-y-3 text-zinc-400">

          <li>
            • Building scalable web applications and developer tools.
          </li>

          <li>
            • Currently working on open source projects.
          </li>

          <li>
            • Exploring systems programming and AI.
          </li>

        </ul>

      </div>


      {/* Buttons */}
      <div className="mt-8 flex gap-3">

        <button className="rounded-xl bg-white px-6 py-3 text-black">
          Book an intro call
        </button>


        <button className="rounded-xl border border-zinc-700 px-6 py-3 text-white">
          Send an email
        </button>

      </div>


      {/* Socials */}
      <div className="mt-8">

        <p className="text-lg text-white">
          Here are my <span className="font-semibold">socials</span> and <span className="font-semibold">resume</span>
        </p>


        <div className="mt-4 flex flex-wrap gap-3">

          {[
            "GitHub",
            "LinkedIn",
            "Twitter",
            "Resume",
            "More",
          ].map((item) => (
            <button
              key={item}
              className="rounded-xl bg-zinc-900 px-5 py-3 text-zinc-300 border border-zinc-800"
            >
              {item}
            </button>
          ))}

        </div>

      </div>


    </section>
  );
}