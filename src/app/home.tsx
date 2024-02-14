"use client";

import { useViewportHooks } from "@/hooks/viewport-hooks";
import IntroButton from "./components/IntroButton";

export default function Home() {
  const { scrollToElement } = useViewportHooks();
  const handleAboutClick = () => {
    scrollToElement("introduction-container", {
      at: "center",
    });
  };

  return (
    <div className="relative z-0 bg-transparent h-screen w-screen flex items-center justify-center text-white font-rubik font-bold text-center shrink-0 select-none">
      <img
        src="/waves-bg.svg"
        className="absolute inset-0 object-cover h-full w-full"
        alt="Background"
      />
      <div className="absolute z-30 inset-0 flex items-center justify-center">
        <div className="box-border flex flex-col gap-12 items-center w-9/12 bg-white/[.1] px-6 py-8 md:py-12 rounded-lg backdrop-filter backdrop-blur-sm shadow-2xl px-4 sm:px-8 md:px-12 py-4">
          <div className="flex flex-col leading-tight md:leading-none">
            <h1 className="clamp-width-full font-extrabold drop-shadow-xl">
              CASEY GOOSNEY
            </h1>
            <div className="flex w-full h-fit">
              <div className="flex flex-col clamp-width-small-bp items-start justify-center text-lightgreen grow leading-tight">
                <p className="font-light">Developer</p>
                <p className="font-light">Artist</p>
              </div>
              <h1 className="clamp-width-full font-extrabold drop-shadow-xl">
                GAREAU
              </h1>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-6 w-full mt-8 mb-8">
              <IntroButton text="About me" onClick={handleAboutClick} />
              <IntroButton text="View Projects" onClick={handleAboutClick} />
            </div>
          </div>
          <p className="font-light text-left clamp-width-small">
            Read more about who I am below, or skip ahead to see my projects
          </p>
        </div>
      </div>
    </div>
  );
}
