"use client";

import { useViewportHooks } from "@/hooks/viewport-hooks";
import IntroButton from "./components/IntroButton";

export default function Home() {
  const { scrollToElement } = useViewportHooks();
  const handleAboutClick = () => {
    scrollToElement("about-page");
  };

  return (
    <div className="relative bg-darkblue h-full w-full flex items-center justify-center text-white font-rubik font-bold text-center shrink-0 select-none">
      <img
        src="/waves-bg.svg"
        className="absolute inset-0 object-cover h-full w-full"
        alt="Background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="box-border flex flex-col items-center w-9/12 h-3/5 bg-transparent p-6 rounded-lg backdrop-filter backdrop-blur-sm shadow-2xl px-4 sm:px-8 md:px-12 py-4">
          <h2 className="text-sm underline">My portfolio</h2>
          <div className="flex flex-col items-center grow justify-center">
            <h1 className="transition-all text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-nowrap mt-6 tracking-wide drop-shadow-md">
              CASEY GOOSNEY
            </h1>
            <div className="flex flex-row w-4/5 items-center justify-between mt-1 mb-6 md:mb-12 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-4xl">
              <h2 className="transition-all hover:scale-105 drop-shadow-md select-none">
                DEVELOPER
              </h2>
              <h2 className="transition-all hover:scale-105 drop-shadow-md select-none">
                ARTIST
              </h2>
            </div>
            <p className="font-inter text-pretty text-sm md:text-md xl:text-lg 2xl:text-xl max-w-56 md:max-w-64 xl:max-w-70 2xl:max-w-80 pointer-events-none mt-2">
              Read more about who I am below, or skip ahead to see my projects
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full h-fit mt-8 ">
              <IntroButton text="ABOUT ME" onClick={handleAboutClick} />
              <IntroButton text="VIEW PROJECTS" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
