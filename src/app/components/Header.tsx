"use client";

import { GoHomeFill } from "react-icons/go";
import { FaBoxArchive } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import TooltipButton from "./TooltipButton";

const Header = () => {

  return (
    <div className="header box-border fixed flex flex-col gap-2 justify-center justify-start w-full top-0 p-4 z-10 pointer-events-none">
      <TooltipButton Icon={GoHomeFill} tooltipText="Home" />
      <TooltipButton Icon={FaBoxArchive} tooltipText="Projects" />
      <TooltipButton Icon={FaInfoCircle} tooltipText="Contact Info" />
      <h1 className="fixed clamp-width-small left-1/2 top-1 translate-x-[-50%] text-[black] select-none ">
        *Website under construction*
      </h1>
    </div>
  );
};

export default Header;
