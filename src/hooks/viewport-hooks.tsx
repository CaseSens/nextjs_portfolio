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
    { ...params }: scrollToElementParams
  ) => {
    const body = document.getElementById("main");
    const element = document.getElementById(id);
    if (element) {
      const elemRect = element.getBoundingClientRect();
      let scrollToPos: number = getScrollToPos(elemRect, params.at);

      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: scrollToPos,
          offsetY: params.offset ?? 0,
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

  return { scrollToElement, animateOnScroll };
};

function getScrollToPos(elemRect: DOMRect, at?: atParams): number {
  if (!at) return elemRect.top;

  switch (at) {
    case "bottom":
      return elemRect.bottom;
    case "top":
      return elemRect.top;
    case "left":
      return elemRect.left;
    case "center":
      return elemRect.top + elemRect.height / 2;
    default:
      return elemRect.top;
  }
}
