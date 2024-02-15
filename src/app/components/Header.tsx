"use client";

import { GoHomeFill } from "react-icons/go";
import { FaBoxArchive } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import TooltipButton from "./TooltipButton";
import { useTheme } from "next-themes";
import { useViewportHooks } from "../hooks/viewport-hooks";
import { useEffect } from "react";

const Header = () => {
  const { fadeIntoPage } = useViewportHooks();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleLightMode = () => {
    const currentTheme = resolvedTheme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (resolvedTheme === "dark") {
      fadeIntoPage("lightmode", "out");
    } else {
      fadeIntoPage("lightmode", "in");
    }
  }, [resolvedTheme]);

  return (
    <div className="header box-border fixed flex flex-col gap-2 justify-center justify-start w-full top-0 p-4 z-20 pointer-events-none">
      <TooltipButton
        Icon={CiLight}
        tooltipText="Dark"
        onClick={toggleLightMode}
      />
      <TooltipButton Icon={GoHomeFill} tooltipText="Home" />
      <TooltipButton
        Icon={FaBoxArchive}
        tooltipText="Projects"
        link="/projects"
      />
      <TooltipButton Icon={FaInfoCircle} tooltipText="Contact Info" />
      <h1 className="fixed clamp-width-small left-1/2 top-1 translate-x-[-50%] text-[black] select-none ">
        *Website under construction*
      </h1>
    </div>
  );
};

export default Header;
