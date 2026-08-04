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
    <div className="mt-10 flex justify-center gap-4">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-full border px-8 py-3 text-lg transition ${
            activeTab === tab
              ? "border-zinc-500 bg-zinc-800 text-white"
              : "border-zinc-700 text-zinc-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}