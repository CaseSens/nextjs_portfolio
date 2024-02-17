"use client";

import Image from "next/image";
import FolderArchiveGallery from "../components/FolderArchiveGallery";

export default function Projects() {


  return (
    <main className="relative transition-colors duration-[2000ms] min-w-dvw min-h-dvh bg-[#CCC6B0] dark:bg-bluestonetext-black dark:text-textcream">
      <img
        src="flat-mountains_org.svg"
        className="absolute inset-0 object-cover max-h-dvh h-full w-full scale-y-[-1] z-10"
      />
      <Image
        priority
        src="/subtle-prism.svg"
        alt="prism background"
        layout="fill"
      />
      <div className="relative w-full min-h-dvh z-20 grid grid-cols-page-padding-cols-sm grid-rows-1 place-items-center py-12 md:px-8 lg:px-12 xl:px-16">
      <FolderArchiveGallery />
      </div>
    </main>
  );
}
