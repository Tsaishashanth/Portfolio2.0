"use client";

import { useEffect, useState } from "react";
import About from "@/src/sections/About";
import Projects from "@/src/sections/Projects";
import Contributions from "@/src/sections/Contibutions";

type ThemeMode = "dark" | "light";

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      return;
    }

    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}`}>
      <About theme={theme} onToggleTheme={toggleTheme} />
      <Projects theme={theme} />
      <Contributions theme={theme} />
    </main>
  );
}
