"use client";

import { useViewportHooks } from "@/hooks/viewport-hooks";
import AboutLayeredText, { AboutSection } from "./components/AboutLayeredText";
import { IoIosArrowDown } from "react-icons/io";
import DevInfoSummary from "./components/DevInfoSummary";
import { useEffect } from "react";

const devSections: AboutSection[] = [
  {
    title: "Full Stack",
    children: ["Computer Applications", "Web Development"],
  },
  {
    title: "Front-end",
    children: ["HTML5", "CSS3", "Javascript", "Typescript", "Swing"],
  },
  {
    title: "Back-end",
    children: [
      "API building",
      "Node.js",
      "Express.js",
      "Typescript",
      "MySQL",
      "NoSQL",
      "Spring",
    ],
  },
];

function About() {
  const { scrollToElement, animateOnScroll } = useViewportHooks();

  const handleScrollToDevInfo = () => {
    scrollToElement("devInfo", {
      at: "top",
    });
  };

  useEffect(() => {
    animateOnScroll(
      ".fade-left-right",
      {
        x: -600,
        opacity: 0,
        visibility: "hidden",
      },
      {
        x: 0,
        opacity: 1,
        visibility: "visible",
        duration: 1.5,
        scrollTrigger: {
          trigger: "#devInfo",
          start: "top center",
          end: "bottom center",
          // scrub: true,
          markers: true,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div
      id="about-page"
      className="relative flex flex-col p-6 md:px-8 lg:px-12 xl:px-16 w-full bg-hotpink font-rubik"
    >
      <img
        src="/blob-1.svg"
        className="absolute z-0 w-5/12 right-16 top-24 object-cover clear-both"
        alt="bubble"
      />
      <div
        id="introduction-container"
        style={{ height: "80vh" }}
        className="relative box-border relative flex items-center justify-center w-full z-1 text-white"
      >
        <div
          id="introduction-elem"
          className="relative grid gap-8 grid-cols-1 grid-rows-widget-img-grid-row lg:grid-rows-1 lg:grid-cols-widget-img-grid-col lg: grid-rows-1 w-full md:w-4/5 max-w-screen-lg h-2/3 bg-white/[.1] p-8 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg"
        >
          <div id="info-container" className="flex flex-col w-full">
            <h1 className="clamp-width-large font-normal grow">
              Casey Goosney Gareau
            </h1>
            <p>
              Office ipsum you must be muted. Go to expectations hanging options
              synchronise talk productize key goalposts your. Explore race
              stakeholder do savvy pee cross goalposts procrastinating can. To
              tentative loss shark community close.
            </p>
          </div>
          <img
            src="/Casey.jpg"
            className="object-cover h-full w-full place-self-center rounded-md"
          />
        </div>
        <IoIosArrowDown
          onClick={handleScrollToDevInfo}
          style={{ left: "50%", bottom: "8%", transform: "translate(-50%, 0)" }}
          className="absolute size-12 p-2 transition rounded-md hover:bg-white/[.2] cursor-pointer"
        />
      </div>
      <div id="devInfo" className="flex flex-col overflow-x-auto gap-8 z-1">
        <AboutLayeredText title="DEVELOPER" sections={devSections} />
      </div>
      <div className="mt-96"></div>
      <DevInfoSummary />
    </div>
  );
}

export default About;
