import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props}>
            <circle cx="5.13371" cy="10.4316" r="2.00871" stroke="#749BD8" stroke-width="1.25"/>
            <circle cx="14.3686" cy="5.13371" r="2.00871" stroke="#749BD8" stroke-width="1.25"/>
            <circle cx="14.3686" cy="15.7001" r="2.00871" stroke="#749BD8" stroke-width="1.25"/>
            <line x1="6.87842" y1="8.9519" x2="12.2137" y2="5.87156" stroke="#749BD8" stroke-width="1.25"/>
            <line y1="-0.625" x2="6.16068" y2="-0.625" transform="matrix(0.866025 0.5 0.5 -0.866025 7.19092 11.3623)" stroke="#749BD8" stroke-width="1.25"/>
        </Svg>
    );
};

export default Icon;