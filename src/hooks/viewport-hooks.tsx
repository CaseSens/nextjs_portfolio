import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const useViewportHooks = () => {
  const scrollToElement = (id: string) => {
    const body = document.getElementById("main");
    const element = document.getElementById(id);
    if (element) {
      gsap.to(body, {
        duration: 1.5,
        scrollTo: { y: element.getBoundingClientRect().top, autoKill: true },
        ease: "power1.inOut",
      });
    }
  };

  return { scrollToElement };
};
