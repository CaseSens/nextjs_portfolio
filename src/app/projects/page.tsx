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
  const TRANSITION_DELAY = 2;
  const [introDismissed, setIntroDismissed] = useState<boolean>(false);
  const [introScreenOpacity, setIntroScreenOpacity] = useState<0 | 1>(1);

  useEffect(() => {
    let observer: Observer;
    if (introDismissed) {
      observer = applyObserver();
    }

    return () => {
      if (observer) {
        observer.kill();
      }
    };
  }, [introDismissed]);

  const handleDismissed = () => {
    
  }

  return (
    <main className="relative transition-colors duration-[2000ms] w-dvw h-dvh bg-bluestone text-textcream m-0 p-0 font-poppins">
      {!introDismissed ? (
        <div className="w-full h-full flex items-center justify-center fixed top-0">
          <div className="flex flex-col justify-start items-center gap-4 text-center">
            <h2 className="section-heading">WELCOME TO MY PROJECTS</h2>
            <span>
              <p>This is an interactive gallery</p>
              <p> You can view all of my projects simply by scrolling</p>
            </span>
            <button className="p-4 border-2 rounded-lg" onClick={() => setIntroDismissed(true)}> Click me to get started </button>
          </div>
        </div>
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
    <section className="proj-section second">
      <div className="outer">
        <div className="inner">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
            }}
            className="bg two"
          >
            <h2 className="section-heading">{slide.title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
