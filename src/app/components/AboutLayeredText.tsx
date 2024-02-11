export interface AboutLayeredTextProps {
  title: string;
  sections: AboutSection[];
}

const AboutLayeredText: React.FC<AboutLayeredTextProps> = ({
  title,
  sections,
}) => {
  const sectionComponents = sections.map((section, index) => (
    <SectionComponent
      key={index}
      title={section.title}
      children={section.children}
    />
  ));

  return (
    <div className="flex flex-col items-center font-rubrik text-white">
      <h1 className="fade-left-right relative clamp-width-full font-extrabold underline tracking-widest underline-offset-4 z-1">
        {title}
      </h1>
      <h1 className="fade-left-right absolute clamp-width-full font-extrabold tracking-widest underline-offset-4 text-shadow z-2 select-none">
        {title}
      </h1>
      {sectionComponents}
    </div>
  );
};

export type AboutSection = {
  title: string;
  children: string[];
};

const SectionComponent: React.FC<AboutSection> = (sectionInfo) => {
  return (
    <div className="fade-left-right flex flex-col items-center font-rubrik">
      <h1 className="fade-left-right font-bold drop-shadow-xl clamp-width-large">
        {sectionInfo.title}
      </h1>
      {sectionInfo.children.map((child, index) => (
        <div
          key={index}
          className="fade-left-right flex flex-col clamp-width-medium"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default AboutLayeredText;
