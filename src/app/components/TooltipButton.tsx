"use client";

import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { IconType } from "react-icons/lib";
import Link from "next/link";

interface TooltipButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  Icon: IconType;
  tooltipText: string;
  link?: string;
}

const TooltipButton: React.FC<TooltipButtonProps> = ({
  Icon,
  tooltipText,
  link,
  ...divProps
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let visibilityTimer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(visibilityTimer); // Clear any existing visibility timer
    setIsVisible(true); // Show tooltip immediately on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    visibilityTimer = setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  useEffect(() => {
    // Clear visibility timer on component unmount
    return () => clearTimeout(visibilityTimer);
  }, []);

  /*
      {...divProps}
      className={classNames(
        "relative w-full h-[60vh] flex flex-col rounded-xl",
        className
      )}
  */

  return (
    <div {...divProps} className={classNames("relative w-max h-max flex gap-2 items-center")}>
      {link ? (
        <Link href={link ?? "/"}>
          <button
            className="transition-all w-full h-fit p-3 rounded-[8000px] hover:bg-white/[0.1] pointer-events-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Icon color="white" className="size-6" />
          </button>
        </Link>
      ) : (
        <button
          className="transition-all w-full h-fit p-3 rounded-[8000px] hover:bg-white/[0.1] pointer-events-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon color="white" className="size-6" />
        </button>
      )}
      <div
        className="transition-all flex flex-col items-start justify-center z-2 w-fit h-full bg-white/[0.1] px-4 py-2 rounded-md text-white select-none"
        style={{
          opacity: isHovered ? "1" : "0",
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <p className="leading-none p-0 m-0 line-clamp-none font-rubik w-max">
          {tooltipText}
        </p>
      </div>
    </div>
  );
};

export default TooltipButton;
