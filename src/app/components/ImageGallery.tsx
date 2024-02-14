"use client";

import classNames from "classnames";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

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

interface ImageGalleryProps extends ComponentPropsWithoutRef<"div"> {}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  className,
  ...divProps
}) => {
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
      className={`relative transition-all ease-out duration-500 flex flex-col p-1 px-4 z-30 select-none ${
        index !== hoveredItem ? "min-h-[6%]" : "grow min-h-[6%]"
      }`}
    />
  ));

  return (
    <div
      {...divProps}
      className={classNames(
        "relative w-full h-[60vh] flex flex-col rounded-xl",
        className
      )}
    >
      {tempItems.map((item, index) => (
        <div
          key={index}
          className={`absolute rounded-xl transition-opacity duration-500 ease-in-out z-10 w-full h-full bg-center bg-cover bg-no-repeat ${
            index === hoveredItem ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
      ))}
      <div className="absolute z-20 w-full rounded-xl h-full backdrop-filter backdrop-blur-[2px] bg-black/[0.5]" />
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
  width: "100%",
  height: "1px",
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
      <h1 className="text-lg px-1 text-white font-playfair font-regular tracking-wider">
        {title}
      </h1>
    </div>
  );
};

export default ImageGallery;
