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
      className="border-2 px-3 py-1 xl:py-3 rounded-sm hover:shadow-lg"
    >
      {text}
    </button>
  );
};

export default IntroButton;
