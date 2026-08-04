"use client";

import { useState } from "react";

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("Projects");

  const tabs = [
    "Projects",
    "Open Source",
    "Blogs",
  ];

  return (
    <section className="mt-10">

      {/* Main Tabs */}
      <div className="flex justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="rounded-full border border-zinc-700 px-8 py-3 text-white"
          >
            {tab}
          </button>
        ))}
      </div>


      {/* Show only when Projects clicked */}
      {activeTab === "Projects" && (
        <div className="mt-8">

          {/* Project categories */}
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


          {/* Projects will come here */}

        </div>
      )}

    </section>
  );
}