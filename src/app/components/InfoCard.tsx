'use client';

import React, { ComponentPropsWithoutRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LogoInlineText from "./LogoInlineText";
import useAppContext from "../hooks/app-hooks";

interface InfoCardProps extends ComponentPropsWithoutRef<"div"> {}

const InfoCard = ({ ...divProps }: InfoCardProps) => {
  const { isInfoOpen, toggleInfoOpened } = useAppContext();

  if (!isInfoOpen) return;

  return (
    <div {...divProps}>
      <div className="relative w-full h-max font-poppins flex flex-col">
        <button className="absolute right-4 top-4" onClick={toggleInfoOpened}>
          <IoMdClose size={"1.5rem"} color="white" />
        </button>
        <img src="/Casey_Info.jpg" className="w-full h-full rounded-t-xl" />
        <div className="w-full flex flex-col justify-center p-4 gap-4 bg-bluestone text-white rounded-b-xl mb-[-5%]">
          <span className="w-max bg-transparent flex gap-2 text-[clamp(1vw,18px,3vw)]">
            <h2 className=" border-[2px] py-1 px-2 leading-tight rounded-md">
              Software Developer
            </h2>
            <h2 className=" border-[2px] py-1 px-2 leading-tight rounded-md">
              Artist
            </h2>
          </span>
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(2vw,24px,3vw)] font-semibold tracking-wide">
              Casey Goosney
              <br />
              Gareau
            </h2>
            <span className="flex gap-3 items-center">
              <FaLocationDot size={"1rem"} />
              <h2 className="text-[14px]">Montreal, Quebec</h2>
            </span>
          </div>
          <p className="text-[14px]">You can find me at</p>
          <LogoInlineText
            Logo={FaSquareGithub}
            title="Github"
            value="@CaseSens"
          />
          <LogoInlineText
            Logo={FaLinkedin}
            title="Linkedin"
            value="@casey-goosney"
          />
          <LogoInlineText
            Logo={MdEmail}
            title="Email"
            value="casey@caseygg.dev"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
