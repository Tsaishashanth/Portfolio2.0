import CoverImage from "@/src/components/CoverImage";
import Profile from "@/src/components/Profile";
//import NavigationTabs from "@/src/components/NavigationTabs";
import TechStack from "@/src/components/TechStack";
import ProjectsSection from "@/src/components/secondsection";
import GithubContributions from "@/src/components/GithubContributions";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] flex justify-center py-10">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute top-40 right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>


      {/* Portfolio Container */}
      <div className="relative z-10 w-full max-w-5xl px-4">

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#111111]/80 backdrop-blur-xl">

          {/* Sections will come here */}
          <CoverImage />

          <Profile />

          <TechStack />


         

        </div>

        <ProjectsSection />

        <GithubContributions />

        <Footer />

      </div>

    </main>
  );
}