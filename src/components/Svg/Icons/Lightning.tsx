import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 16 16" fill="none" {...props}>
            <circle cx="8.00016" cy="7.99998" r="6.66667" fill="#FFDB1C"/>
            <path d="M4 9.54286L10.5143 0L8.8 6.8H12.2286L5.71429 16L7.42857 9.54286H4Z" fill="#07162D"/>
        </Svg>
    );
};

export default Icon;
