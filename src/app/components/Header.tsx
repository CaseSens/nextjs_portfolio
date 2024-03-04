"use client";

import { GoHomeFill } from "react-icons/go";
import { FaBoxArchive } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import TooltipButton from "./TooltipButton";
import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleLightMode = () => {
    const currentTheme = resolvedTheme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="header box-border fixed flex flex-col gap-2 justify-start w-full top-0 p-4 z-20 pointer-events-none">
      <TooltipButton
        Icon={resolvedTheme === "dark" ? MdLightMode : MdDarkMode}
        tooltipText={
          resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"
        }
        onClick={toggleLightMode}
      />
      <TooltipButton Icon={GoHomeFill} tooltipText="Home" link="/" />
      <TooltipButton
        Icon={FaBoxArchive}
        tooltipText="Projects"
        link="/projects"
      />
      <TooltipButton Icon={FaInfoCircle} tooltipText="Contact Info" />
      <TooltipButton Icon={FaBloggerB} tooltipText="My Blog" />
      <h1 className="transition duration-[2000ms] fixed clamp-width-small left-1/2 top-1 translate-x-[-50%] text-[black] dark:text-white select-none ">
        *Website under construction*
      </h1>
    </div>
  );
};

export default Header;
