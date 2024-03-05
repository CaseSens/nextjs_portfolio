import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

type atParams = "top" | "bottom" | "left" | "right" | "center";

type scrollToElementParams = {
  offset?: number;
  at?: atParams;
  to?: string;
};

export const useViewportHooks = () => {
  const scrollToElement = (
    id: string,
    { at, offset = 0 }: scrollToElementParams
  ) => {
    const element = document.getElementById(id);
    if (element) {
      const elemRect = element.getBoundingClientRect();
      let scrollToPos: number = getScrollToPos(elemRect, at);

      // Apply any additional offset if provided
      scrollToPos += offset;

      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: scrollToPos,
            autoKill: false,
          },
          ease: "power1.inOut",
        });
      } else {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: scrollToPos,
            autoKill: true,
          },
          ease: "power1.inOut",
        });
      }
    }
  };

  const scrollToElementX = (
    id: string,
    { at, offset = 0, to }: scrollToElementParams
  ) => {
    const element = document.getElementById(id);
    if (element) {
      const elemRect = element.getBoundingClientRect();
      let scrollToPos: number = getScrollToPosX(elemRect, at);

      // Apply any additional offset if provided
      scrollToPos += offset;

      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        gsap.to(to ?? window, {
          duration: 2,
          scrollTo: {
            x: scrollToPos,
            autoKill: false,
          },
          ease: "power1.inOut",
        });
      } else {
        gsap.to(to ?? window, {
          duration: 2,
          scrollTo: {
            x: scrollToPos,
            autoKill: true,
          },
          ease: "power1.inOut",
        });
      }
    }
  };

  const animateOnScroll = (
    targets: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ) => {
    gsap.set(targets, fromVars);
    gsap.fromTo(targets, fromVars, toVars);
  };

  const swipeOutOfPage = (classname: string, dir: "left" | "right") => {
    gsap.to(`.${classname}`, {
      duration: 2,
      x: dir === "right" ? window.outerWidth : -window.outerWidth,
      ease: "power1.in",
    });
  };

  const swipeIntoPage = (classname: string) => {
    const elems = document.querySelectorAll<HTMLElement>(`.${classname}`);

    gsap.set(elems, {
      duration: 0,
      x: function (index, target) {
        // This callback function will be invoked for each target
        // It will place each element just outside the right edge of the screen
        return window.innerWidth - 2 * target.getBoundingClientRect().width;
      },
    });

    gsap.to(elems, {
      duration: 2,
      x: 0,
      ease: "power1.out",
    });
  };

  const fadeIntoPage = (classname: string, dir: "in" | "out") => {
    gsap.to(`.${classname}`, {
      duration: 2,
      ease: "power2.inOut",
      opacity: dir === "in" ? 1 : 0,
    });
  };

  const getColorMode = () => {
    return localStorage.getItem("color-theme");
  };

  const applyObserver = () => {
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating: boolean;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => {animating = false},
        });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndex = index;
    }

    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
    return observer;
  };

  const transition = (forClass: string, vars: gsap.TweenVars) => {
    const elems = document.querySelectorAll(`.${forClass}`);

    gsap.to(elems, vars);
  };

  const transitionFromTo = (
    forClass: string,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ) => {
    const elems = document.querySelectorAll(`.${forClass}`);

    gsap.fromTo(elems, fromVars, toVars);
  };

  return {
    scrollToElement,
    scrollToElementX,
    animateOnScroll,
    gsap,
    swipeOutOfPage,
    swipeIntoPage,
    fadeIntoPage,
    getColorMode,
    applyObserver,
    transition,
    transitionFromTo,
  };
};

function getScrollToPos(elemRect: DOMRect, at: atParams = "top"): number {
  const currentScroll = window.pageYOffset;
  switch (at) {
    case "bottom":
      // Element's bottom relative to the document - window's height
      return currentScroll + elemRect.bottom - window.innerHeight;
    case "top":
      // Element's top relative to the document
      return currentScroll + elemRect.top;
    case "center":
      // Element's center relative to the document - half window's height
      return (
        currentScroll +
        elemRect.top +
        elemRect.height / 2 -
        window.innerHeight / 2
      );
    case "left": // Assuming horizontal scrolling is not intended
      return currentScroll;
    case "right": // Assuming horizontal scrolling is not intended
      return currentScroll;
    default:
      return currentScroll + elemRect.top;
  }
}

function getScrollToPosX(elemRect: DOMRect, at: atParams = "left"): number {
  const currentScrollX = window.pageXOffset; // Current horizontal scroll position
  switch (at) {
    case "left":
      // Element's left edge relative to the document
      return currentScrollX + elemRect.left;
    case "center":
      // Element's center relative to the document - half window's width
      return (
        currentScrollX +
        elemRect.left +
        elemRect.width / 2 -
        window.innerWidth / 2
      );
    case "right":
      // Element's right edge relative to the document - window's width
      return currentScrollX + elemRect.right - window.innerWidth;
    default:
      return currentScrollX + elemRect.left; // Default to "left" if not specified
  }
}
