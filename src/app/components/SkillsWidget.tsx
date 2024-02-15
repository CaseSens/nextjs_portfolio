import { useViewportHooks } from "@/app/hooks/viewport-hooks";
import { useEffect } from "react";

interface SkillsWidgetProps {
  containerId: string;
  widgetId: string;
  title: string;
  childrenText: string[];
}

const SkillsWidget: React.FC<SkillsWidgetProps> = ({
  containerId,
  widgetId,
  title,
  childrenText,
}) => {
  const { animateOnScroll } = useViewportHooks();

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
          end: () => {
            const container = document.querySelector(
              `#${containerId}`
            ) as HTMLElement;

            if (container) {
              return container.offsetHeight;
            } else {
              return 100;
            }
          },
          // markers: true,
        },
      }
    );
  }, []);

  const childrenTextElements = childrenText.map((child) => <p>{child}</p>);

  return (
    <div
      id={containerId}
      className=" w-full max-w-[100%] overflow-hidden text-white"
    >
      <div
        id={widgetId}
        className="flex flex-col gap-1 justify-center w-[101%] p-6 border-2 rounded-lg shadow-inner-lg"
      >
        <h1 className="clamp-width-medium underline underline-offset-4">
          {title}
        </h1>
        {childrenTextElements}
      </div>
    </div>
  );
};

export default SkillsWidget;
