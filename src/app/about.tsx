"use client";

import { useViewportHooks } from "@/app/hooks/viewport-hooks";
import { IoIosArrowDown } from "react-icons/io";
import SkillsWidget from "./components/SkillsWidget";
import ImageGallery from "./components/ImageGallery";

function About() {
  const { scrollToElement } = useViewportHooks();

  const handleScrollToDevInfo = () => {
    scrollToElement("devSkills", {
      at: "center",
    });
  };

  const handleScrollToDevGallery = () => {
    scrollToElement("devGallery", {
      at: "center",
    });
  };

  return (
    <div
      id="about-page"
      className="transition-colors duration-[2000ms] relative grid grid-cols-page-padding-cols-sm gap-y-96 place-items-center p-6 md:px-8 lg:px-12 xl:px-16 w-full font-rubik text-black dark:text-white"
    >
      <div className="absolute lightmode w-full h-full z-[1] pointer-events-none bg-pink-grad dark:opacity-0" />
      <div className="absolute darkmode w-full h-full z-0 pointer-events-none bg-blue-grad" />
      <img
        src="/blob-1.svg"
        className="absolute z-0 w-5/12 object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] motion-safe:animate-bubble-up-bottom"
        alt="bubble"
      />
      <img
        src="/blob-2.svg"
        className="absolute z-0 w-3/12 object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] motion-safe:animate-bubble-up-bottom-left"
        alt="bubble"
      />
      <div
        id="introduction-container"
        style={{ height: "80vh" }}
        className="col-start-2 relative box-border relative flex items-center justify-center w-full z-10"
      >
        <div
          id="introduction-elem"
          className="relative grid gap-8 grid-cols-1 grid-rows-widget-img-grid-row lg:grid-rows-1 lg:grid-cols-widget-img-grid-col lg:grid-rows-1 w-full h-2/3 bg-white/[.1] p-8 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg border-2"
        >
          <div id="info-container" className="flex flex-col w-full">
            <h1 className="clamp-width-large font-normal grow">
              Casey Goosney Gareau
            </h1>
            <p className="clamp-width-xsmall text-balance my-2 max-h-[96px] md:max-h-full overflow-y-auto">
              Hi, I'm a 24-year-old full-stack developer who lives and breathes
              programming, music, and visual arts. Coding is more than just a
              job for me—it's a passion that drives me to constantly work on
              personal projects, whether that's building cool web apps or diving
              into my creative side with music and art. I strive in tackling new
              challenges and learning something new with each project I take on.
              It's this mix of tech and creativity that always keeps me on my
              toes and my days interesting. I'm looking forward to what I can
              create next.
            </p>
          </div>
          <img
            src="/Casey.jpg"
            className="object-cover w-full max-h-full place-self-center rounded-md"
          />
        </div>
        <IoIosArrowDown
          onClick={handleScrollToDevInfo}
          style={{ left: "50%", bottom: "8%", transform: "translate(-50%, 0)" }}
          className="absolute size-12 p-2 transition rounded-md hover:bg-white/[.2] cursor-pointer"
        />
      </div>
      <div
        id="devSkills"
        className="relative z-10 col-start-2 w-full flex flex-col gap-8"
      >
        <SkillsWidget
          containerId={"dev1Container"}
          widgetId={"dev1Widget"}
          title="FULL-STACK"
          childrenText={["Computer Applications", "Web Development"]}
        />
        <SkillsWidget
          containerId={"dev2Container"}
          widgetId={"dev2Widget"}
          title="FRONT-END"
          childrenText={["HTML5", "CSS3", "JavaScript", "TypeScript", "Swing"]}
        />
        <SkillsWidget
          containerId={"dev3Container"}
          widgetId={"dev3Widget"}
          title="BACK-END"
          childrenText={["API Building", "Node.js", "Express.js", "JEST"]}
        />
        <IoIosArrowDown
          onClick={handleScrollToDevGallery}
          color="white"
          style={{
            left: "50%",
            bottom: "-8%",
            transform: "translate(-50%, 0)",
          }}
          className="absolute size-12 p-2 transition rounded-md hover:bg-white/[.2] cursor-pointer"
        />
      </div>
      <div className="col-start-2 w-full h-full my-[400px] rounded-xl">
        <ImageGallery id="devGallery" />
      </div>
      <img
        src="/layered_peaks.svg"
        className="absolute z-10 w-full bottom-0 left-0 object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        alt="bubble"
      />
    </div>
  );
}

export default About;
