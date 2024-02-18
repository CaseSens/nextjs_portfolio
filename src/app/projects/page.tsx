"use client";
import "./page.css";

import { useEffect } from "react";
import { useViewportHooks } from "../hooks/viewport-hooks";

export default function Projects() {
  const { applyObserver } = useViewportHooks();
  useEffect(() => {
    const observer = applyObserver();

    return () => {
      observer.kill();
    };
  }, []);

  return (
    <main className="relative transition-colors duration-[2000ms] w-dvw h-dvh bg-bluestone text-textcream m-0 p-0 font-poppins">
      <section className="proj-section first">
        <div className="outer">
          <div className="inner">
            <div
              style={{
                backgroundImage: "url('flat-mountains_org.svg')",
              }}
              className="bg transition-colors duration-[2000ms] one bg-[#CCC6B0] dark:bg-bluestone"
            >
              <h2 className="section-heading">PROJECT 1</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="proj-section second">
        <div className="outer">
          <div className="inner">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/portfolio_self.jpg')`,
              }}
              className="bg two"
            >
              <h2 className="section-heading">PROJECT 1</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="proj-section third">
        <div className="outer">
          <div className="inner">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/cbs.jpg')`,
              }}
              className="bg three"
            >
              <h2 className="section-heading">PROJECT 2</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="proj-section">
        <div className="outer">
          <div className="inner">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/efc.jpg')`,
              }}
              className="bg four"
            >
              <h2 className="section-heading">PROJECT 3</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
