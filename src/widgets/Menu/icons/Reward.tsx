import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M8.116 10.404L12 6.52L15.886 10.406L18.146 8.146L12 2L5.856 8.144L8.116 10.404ZM2 12L4.26 9.74L6.52 12L4.26 14.26L2 12ZM8.116 13.596L12 17.48L15.886 13.594L18.146 15.853L12 22L5.856 15.856L5.853 15.853L8.116 13.596ZM17.48 12L19.74 9.74L22 12L19.74 14.26L17.48 12ZM14.292 11.998H14.294V12L12 14.294L9.709 12.004L9.705 12L9.709 11.997L10.11 11.595L10.305 11.4L12 9.706L14.293 11.999L14.292 11.998Z"/>
    </Svg>
  );
};

export default Icon;
