import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <rect x="1" y="1" width="18" height="18" rx="5" fill="#E4EFFF" stroke="white" strokeWidth="2"/>
      <path d="M7 7V13" stroke="#749BD8" strokeLinecap="round"/>
      <path d="M10 7V13" stroke="#749BD8" strokeLinecap="round"/>
      <path d="M13 7V13" stroke="#749BD8" strokeLinecap="round"/>
    </Svg>
  );
};

export default Icon;
