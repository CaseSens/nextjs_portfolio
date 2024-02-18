"use client";
import "./page.css";

import { useEffect, useState } from "react";
import { useViewportHooks } from "../hooks/viewport-hooks";
import { Observer } from "gsap/all";

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
    title: "EFC",
    description: `
    An FFMPEG-based media file converter made with Electron.js.
    This project was designed as a user-friendly and resource-efficient alternative to Handbrake, a popular FFMPEG media converter.
    It's completely open-source, and uses JS instead of React to be as lightweight as possible.
    `,
    skills: ["Electron.js", "HTML5", "CSS"],
    image: "/efc.jpg",
  },
  {
    title: "CBS",
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

export default function Projects() {
  const { applyObserver } = useViewportHooks();
  const TRANSITION_DELAY = 2000;
  const [introDismissed, setIntroDismissed] = useState(true);
  const [hasAlpha, setHasAlpha] = useState(true);
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

  return (
    <main className="relative transition-colors duration-[2000ms] w-dvw h-dvh bg-bluestone text-textcream m-0 p-0 font-poppins">
      {!introDismissed ? (
        <>
          <img
            style={{
              opacity: hasAlpha ? "100" : "0",
              transition: "opacity 2s ease",
            }}
            src="/flat-mountains_org.svg"
            className="absolute w-full h-full"
          />
          <div
            style={{
              opacity: hasAlpha ? "100" : "0",
              transition: "opacity 2s ease",
            }}
            className="w-full h-full flex items-center justify-center fixed top-0"
          >
            <div className="flex flex-col justify-start items-center gap-4 text-center">
              <h2 className="section-heading">WELCOME TO MY PROJECTS</h2>
              <span>
                <p>This is an interactive gallery</p>
                <p> You can view all of my projects simply by scrolling</p>
              </span>
              <button
                className="p-4 border-2 rounded-lg"
                onClick={handleDismissed}
              >
                {" "}
                Click me to get started{" "}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {projectGallerySlides.map((slide) => (
            <ProjectSection slide={slide} useGrad={true} />
          ))}
        </>
      )}
    </main>
  );
}

interface ProjectSectionProps {
  slide: ProjectGallerySlide;
  useGrad?: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ slide, useGrad }) => {
  return (
    <section className={`proj-section ${slide.title} font-poppins`}>
      <div className="outer">
        <div className="inner">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
            }}
            className="bg two"
          >
            <div className="w-full h-full pointer-events-none backdrop-filter backdrop-blur-[1px]" />
            <div className="absolute top-10 right-10 flex gap-16 h-max backdrop-filter backdrop-blur-md bg-white/20 p-5 rounded-lg">
              <span className="w-full h-full flex flex-col gap-4 col-start-1">
                <h2 className="clamp-width-medium font-bold border-b-4">
                  {slide.title}
                </h2>
                <div className="flex flex-col font-semibold">
                  {slide.skills.map((skill) => (
                    <p className="clamp-width-small">{skill}</p>
                  ))}
                </div>
              </span>
              <span className="w-full h-full max-w-96 flex items-center justify-center clamp-width-default col-start-2 text-pretty font-semibold">
                <h1>{slide.description}</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
