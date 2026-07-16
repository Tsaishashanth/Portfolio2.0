import About from "@/src/sections/About";
import Projects from "@/src/sections/Projects";
import Contributions from "@/src/sections/Contibutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <About />
      <Projects />
      <Contributions />
    </main>
  );
}