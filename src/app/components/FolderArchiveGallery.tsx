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
    title: "EFC",
    description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.`,
    skills: ["Electron.js", "HTML5", "CSS"],
    image: "/efc.jpg",
  },
  {
    title: "CBS",
    description: `At vero eos et quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.`,
    skills: ["Java", "Swing",],
    image: "/cbs.jpg",
  },
];

function FolderArchiveGallery() {
  const { gsap } = useViewportHooks();
  const [selectedFolder, setSelectedFolder] = useState<"programming" | "art">(
    "programming"
  );
  const [imageIndexClicked, setImageIndexClicked] = useState<number>(0);

  const contentSlides = projectGallerySlides.map((slide, index) => (
    <GalleryContentView key={index} slide={slide} id={index} />
  ));

  const onImageClick = (id: number) => {
    const currentContent = document.getElementById(
      `content-${imageIndexClicked}`
    );
    const contentToSwipeTo = document.getElementById(`content-${id}`);

    if (currentContent && contentToSwipeTo) {
      const currentX = currentContent.getBoundingClientRect().x;
      const contentX = contentToSwipeTo.getBoundingClientRect().x;
      const diff = contentX - currentX;

      gsap.to("#content-container", {
        x: -diff,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  };

  useEffect(() => {}, [imageIndexClicked]);

  return (
    <div className="col-start-2 flex flex-col w-4/5 h-[95%] self-end font-rubik">
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
        className="flex flex-col w-full h-full bg-black clamp-padding-default-vertical overflow-x-hidden"
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

  const toggleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div
      id={`content-${id}`}
      className="flex flex-col grow-0 gap-4 w-full shrink-0 pb-3 clamp-padding-default-horizontal"
    >
      <div className="grid grid-cols-2 items-center grid-cols-2">
        <h1
          style={{ textDecoration: showSkills ? "" : "underline" }}
          className="clamp-width-medium"
        >
          {slide.title}
        </h1>
        <h1
          style={{ textDecoration: showSkills ? "underline" : "" }}
          className="clamp-width-xsmall text-right cursor-pointer"
          onClick={toggleShowSkills}
        >
          view skills
        </h1>
        {showSkills ? (
          <div className="w-full col-span-full grid grid-cols-4">
            {slide.skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        ) : (
          <p className="clamp-width-xsmall leading-4 row-start-2 col-span-full">
            {slide.description}
          </p>
        )}
      </div>
      <div
        style={{ backgroundImage: `url('${slide.image}')` }}
        id="bg-image-container"
        className="relative z-10 w-full h-full bg-black bg-cover bg-no-repeat bg-center"
      >
        <div
          id="fg-image-container"
          className="absolute z-20 flex items-center justify-center bg-clip-border w-full h-full bg-contain bg-no-repeat bg-center backdrop-filter backdrop-blur-lg"
        >
          <img
            src={slide.image}
            className="w-max h-4/5 bg-contain bg-no-repeat bg-center"
          />
          <div className="absolute transition-all duration-500 flex justify-center w-full h-full backdrop-filter backdrop-blur-[1.5px] opacity-0 hover:opacity-100">
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
}

const GalleryImageSnippet: React.FC<GalleryImageSnippetProps> = ({
  image,
  index,
  onClick,
}) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <img
      src={image}
      className="h-full w-[48px] cursor-pointer"
      onClick={handleClick}
    />
  );
};

export default FolderArchiveGallery;