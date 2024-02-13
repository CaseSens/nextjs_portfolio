"use client";

import { useViewportHooks } from "@/hooks/viewport-hooks";
import { title } from "process";
import {
  ForwardedRef,
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

export type Slide = {
  imageUrl: string;
  title?: string;
};

interface CarouselProps {
  slides: Slide[];
}

function Carousel({ slides }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const { gsap } = useViewportHooks();

  const nextSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      },
    });
  };

  const prevSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        setActiveSlide(
          (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
      },
    });
  };

  useEffect(() => {
    // Fade in the new active slide after it has been set
    gsap.fromTo(
      slideRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.inOut" }
    );
  }, [activeSlide]); // Call func whenever activeSlide changes

  return (
    <div
      id="slider"
      className="relative flex flex-col w-full h-full overflow-hidden"
    >
      <CarouselSlide
        slide={slides[activeSlide]}
        ref={slideRef}
        title={slides[activeSlide].title}
      />
      <div
        style={{ color: "red", transform: "translate(-50%, 0)" }}
        className="absolute clamp-width-large left-4 bottom-0 cursor-pointer select-none"
        onClick={nextSlide}
      >
        &#11167;
      </div>
      <div
        style={{ color: "red", transform: "translate(-50%, 0)" }}
        className="absolute clamp-width-large left-4 top-0 cursor-pointer select-none"
        onClick={prevSlide}
      >
        &#11165;
      </div>
    </div>
  );
}

interface CarouselSlideProps {
  slide: Slide;
  title?: string;
}

const CarouselSlide = forwardRef(
  ({ slide, title }: CarouselSlideProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        style={{ backgroundImage: `url(${slide.imageUrl})` }}
        className="slide relative w-full h-full shrink-0 bg-center bg-cover bg-no-repeat"
      >
        <div className="absolute w-full h-full backdrop-filter backdrop-blur-sm" />
        {title && (
          <h1 className="absolute clamp-width-large font-bold text-[red] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            {title}
          </h1>
        )}
      </div>
    );
  }
);

export default Carousel;
