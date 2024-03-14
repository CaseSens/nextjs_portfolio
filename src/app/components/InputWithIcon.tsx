import { ChangeEventHandler } from "react";
import { IconType } from "react-icons/lib";

interface InputWithIconProps {
  Icon: IconType;
  onInputChange: (val: string) => void;
}

function InputWithIcon({ Icon, onInputChange }: InputWithIconProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="relative w-full h-8">
      <Icon
        size={"1rem"}
        className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
      />
      <input
        type="search"
        placeholder="Search"
        className="w-full h-full px-8 rounded-sm text-md"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputWithIcon;
