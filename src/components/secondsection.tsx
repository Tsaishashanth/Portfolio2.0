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
        description: "Track goals and developer progress.",
        image: "/projects/pathforge.png",
        github: "#",
        demo: "#",
      },
      {
        title: "WriteFlow",
        description: "AI writing assistant for developers.",
        image: "/projects/writeflow.png",
        github: "#",
        demo: "#",
      },
      {
        title: "LumaBoard",
        description: "Modern productivity dashboard.",
        image: "/projects/lumaboard.png",
        github: "#",
        demo: "#",
      },
      {
        title: "Portfolio",
        description: "Personal developer portfolio.",
        image: "/projects/portfolio.png",
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
      {
        title: "Wallet Tracker",
        description: "Track wallet analytics.",
        image: "/projects/wallet.png",
        github: "#",
        demo: "#",
      },
    ],

    AI: [
      {
        title: "AI Resume",
        description: "Generate resumes using AI.",
        image: "/projects/ai.png",
        github: "#",
        demo: "#",
      },
      {
        title: "Code Assistant",
        description: "Developer AI assistant.",
        image: "/projects/code.png",
        github: "#",
        demo: "#",
      },
    ],
  };

  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111]/80 p-8 backdrop-blur-xl">
      {/* Main Tabs */}
      <div className="flex justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-8 py-3 text-white transition-all duration-300 ${
              activeTab === tab
                ? "border-zinc-400 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      {activeTab === "Projects" && (
        <>
          {/* Category Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            {["Web2", "Web3", "AI"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-6 py-2 transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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

      {/* Open Source */}
      {activeTab === "Open Source" && (
        <div className="mt-10 text-center text-zinc-400">
          Open Source projects will appear here.
        </div>
      )}

      {/* Blogs */}
      {activeTab === "Blogs" && (
        <div className="mt-10 text-center text-zinc-400">
          Blogs will appear here.
        </div>
      )}
    </section>
  );
}