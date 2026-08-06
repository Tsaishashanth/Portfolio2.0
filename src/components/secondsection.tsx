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
      description: "Developer progress tracker.",
      image: "/projects/pathforge.png",
      github: "#",
      demo: "#",
      tech: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "WriteFlow",
      description: "AI writing assistant.",
      image: "/projects/writeflow.png",
      github: "#",
      demo: "#",
      tech: ["Next.js", "OpenAI"],
    },
  ],

  Web3: [
    {
      title: "Solana Dashboard",
      description: "Track wallet analytics.",
      image: "/projects/solana.png",
      github: "#",
      demo: "#",
      tech: ["Solana", "Next.js"],
    },
  ],

  AI: [
    {
      title: "AI Resume",
      description: "Resume generator.",
      image: "/projects/ai.png",
      github: "#",
      demo: "#",
      tech: ["OpenAI", "Next.js"],
    },
  ],
};

const openSource = {
  Web2: [
    {
      title: "React Library",
      description: "Reusable React components.",
      image: "/projects/react.png",
      github: "#",
      demo: "#",
      tech: ["React", "TypeScript"],
    },
  ],

  Web3: [
    {
      title: "Solana SDK",
      description: "Utility package.",
      image: "/projects/sdk.png",
      github: "#",
      demo: "#",
      tech: ["Solana"],
    },
  ],

  AI: [
    {
      title: "AI CLI",
      description: "CLI tool for AI workflows.",
      image: "/projects/cli.png",
      github: "#",
      demo: "#",
      tech: ["Python"],
    },
  ],
};

const blogs = {
  Web2: [
    {
      title: "React Performance",
      description: "Optimizing React apps.",
      image: "/projects/blog1.png",
      github: "#",
      demo: "#",
      tech: ["React"],
    },
  ],

  Web3: [
    {
      title: "Solana PDAs",
      description: "Understanding PDAs.",
      image: "/projects/blog2.png",
      github: "#",
      demo: "#",
      tech: ["Solana"],
    },
  ],

  AI: [
    {
      title: "Prompt Engineering",
      description: "Better prompts.",
      image: "/projects/blog3.png",
      github: "#",
      demo: "#",
      tech: ["AI"],
    },
  ],
};

const currentData =
  activeTab === "Projects"
    ? projects
    : activeTab === "Open Source"
    ? openSource
    : blogs;

return (
  <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111]/80 p-6 backdrop-blur-xl">

    {/* Main Tabs */}
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

    {/* Category Buttons */}

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

    <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

      {currentData[
        activeCategory as keyof typeof currentData
      ].map((item) => (

        <ProjectCard
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
          github={item.github}
          demo={item.demo}
          category={activeCategory}
          tech={item.tech}
        />

      ))}

    </div>

  </section>
);
}