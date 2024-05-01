"use client";

import { GoHomeFill } from "react-icons/go";
import { FaBoxArchive } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import TooltipButton from "./TooltipButton";
import { useTheme } from "next-themes";
import useAppContext from "../hooks/app-hooks";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { toggleInfoOpened } = useAppContext();

  const toggleLightMode = () => {
    const currentTheme = resolvedTheme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="header box-border fixed flex flex-col gap-2 justify-start w-full top-0 p-4 z-50 pointer-events-none">
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
      <TooltipButton
        Icon={RiPagesFill}
        tooltipText="Portfolio"
        link="/portfolio"
      />
      <TooltipButton
        Icon={FaInfoCircle}
        tooltipText="Contact Info"
        onClick={toggleInfoOpened}
      />
      {/* <TooltipButton Icon={FaBloggerB} tooltipText="My Blog" link="/blog" /> */}
    </div>
  );
};

export default Header;
