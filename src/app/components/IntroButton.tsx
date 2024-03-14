"use client";

import { ComponentPropsWithoutRef } from "react";

interface IntroButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  onClick?: () => void;
}

const IntroButton: React.FC<IntroButtonProps> = ({ text, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="transition-colors z-50 duration-[2000ms] border-2 border-black dark:border-white px-2 py-1 clamp-width-dynamic-ps md:px-6 md:py-2 rounded-md font-light hover:shadow-lg hover:bg-slate-200/[.1] hover:duration-300"
    >
      {text}
    </button>
  );
};

export default IntroButton;
