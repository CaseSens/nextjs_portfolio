"use client";

import About from "./about";
import Home from "./home";

export default function Main() {
  return (
    <main
      id="main"
      className="transition-colors duration-[2000ms] relative min-h-screen w-full flex flex-col bg-darkblue dark:bg-hotpink"
    >
      <div
        style={{ backgroundImage: `url("grain.svg")` }}
        className="absolute pointer-events-none bg-repeat z-10 w-full h-full opacity-50"
      ></div>
      <Home />
      <About />
    </main>
  );
}
