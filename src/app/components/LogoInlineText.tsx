import { IconType } from "react-icons/lib";

interface LogoInlineTextProps {
  Logo: IconType;
  title: string;
  value: string;
}

function LogoInlineText({ Logo, title, value }: LogoInlineTextProps) {
  return (
    <span className="flex items-center gap-2 text-[14px]">
      <Logo size={"1rem"} />
      <p className="grow">{title}</p>
      <p>{value}</p>
    </span>
  );
}

export default LogoInlineText;