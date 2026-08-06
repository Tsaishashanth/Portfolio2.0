"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [activeCategory, setActiveCategory] = useState("Web2");

  const tabs = ["Projects", "Open Source", "Blogs"];

  const projects = {
    Web2: [
      {
        title: "PathForge",
        description:
          "Track goals and developer progress with a beautiful modern dashboard.",
        image: "/projects/pathforge.png",
        github: "#",
        demo: "#",
        tech: ["Next.js", "TypeScript", "Tailwind"],
      },

      {
        title: "WriteFlow",
        description:
          "AI powered writing assistant for developers and creators.",
        image: "/projects/writeflow.png",
        github: "#",
        demo: "#",
        tech: ["Next.js", "OpenAI", "Tailwind"],
      },

      {
        title: "Portfolio",
        description:
          "My personal developer portfolio built with Next.js.",
        image: "/projects/portfolio.png",
        github: "#",
        demo: "#",
        tech: ["Next.js", "Framer Motion"],
      },

      {
        title: "LumaBoard",
        description:
          "Modern productivity dashboard with goals and notes.",
        image: "/projects/lumaboard.png",
        github: "#",
        demo: "#",
        tech: ["React", "MongoDB", "Express"],
      },
    ],

    Web3: [
      {
        title: "Autopsy",
        description:
          "Blockchain analytics platform for wallet investigation.",
        image: "/projects/autopsy.png",
        github: "#",
        demo: "#",
        tech: ["Solidity", "Next.js", "Ethers"],
      },

      {
        title: "Wallet Tracker",
        description:
          "Track wallet history and transactions.",
        image: "/projects/wallet.png",
        github: "#",
        demo: "#",
        tech: ["Next.js", "Alchemy"],
      },
    ],

    AI: [
      {
        title: "AI Resume",
        description:
          "Generate ATS-friendly resumes using AI.",
        image: "/projects/airesume.png",
        github: "#",
        demo: "#",
        tech: ["OpenAI", "Next.js"],
      },

      {
        title: "Code Assistant",
        description:
          "Developer assistant powered by LLMs.",
        image: "/projects/codeassistant.png",
        github: "#",
        demo: "#",
        tech: ["Python", "FastAPI"],
      },
    ],
  };

  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-zinc-700">

      {/* Top Tabs */}

      <div className="flex justify-center gap-3">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "bg-white text-black"
                : "border border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      {/* Projects */}

      {activeTab === "Projects" && (

        <>

          {/* Categories */}

          <div className="mt-8 flex justify-center gap-3">

            {["Web2", "Web3", "AI"].map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-5 py-2 text-sm transition ${
                  activeCategory === category
                    ? "bg-zinc-100 text-black"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Cards */}

          <div className="mt-8 grid gap-5 lg:grid-cols-2">

            {projects[activeCategory as keyof typeof projects].map(
              (project) => (

                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  github={project.github}
                  demo={project.demo}
                  category={activeCategory}
                  tech={project.tech}
                />

              )
            )}

          </div>

        </>

      )}

      {activeTab === "Open Source" && (

        <div className="mt-10 rounded-2xl border border-dashed border-zinc-700 p-12 text-center text-zinc-500">
          Open Source projects coming soon.
        </div>

      )}

      {activeTab === "Blogs" && (

        <div className="mt-10 rounded-2xl border border-dashed border-zinc-700 p-12 text-center text-zinc-500">
          Blogs coming soon.
        </div>

      )}

    </section>
  );
}