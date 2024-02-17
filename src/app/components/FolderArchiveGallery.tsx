import Image from "next/image";
import { useEffect, useState } from "react";
import { useViewportHooks } from "../hooks/viewport-hooks";

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

function FolderArchiveGallery() {
  const { gsap, scrollToElementX } = useViewportHooks();
  const [selectedFolder, setSelectedFolder] = useState<"programming" | "art">(
    "programming"
  );
  const [imageIndexClicked, setImageIndexClicked] = useState<number>(0);

  const contentSlides = projectGallerySlides.map((slide, index) => (
    <GalleryContentView key={index} slide={slide} id={index} />
  ));

  const onImageClick = (id: number) => {
    setImageIndexClicked(id);
    const contentContainer = document.getElementById("content-container");
    const contentToSwipeTo = document.getElementById(`content-${id}`);

    if (contentContainer && contentToSwipeTo) {
      // Get the target element's position relative to the viewport
      const targetX = contentToSwipeTo.getBoundingClientRect().left;
      // Get the container's current transform value
      const currentTransform = gsap.getProperty(contentContainer, "x") || 0;
      // Calculate the difference between the viewport's left edge and the container's left edge
      const containerOffset = contentContainer.getBoundingClientRect().left;
      // Calculate the needed transformation: current transform + (target position - container's current offset)
      const newX = (currentTransform as number) + (targetX - containerOffset);

      gsap.to(contentContainer, {
        x: `-=${newX}`, // Using relative value to adjust from the current position
        duration: 1,
        ease: "power1.inOut",
        onInterrupt: () => {},
      });
    }
  };
  useEffect(() => {}, [imageIndexClicked]);

  return (
    <div className="col-start-2 flex flex-col w-4/5 h-[95%] self-end font-poppins">
      <div className="FOLDERBUTTONS relative flex w-full items-center">
        <button
          style={{ zIndex: selectedFolder === "programming" ? "20" : "10" }}
          className="relative z-10 folder p-2 px-4 bg-black"
          onClick={() => setSelectedFolder("programming")}
        >
          Programming
        </button>
        <button
          style={{ zIndex: selectedFolder === "art" ? "20" : "10" }}
          className="relative folder p-2 px-4 bg-black mx-[-12px]"
          onClick={() => setSelectedFolder("art")}
        >
          Art
        </button>
      </div>
      <div
        id="actual_container"
        className="flex flex-col w-full h-full bg-black clamp-padding-default-vertical overflow-x-hidden rounded-[0px_8px_8px_8px]"
      >
        <div id="content-container" className="slidable flex w-full h-full">
          {contentSlides}
        </div>
        <div
          id="selector-row"
          className="w-full h-12 clamp-padding-default-horizontal"
        >
          <div
            id="delete_maybe"
            className="w-full h-full flex items-center justify-center gap-2"
          >
            {projectGallerySlides.map((slide, index) => (
              <GalleryImageSnippet
                image={slide.image}
                index={index}
                currentImageClicked={imageIndexClicked}
                onClick={onImageClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface GalleryContentViewProps {
  slide: ProjectGallerySlide;
  id: number;
}

const GalleryContentView: React.FC<GalleryContentViewProps> = ({
  slide,
  id,
}) => {
  const [showSkills, setShowSkills] = useState<boolean>(false);

  return (
    <div
      id={`content-${id}`}
      className="relative flex flex-col grow-0 gap-4 w-full shrink-0 pb-3 clamp-padding-default-horizontal"
    >
      <div className="grid grid-cols-2 place-content-between grid-cols-2">
        <h1
          style={{ textDecoration: showSkills ? "" : "underline" }}
          className="clamp-width-medium"
        >
          {slide.title}
        </h1>
        <div
          style={{ textDecoration: showSkills ? "underline" : "" }}
          className="relative clamp-width-xsmall flex items-center justify-end"
        >
          <h1
            onMouseEnter={() => setShowSkills(true)}
            onMouseLeave={() => setShowSkills(false)}
            className="cursor-pointer"
          >
            view skills
          </h1>
          <div
            style={{ display: showSkills ? "block" : "none" }}
            className="absolute top-12 right-0 p-[1rem] w-max h-max flex flex-col z-30 bg-black/[0.7] rounded-sm"
          >
            {slide.skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        </div>

        <p className="clamp-width-xsmall leading-4 row-start-2 col-span-full">
          {slide.description}
        </p>
      </div>
      <div
        style={{ backgroundImage: `url('${slide.image}')` }}
        id="bg-image-container"
        className="relative z-10 w-full h-full bg-black bg-cover bg-no-repeat bg-center rounded-lg"
      >
        <div
          id="fg-image-container"
          className="absolute z-20 flex items-center justify-center bg-clip-border w-full h-full bg-contain bg-no-repeat bg-center backdrop-filter backdrop-blur-lg rounded-lg"
        >
          <img
            src={slide.image}
            className="w-max h-max max-w-full max-h-full bg-contain bg-no-repeat bg-center shadow-2xl"
          />
          <div className="absolute transition-all duration-500 flex justify-center w-full h-full backdrop-filter backdrop-blur-[1.5px] opacity-0 hover:opacity-100 rounded-lg">
            <button className="transition-all duration-300 clamp-width-medium w-full h-full">
              Go to project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GalleryImageSnippetProps {
  image: string;
  index: number;
  onClick: (index: number) => void;
  currentImageClicked: number;
}

const GalleryImageSnippet: React.FC<GalleryImageSnippetProps> = ({
  image,
  index,
  onClick,
  currentImageClicked,
}) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <img
      src={image}
      style={{
        border: currentImageClicked === index ? "1px solid white" : "none",
      }}
      className="h-full w-[48px] cursor-pointer"
      onClick={handleClick}
    />
  );
};

export default FolderArchiveGallery;
