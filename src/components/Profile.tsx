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

<span className="inline-block text-[#1D9BF0]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-11.4 4.3 6.7-6.7-1.4-1.4-5.3 5.3-2.3-2.3-1.4 1.4 3.7 3.7z" />
  </svg>
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