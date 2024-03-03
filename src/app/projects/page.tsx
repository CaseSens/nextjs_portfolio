"use client";
import "./page.css";

import { useEffect, useState } from "react";
import { useViewportHooks } from "../hooks/viewport-hooks";
import { Observer } from "gsap/all";
import { IntroScreen } from "./IntroScreen";

type ProjectGallerySlide = {
  title: string;
  description: string;
  skills: string[];
  image: string;
};

const projectGallerySlides: ProjectGallerySlide[] = [
  {
    title: "This very portfolio!",
    description: `
    That's right! this portfolio itself is a showcase project!
    It's made completely by hand in Next.js, as a way to display
    my passion for art, colors, and programming!
    `,
    skills: ["Next.js", "React", "Tailwind", "HTML5", "CSS"],
    image: "/portfolio_self.jpg",
  },
  {
    title: "EFC - Electron File Converter",
    description: `
    An FFMPEG-based media file converter made with Electron.js.
    This project was designed as a user-friendly and resource-efficient alternative to Handbrake, a popular FFMPEG media converter.
    It's completely open-source, and uses JS instead of React to be as lightweight as possible.
    `,
    skills: ["Electron.js", "JavaScript", "Bootstrap", "HTML5", "CSS"],
    image: "/efc.jpg",
  },
  {
    title: "CBS - Create Batch Script",
    description: `
    A batch/bash script creation tool made to increase accessibility in making terminal-level programs.
    Easily create terminal scripts, completely written in english.
    Made in Java so it it's designed to run everywhere.
    `,
    skills: ["Java", "Swing"],
    image: "/cbs.jpg",
  },
  {
    title: "Fractal Creation Simulator",
    description: `
    A simplistic tool for creating square-shaped fractals using collisions and trails.

    `,
    skills: ["Javascript", "HTML5", "CSS", "HTMLCanvas"],
    image: "/frac_create.jpg",
  },
];

type PointerLocation = {
  x: number;
  y: number;
};

export default function Projects() {
  const { applyObserver } = useViewportHooks();
  const TRANSITION_DELAY = 2000;
  const [introDismissed, setIntroDismissed] = useState(false);
  const [hasAlpha, setHasAlpha] = useState(true);
  const [pointerLocation, setPointerLocation] = useState<PointerLocation>({
    x: 0,
    y: 0,
  });
  let introTimeout: ReturnType<typeof setTimeout> | null;

  useEffect(() => {
    let observer: Observer;
    if (introDismissed) {
      observer = applyObserver();
    }

    return () => {
      introTimeout = null;
      observer?.kill();
    };
  }, [introDismissed]);

  const handleDismissed = () => {
    setHasAlpha(false);
    introTimeout = setTimeout(() => {
      setIntroDismissed(true);
    }, TRANSITION_DELAY);
  };

  const handleTouchDown: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    setPointerLocation({
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  const handleTouchUp: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const touch = e.changedTouches[0]; // Use changedTouches for touchEnd

    // If within an acceptable x range of a swipe, using 40 as default
    if (Math.abs(touch.clientX - pointerLocation.x) <= 40) {
      if (Math.abs(touch.clientY - pointerLocation.y) >= 40) {
        handleDismissed();
      }
    }
  };

  return (
    <main className="relative w-dvw h-dvh bg-bluestone text-textcream m-0 p-0 font-poppins overflow-hidden">
      {!introDismissed ? (
        <div
          style={{
            opacity: hasAlpha ? "100" : "0",
            transition: "opacity 2s ease",
          }}
          onWheelCapture={handleDismissed}
          onTouchStart={handleTouchDown}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchUp}
          className="w-full h-full"
        >
          <IntroScreen />
        </div>
      ) : (
        <>
          {projectGallerySlides.map((slide, index) => (
            <ProjectSection
              key={index}
              slide={slide}
              useGrad={true}
              index={index}
            />
          ))}
        </>
      )}
    </main>
  );
}

interface ProjectSectionProps {
  slide: ProjectGallerySlide;
  useGrad?: boolean;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  slide,
  useGrad,
  index,
}) => {
  const { transition, transitionFromTo } = useViewportHooks();
  const [detailsActive, setDetailsActive] = useState(false);

  const handleDetailsActive = () => {
    setDetailsActive(!detailsActive);
  };

  useEffect(() => {
    if (detailsActive) {
      transition(`transitionable-container-${index}`, {
        opacity: "1",
        duration: 0.2,
        ease: "power1.inOut",
      });
      transition(`transitionable-font-${index}`, {
        opacity: "1",
        duration: 1,
        ease: "power1.inOut",
        delay: 1,
      });
      transition(`transitionable-blur-${index}`, {
        opacity: "1",
        duration: 0.8,
        ease: "power1.in",
      });
    } else {
      transition(`transitionable-font-${index}`, {
        opacity: "0",
        duration: 1,
        ease: "power1.inOut",
      });
      transition(`transitionable-blur-${index}`, {
        opacity: "0",
        duration: 1,
        // delay: 0.3,
        ease: "power1.in",
      });
      transition(`transitionable-container-${index}`, {
        opacity: "0",
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  }, [detailsActive]);

  const preventMobileDefaultGestures: React.TouchEventHandler<
    HTMLDivElement
  > = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className={`proj-section ${slide.title} font-poppins`}
      onTouchMove={preventMobileDefaultGestures}
    >
      <div className="outer">
        <div className="inner">
          <div className="bg">
            <div
              style={{ backgroundImage: `url('${slide.image}')` }}
              id="bg-image-container"
              className="absolute z-10 w-full h-full bg-black bg-cover bg-no-repeat bg-center"
            >
              <div
                id="fg-image-container"
                style={{ backgroundImage: `url('${slide.image}')` }}
                className="absolute z-20 flex items-center justify-center bg-clip-border w-full h-full bg-contain bg-no-repeat bg-center backdrop-filter backdrop-blur-lg rounded-lg xl:invisible"
              >
                {/* <img
                  src={slide.image}
                  className="w-max h-max max-w-full max-h-full shadow-2xl"
                /> */}
              </div>
            </div>
            <div
              className={`transitionable-blur-${index} opacity-0 absolute z-30 w-full h-full top-0 left-0 pointer-events-none backdrop-filter backdrop-blur-[12px]`}
            />
            <div className="absolute top-14 right-1/2 z-30 translate-x-1/2 px-12 py-4 backdrop-blur-md rounded-lg shadow-2xl bg-black/40">
              <h2 className="clamp-width-medium font-bold text-center">
                {slide.title}
              </h2>
            </div>
            <div className="transition-all duration-[1000ms] ease-in absolute max-w-[80dvw] sm:max-w-sm md:max-w-md lg:max-w-lg w-full z-30 bottom-8 right-1/2 translate-x-1/2 flex flex-col items-center gap-4">
              <h1
                onClick={handleDetailsActive}
                className=" cursor-pointer border-2 p-2"
              >
                {detailsActive ? "Hide details" : "Show details"}
              </h1>
              <div
                style={{
                  maxHeight: detailsActive ? "100dvh" : "0dvh",
                  backgroundColor: detailsActive
                    ? "rgba(0, 0, 0, 0.4)"
                    : "transparent",
                }}
                className={`transitionable-container-${index} transition-all p-5 duration-[1000ms] ease-in w-full h-max max-h-0 backdrop-filter backdrop-blur-md shadow-2xl rounded-lg overflow-hidden`}
              >
                <div
                  className={`w-full transitionable-font-${index} flex flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="underline">Skills:</h1>
                    <div className="flex flex-wrap gap-4 items-center w-full mb-4">
                      {slide.skills.map((skill, index) => (
                        <h1 key={index} className={`p-2 border-2`}>
                          {skill}
                        </h1>
                      ))}
                    </div>
                    <h1 className="underline">Description:</h1>
                    <h1>{slide.description}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
