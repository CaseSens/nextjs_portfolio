"use client";

interface IntroButtonProps {
  text: string;
  onClick: () => void;
}

const IntroButton: React.FC<IntroButtonProps> = ({ text, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="border-2 px-2 py-1 clamp-width-dynamic-ps md:px-6 md:py-2 rounded-md font-light transition hover:shadow-lg hover:bg-slate-200/[.1]"
    >
      {text}
    </button>
  );
};

export default IntroButton;
