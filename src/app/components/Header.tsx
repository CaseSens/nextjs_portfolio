import { GoHomeFill } from "react-icons/go";

const Header = () => {
  return (
    <div className="box-border fixed flex items-center justify-start w-full top-0 p-4 z-10">
      <GoHomeFill size="3rem" color="white" className="cursor-pointer" />
    </div>
  );
};

export default Header;
