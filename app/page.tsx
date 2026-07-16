import About from "@/src/sections/About";
import Projects from "@/src/sections/Projects";
import Contributions from "@/src/sections/Contibutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <About />
      <Projects />
      <Contributions />
    </main>
  );
}
