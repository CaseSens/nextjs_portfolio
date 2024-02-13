"use client";

import { useViewportHooks } from "@/hooks/viewport-hooks";
import { IoIosArrowDown } from "react-icons/io";
import SkillsWidget from "./components/SkillsWidget";
import Carousel, { Slide } from "./components/Carousel";

const devProjSlides: Slide[] = [
  { imageUrl: "efc.jpg", title: "EFC - Electron File Converter" },
  { imageUrl: "testimage.png", title: "PROJ2" },
  { imageUrl: "testimage2.jpg", title: "PROJ3" },
  { imageUrl: "testimage2.jpg", title: "PROJ4" },
];

function About() {
  const { scrollToElement, animateOnScroll, gsap } = useViewportHooks();

  const handleScrollToDevInfo = () => {
    scrollToElement("devSkills", {
      at: "center",
    });
  };

  return (
    <div
      id="about-page"
      className="relative grid grid-cols-page-padding-cols-sm gap-y-96 place-items-center p-6 md:px-8 lg:px-12 xl:px-16 w-full bg-hotpink font-rubik"
    >
      <img
        src="/blob-1.svg"
        className="absolute z-0 w-5/12 right-16 top-24 object-cover clear-both"
        alt="bubble"
      />
      <div
        id="introduction-container"
        style={{ height: "80vh" }}
        className="col-start-2 relative box-border relative flex items-center justify-center w-full z-1 text-white"
      >
        <div
          id="introduction-elem"
          className="relative grid gap-8 grid-cols-1 grid-rows-widget-img-grid-row lg:grid-rows-1 lg:grid-cols-widget-img-grid-col lg:grid-rows-1 w-full h-2/3 bg-white/[.1] p-8 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg border-2"
        >
          <div id="info-container" className="flex flex-col w-full">
            <h1 className="clamp-width-large font-normal grow">
              Casey Goosney Gareau
            </h1>
            <p className="clamp-width-xsmall text-balance">
              Office ipsum you must be muted. Go to expectations hanging options
              synchronise talk productize key goalposts your. Explore race
              stakeholder do savvy pee cross goalposts procrastinating can. To
              tentative loss shark community close.
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
      <div id="devSkills" className="col-start-2 w-full flex flex-col gap-8">
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
      </div>
      <div className="col-start-2 w-full h-full grid grid-rows-[200px_400px] place-items-center border-2 rounded-lg">
        <h1 className="text-white clamp-width-medium">
          Overview of my projects
        </h1>
        <Carousel slides={devProjSlides} />
      </div>
      <div
        style={{ marginTop: "1000px" }}
        className="endTrig col-start-2 h-96 w-full bg-white"
      ></div>
    </div>
  );
}

export default About;
