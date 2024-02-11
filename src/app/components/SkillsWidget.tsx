import { useViewportHooks } from "@/hooks/viewport-hooks";
import { useEffect } from "react";

interface SkillsWidgetProps {
  containerId: string;
  widgetId: string;
}

const SkillsWidget: React.FC<SkillsWidgetProps> = ({
  containerId,
  widgetId,
}) => {
  const { animateOnScroll, gsap } = useViewportHooks();

  useEffect(() => {
    animateOnScroll(
      `#${widgetId}`,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: `#${containerId}`,
          pinReparent: true,
          scrub: 1,
          snap: 1,
          start: "top-=200 center",
          toggleActions: "reverse play reverse play",
          // fastScrollEnd: true,
          end: () => document.querySelector(`#${containerId}`).offsetWidth,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div id={containerId} className=" w-full max-w-[100%] overflow-hidden">
      <div
        id={widgetId}
        className="flex flex-col justify-center w-[101%] p-6 border-2 rounded-lg shadow-inner-lg"
      >
        <h1 className="clamp-width-medium">FULL STACK</h1>
        <p className="">Computer Applications</p>
        <p>Web Development</p>
      </div>
    </div>
  );
};

export default SkillsWidget;
