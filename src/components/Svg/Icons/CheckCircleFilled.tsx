import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 12 12" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 2.688 2.688 0 6 0C9.312 0 12 2.688 12 6C12 9.312 9.312 12 6 12C2.688 12 0 9.312 0 6ZM4.66665 7.44667L8.58665 3.52666C8.84665 3.26666 9.27332 3.26666 9.53332 3.52666C9.79332 3.78667 9.79332 4.20667 9.53332 4.46667L5.13999 8.86C4.87999 9.12 4.45999 9.12 4.19999 8.86L2.47332 7.13333C2.21332 6.87333 2.21332 6.45333 2.47332 6.19333C2.73332 5.93333 3.15332 5.93333 3.41332 6.19333L4.66665 7.44667Z"
        fill="#1DC872"
      />
    </Svg>  );
};

export default Icon;
