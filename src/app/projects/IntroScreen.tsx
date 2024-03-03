import React from "react";
import TSParticles from "../components/Particles";

export const IntroScreen = React.memo(() => {
  return (
    <>
      <TSParticles className="w-full pointer-events-none" />
      <img src="/flat-mountains_org.svg" className="absolute bottom-0" />
      <div className="w-full h-full flex items-center justify-center fixed top-0 p-8">
        <div className="flex flex-col justify-start items-center gap-8 text-center">
          <h2 className="section-heading">WELCOME TO MY PROJECTS</h2>
          <span>
            <p className="clamp-width-small">This is an interactive gallery</p>
            <p className="clamp-width-small">
              You can view all of my projects simply by scrolling
            </p>
          </span>
          <h1>Try scrolling to start</h1>
        </div>
      </div>
    </>
  );
});
