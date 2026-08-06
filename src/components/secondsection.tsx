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
        description: "Track goals and developer progress with a clean modern dashboard.",
        image: "/projects/pathforge.png",
        github: "#",
        demo: "#",
      },
      {
        title: "WriteFlow",
        description: "AI powered writing assistant for developers and creators.",
        image: "/projects/writeflow.png",
        github: "#",
        demo: "#",
      },
      {
        title: "Portfolio",
        description: "Modern portfolio built using Next.js and Tailwind CSS.",
        image: "/projects/portfolio.png",
        github: "#",
        demo: "#",
      },
      {
        title: "LumaBoard",
        description: "A productivity dashboard with goals and notes.",
        image: "/projects/lumaboard.png",
        github: "#",
        demo: "#",
      },
    ],

    Web3: [
      {
        title: "Autopsy",
        description: "Blockchain forensic platform.",
        image: "/projects/autopsy.png",
        github: "#",
        demo: "#",
      },
    ],

    AI: [
      {
        title: "AI Resume",
        description: "Resume generator powered by AI.",
        image: "/projects/ai.png",
        github: "#",
        demo: "#",
      },
    ],
  };

  return (
    <section
      className="
        mt-8
        rounded-3xl
        border
        border-zinc-800
        bg-[#111111]/80
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-zinc-700
        hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]
      "
    >
      {/* Main Tabs */}
      <div className="flex justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "border-zinc-500 bg-zinc-800 text-white"
                : "border-zinc-700 bg-zinc-900/40 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Projects" && (
        <>
          {/* Category */}
          <div className="mt-8 flex justify-center gap-3">
            {["Web2", "Web3", "AI"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
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