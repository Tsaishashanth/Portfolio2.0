export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="h-64 w-64 overflow-hidden rounded-3xl border border-zinc-800 md:h-80 md:w-80">
            <img
              src="/profile.png"
              alt="Tarigopula Sai Shashanth"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-3 text-zinc-400">
            Hello, I am 
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Tarigopula Sai Shashanth
          </h1>

          <h2 className="mt-4 text-xl font-medium text-zinc-300 md:text-2xl">
            Software Engineer
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Self-taught programmer passionate about building modern web
            applications and solving real-world problems through code.
          </p>
        </div>

      </div>
    </section>
  );
}