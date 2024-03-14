import { ComponentPropsWithoutRef } from "react";

interface LayeredPeaksProps extends ComponentPropsWithoutRef<"svg"> {}

function LayeredPeaks({ ...svgProps }: LayeredPeaksProps) {
  return (
    <svg viewBox="0 0 1920 436" fill="none" {...svgProps}>
      <path
        d="M0 137L274 0L549 56L823 41L1097 141L1371 45L1646 34L1920 37V436H1646H1371H1097H823H549H274H0V137Z"
        fill="#F5730A"
      />
      <path
        d="M0 218L274 150L549 83L823 123L1097 98L1371 69L1646 206L1920 93V436H1646H1371H1097H823H549H274H0V218Z"
        fill="#DA5B09"
      />
      <path
        d="M0 153L274 237L549 173L823 207L1097 190L1371 240L1646 186L1920 155V436H1646H1371H1097H823H549H274H0V153Z"
        fill="#BE4407"
      />
      <path
        d="M0 251L274 255L549 273L823 329L1097 263L1371 308L1646 266L1920 221V436H1646H1371H1097H823H549H274H0V251Z"
        fill="#A32D04"
      />
      <path
        d="M0 309L274 352L549 311L823 306L1097 371L1371 313L1646 384L1920 363V436H1646H1371H1097H823H549H274H0V309Z"
        fill="#871400"
      />
    </svg>
  );
}

export default LayeredPeaks;
