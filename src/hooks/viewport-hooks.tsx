import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type atParams = "top" | "bottom" | "left" | "right" | "center";

type scrollToElementParams = {
  offset?: number;
  at?: atParams;
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

      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: scrollToPos,
          autoKill: true,
        },
        ease: "power1.inOut",
      });
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

  return { scrollToElement, animateOnScroll, gsap };
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
