"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("Projects");

  const tabs = [
    "Projects",
    "Open Source",
    "Blogs",
  ];

  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111] p-8">


      {/* Main Tabs */}
      <div className="flex justify-center gap-4">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-8 py-3 text-white ${
              activeTab === tab
                ? "border-zinc-500 bg-zinc-800"
                : "border-zinc-700"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>


      {/* Projects Content */}
      {activeTab === "Projects" && (
        <div className="mt-8">

          <div className="flex justify-center gap-3">

            <button className="rounded-lg bg-blue-600 px-6 py-2 text-white">
              Web2
            </button>

            <button className="rounded-lg border border-zinc-700 px-6 py-2 text-white">
              Web3
            </button>

            <button className="rounded-lg border border-zinc-700 px-6 py-2 text-white">
              AI
            </button>

          </div>


          {/* Project cards will come here */}

        </div>
      )}


    </section>
  );
}