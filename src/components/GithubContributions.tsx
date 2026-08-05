"use client";

import {GitHubCalendar} from "react-github-calendar";

export default function GithubContributions() {
  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-[#111111]/80 p-8 backdrop-blur-xl">

      <h2 className="mb-6 text-2xl font-bold text-white">
        GitHub Contributions
      </h2>


      <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">

        <GitHubCalendar
          username="Tsaishashanth"
          colorScheme="dark"
        />

      </div>


    </section>
  );
}