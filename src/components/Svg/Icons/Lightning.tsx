import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props}>
            <g clip-path="url(#clip0)">
                <circle cx="12" cy="12" r="10" fill="#1263F1"/>
                <mask id="mask0"  maskUnits="userSpaceOnUse" x="9" y="1" width="16" height="23">
                    <path d="M12.75 11.25L9.75 21.75L11.25 24L20.25 23.25L23.25 15L24.75 6.75L15 1.5L12.75 8.25V11.25Z" fill="#F93B5D"/>
                </mask>
                <g mask="url(#mask0)">
                    <circle cx="12" cy="12" r="10" fill="#F93B5D"/>
                </g>
                <path d="M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </Svg>
    );
};

export default Icon;
