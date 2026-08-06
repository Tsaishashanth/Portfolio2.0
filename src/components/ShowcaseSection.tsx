"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
//import OpenSourceCard from "./OpenSourceCard";
//import BlogCard from "./BlogCard";

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [activeCategory, setActiveCategory] = useState("Web2");

  const tabs = ["Projects", "Open Source", "Blogs"];
  const categories = ["Web2", "Web3", "AI"];

  /* -------------------- Projects -------------------- */

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
        description: "Wallet analytics dashboard.",
        image: "/projects/solana.png",
        github: "#",
        demo: "#",
        tech: ["Solana", "Next.js"],
      },
    ],

    AI: [
      {
        title: "AI Resume",
        description: "Generate ATS friendly resumes.",
        image: "/projects/ai.png",
        github: "#",
        demo: "#",
        tech: ["OpenAI", "Next.js"],
      },
    ],
  };

  /* -------------------- Open Source -------------------- */

  const openSource = {
    Web2: [
      {
        title: "React UI Kit",
        description: "Reusable UI components.",
        github: "#",
        stars: 120,
        forks: 18,
        language: "TypeScript",
      },
    ],

    Web3: [
      {
        title: "Solana SDK",
        description: "Utility package.",
        github: "#",
        stars: 60,
        forks: 8,
        language: "Rust",
      },
    ],

    AI: [
      {
        title: "AI CLI",
        description: "Developer CLI.",
        github: "#",
        stars: 35,
        forks: 5,
        language: "Python",
      },
    ],
  };

  /* -------------------- Blogs -------------------- */

  const blogs = {
    Web2: [
      {
        title: "React Performance Tips",
        description: "Improve React applications.",
        date: "July 2026",
        readTime: "5 min",
        link: "#",
      },
    ],

    Web3: [
      {
        title: "Solana PDA Guide",
        description: "Understanding Program Derived Addresses.",
        date: "July 2026",
        readTime: "8 min",
        link: "#",
      },
    ],

    AI: [
      {
        title: "Prompt Engineering",
        description: "Write better prompts.",
        date: "July 2026",
        readTime: "6 min",
        link: "#",
      },
    ],
  };

  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111]/80 p-6 backdrop-blur-xl">

      {/* Main Tabs */}
      <div className="flex justify-center gap-3">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveCategory("Web2");
            }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-white text-black"
                : "border border-zinc-700 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      {/* Category Buttons */}

      <div className="mt-8 flex justify-center gap-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-zinc-100 text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Projects */}

      {activeTab === "Projects" && (

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {projects[activeCategory as keyof typeof projects].map((project) => (

            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
              demo={project.demo}
              tech={project.tech}
              category={activeCategory}
            />

          ))}

        </div>

      )}

      {/* Open Source */}

      {activeTab === "Open Source" && (

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {openSource[activeCategory as keyof typeof openSource].map((repo) => (

            <OpenSourceCard
              key={repo.title}
              title={repo.title}
              description={repo.description}
              github={repo.github}
              stars={repo.stars}
              forks={repo.forks}
              language={repo.language}
              category={activeCategory}
            />

          ))}

        </div>

      )}

      {/* Blogs */}

      {activeTab === "Blogs" && (

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {blogs[activeCategory as keyof typeof blogs].map((blog) => (

            <BlogCard
              key={blog.title}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              readTime={blog.readTime}
              link={blog.link}
              category={activeCategory}
            />

          ))}

        </div>

      )}

    </section>
  );
}