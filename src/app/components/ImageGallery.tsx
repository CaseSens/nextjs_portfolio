"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  imageUrl: string;
  title: string;
};

const tempItems: Slide[] = [
  { imageUrl: "cbs.jpg", title: "CBS - Batch Script Maker" },
  { imageUrl: "efc.jpg", title: "EFC - Electron File Converter" },
  { imageUrl: "frac_create.jpg", title: "Fractal Creation Sim" },
  { imageUrl: "evolution_sim.jpg", title: "Evolution simulator" },
];

const ImageGallery = () => {
  const [hoveredItem, setHoveredItem] = useState(0);

  const handleHoveredItem = (itemNo: number) => {
    setHoveredItem(itemNo);
  };

  const mappedItems = tempItems.map((item, index) => (
    <GallerySeparator
      key={index}
      title={item.title}
      itemNo={index}
      onHover={() => handleHoveredItem(index)}
      className={`relative transition-all ease-out duration-500 flex p-1 z-30 select-none ${
        index !== hoveredItem ? "min-w-[6%]" : "grow min-w-[6%]"
      }`}
    />
  ));

  return (
    <div className="relative w-full h-[420px] flex ">
      {tempItems.map((item, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-500 ease-in-out z-10 w-full h-full bg-center bg-cover bg-no-repeat ${
            index === hoveredItem ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
      ))}
      <div className="absolute z-20 w-full h-full backdrop-filter backdrop-blur-[1px] bg-black/[0.5]" />
      {mappedItems}
    </div>
  );
};

interface GallerySeperatorProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  itemNo: number;
  onHover: (itemNo: number) => void;
}

const seperatorStyles: React.CSSProperties = {
  height: "100%",
  width: "3px",
  backgroundColor: "white",
};

const GallerySeparator: React.FC<GallerySeperatorProps> = ({
  title,
  itemNo,
  onHover,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      onMouseEnter={() => onHover(itemNo)}
      onClick={() => onHover(itemNo)}
    >
      <div style={seperatorStyles} className="seperator-line" />
      <h1 className="text-lg [writing-mode:vertical-lr] py-1 text-white font-playfair font-regular tracking-wider">
        {title}
      </h1>
    </div>
  );
};

export default ImageGallery;
