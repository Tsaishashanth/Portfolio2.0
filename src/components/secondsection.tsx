"use client";

import { useState } from "react";

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState("Projects");

  const tabs = [
    "Projects",
    "Open Source",
    "Blogs",
  ];

  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111]/80 p-8 backdrop-blur-xl">


      {/* Main Tabs */}
      <div className="flex justify-center gap-4">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              rounded-full
              border
              px-8
              py-3
              text-white
              transition-all
              duration-300

              ${
                activeTab === tab
                  ? "border-zinc-400 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  : "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800"
              }
            `}
          >
            {tab}
          </button>
        ))}

      </div>



      {/* Projects Content */}
      {activeTab === "Projects" && (
        <div className="mt-10">


          {/* Project Categories */}
          <div className="flex justify-center gap-4">


            <button
              className="
                rounded-xl
                border border-blue-400/40
                bg-gradient-to-b from-blue-500 to-blue-700
                px-6
                py-2
                text-white
                shadow-[0_0_25px_rgba(59,130,246,0.35)]
                transition
                hover:scale-105
              "
            >
              Web2
            </button>


            <button
              className="
                rounded-xl
                border border-zinc-600
                bg-gradient-to-b from-zinc-700 to-zinc-900
                px-6
                py-2
                text-white
                transition
                hover:scale-105
              "
            >
              Web3
            </button>


            <button
              className="
                rounded-xl
                border border-zinc-600
                bg-gradient-to-b from-zinc-700 to-zinc-900
                px-6
                py-2
                text-white
                transition
                hover:scale-105
              "
            >
              AI
            </button>


          </div>



          {/* Project Cards will come here */}


        </div>
      )}



      {activeTab === "Open Source" && (
        <div className="mt-10 text-center text-zinc-400">
          Open source contributions will appear here.
        </div>
      )}



      {activeTab === "Blogs" && (
        <div className="mt-10 text-center text-zinc-400">
          Blogs will appear here.
        </div>
      )}



    </section>
  );
}