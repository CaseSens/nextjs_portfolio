import { useViewportHooks } from "@/app/hooks/viewport-hooks";
import { useEffect, useMemo } from "react";

interface SkillsWidgetProps {
  containerId: string;
  widgetId: string;
  title: string;
  childrenText?: string[];
  hasSubWidgets?: boolean;
}

const SkillsWidget: React.FC<SkillsWidgetProps> = ({
  containerId,
  widgetId,
  title,
  childrenText = [],
  hasSubWidgets = false,
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

  const childrenTextElements = useMemo(
    () =>
      childrenText.map((child, index) => {
        if (hasSubWidgets) {
          return (
            <div key={index} className="w-full">
              {child}
            </div>
          );
        } else {
          return <p key={index}>{child}</p>;
        }
      }),
    []
  );

  return (
    <div
      id={containerId}
      className=" w-full max-w-[100%] h-max overflow-hidden text-white"
    >
      <div
        id={widgetId}
        className="flex flex-col gap-1 w-[101%] justify-center p-6 border-2 rounded-lg shadow-inner-lg"
      >
        <h1 className="clamp-width-medium w-full border-b mb-2 underline-offset-4">
          {title}
        </h1>
        {hasSubWidgets ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center gap-4 w-full">
            {childrenTextElements}
          </div>
        ) : (
          <>{childrenTextElements}</>
        )}
      </div>
    </div>
  );
};

export default SkillsWidget;
