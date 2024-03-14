import { ComponentPropsWithoutRef } from "react";

interface BullseyeGradProps extends ComponentPropsWithoutRef<"svg"> {

}

function BullseyeGrad({...svgProps}: BullseyeGradProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 800 800"
      {...svgProps}
    >
      <g fillOpacity="0.17">
        <circle fill="#000000" cx="400" cy="400" r="600" />
        <circle fill="#230046" cx="400" cy="400" r="500" />
        <circle fill="#2f0052" cx="400" cy="400" r="400" />
        <circle fill="#3b075e" cx="400" cy="400" r="300" />
        <circle fill="#48156a" cx="400" cy="400" r="200" />
        <circle fill="#552277" cx="400" cy="400" r="100" />
      </g>
    </svg>
  );
}

export default BullseyeGrad;
