import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import styled from "styled-components";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";
import { SvgProps } from "../../../components/Svg";
import LogoChanel from "../../../components/Svg/Icons/Logo"

interface Props {
  isPushed?: boolean;
  isSidebar?: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div<Props>`
  display: ${({ isPushed, isSidebar }) => isPushed && isSidebar ? 'flex' : 'none'};
  align-items: center;
  padding: ${({ isSidebar }) => isSidebar ? '16px' : '0px'};

  ${({ theme }) => theme.mediaQueries.lg} {
    display: ${({ isSidebar }) => isSidebar ? 'none' : 'flex'};
  }
`;

const DropDownWrap = styled.div`
  position: relative;

  &:hover {
    .hovered-item {
      background-color: ${({ theme }) => theme.colors.dropDown};
    }
    .drop-down-inner {
      display: block;
    }
  }
`;

const DropDownInnerWrap = styled.div<Props>`
  display: none;
  position: absolute;
  padding-top: ${({ isSidebar }) => isSidebar ? '0' : '8px'};
  padding-bottom: ${({ isSidebar }) => isSidebar ? '8px' : '0'};
  top: ${({ isSidebar }) => isSidebar ? 'auto' : '40px'};
  bottom: ${({ isSidebar }) => isSidebar ? '40px' : 'auto'};
  left: ${({ isSidebar }) => isSidebar ? '90%' : '50%'};
  transform: translateX(-50%);
  z-index: 50;
`

const DropDown = styled.div<Props>`
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.dropDown};
  position: relative;
  
  &:before {
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    top: ${({ isSidebar }) => isSidebar ? 'auto' : '-4px'};
    bottom: ${({ isSidebar }) => isSidebar ? '-4px' : 'auto'};
    left: ${({ isSidebar }) => isSidebar ? '18px' : '50%'};
    transform: translateX(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colors.dropDown};
  }

  &.active {
    display: block;
  }
`;

const DropDownLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  user-select: none;
  white-space: nowrap;
  transition: all 0.4s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.contrast};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 8px;
  margin-right: 8px;
  transition: all 0.2s;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.dropDown};
  }
`;

const DropDownLabel = styled.span`
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`

const FlagWrap = styled.div`
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
  width: 14px;
  height: 14px;
`

const NavSocial: React.FC<Props> = ({ isPushed, isSidebar }) => {

  return (
    <Wrapper isPushed={isPushed} isSidebar={isSidebar}>
      {socials.map((social) => {
        const Icon = Icons[social.icon];
        const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };

        if (social.items) {
          return (
            <DropDownWrap key={social.label}>
              <ItemWrapper className='hovered-item'>
                <Icon {...iconProps} />
              </ItemWrapper>
              <DropDownInnerWrap className="drop-down-inner" isSidebar={isSidebar}>
                <DropDown isSidebar={isSidebar}>
                  <DropDownLink key={social.items.channel.label} href={social.items.channel.href} target="_blank" aria-label={social.label}>
                    <FlagWrap>
                      <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                        <path d="M128 256C198.692 256 256 198.692 256 128C256 57.3075 198.692 0 128 0C57.3075 0 0 57.3075 0 128C0 198.692 57.3075 256 128 256Z" fill="white"/>
                        <path d="M227.149 48.1543C218.272 49.9091 209.807 52.3865 202.839 53.9349C186.943 57.4962 172.078 69.6768 168.826 91.9736C165.936 111.896 172.646 120.464 169.704 143.638C164.543 184.102 125.73 198.038 107.614 206.502C97.1362 211.354 71.691 222.502 52.0781 231.018C73.3426 246.709 99.562 255.999 128.001 255.999C198.71 255.999 256.001 198.709 256.001 127.999C256.001 97.8574 245.575 70.1413 228.13 48.3091C227.82 48.2575 227.51 48.2059 227.149 48.1543Z" fill="url(#paint0_linear)"/>
                        <path d="M113.6 109.213C123.458 87.8966 119.897 87.845 127.381 67.8192C136.826 42.4257 166.193 49.6515 174.297 50.7354C187.664 52.5419 191.174 47.7935 219.355 43.2515C220.748 43.0451 222.09 42.8386 223.432 42.6838C200 16.5161 165.935 0 128 0C77.058 0 33.0838 29.729 12.4903 72.8257C54.7096 83.3031 100.284 106.064 113.6 109.213ZM85.6257 22.2967C89.3419 22.8645 107.406 45.3161 110.813 102.968C110.813 102.968 87.587 97.3934 82.5806 85.4192C78.4515 75.5612 83.8193 62.6063 85.6257 22.2967ZM227.922 48.0515C227.974 48.1548 228.077 48.2064 228.129 48.3096C227.819 48.258 227.458 48.258 227.148 48.2064C227.406 48.1031 227.664 48.1031 227.922 48.0515ZM0 128C0 117.78 1.1871 107.871 3.45806 98.374C8.10322 102.245 13.0581 106.529 18.3226 111.432C51.6645 142.348 105.91 166.761 125.677 144.051C125.729 144.103 125.781 144.103 125.781 144.155C122.168 148.903 108.387 163.922 82.0644 159.277L40.4645 221.367C15.5871 198.038 0 164.851 0 128Z" fill="url(#paint1_linear)"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="204.871" y1="81.6791" x2="174.673" y2="248.042" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF496A"/>
                            <stop offset="1" stopColor="#E42648"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear" x1="61.7817" y1="188.552" x2="128.549" y2="-4.19941e-05" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00181229" stopColor="#1158F1"/>
                            <stop offset="1" stopColor="#119BED"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </FlagWrap>
                    {social.items.channel.label}
                  </DropDownLink>
                  <DropDownLabel>Chats:</DropDownLabel>
                  {social.items.chats.map((item) => {
                    const IconFlag = Icons[item.icon];
                    return (
                      <DropDownLink key={item.label} href={item.href} target="_blank" aria-label={social.label}>
                        <FlagWrap>
                          <IconFlag width="14px"/>
                        </FlagWrap>
                        {item.label}
                      </DropDownLink>
                    );
                  })}
                </DropDown>
              </DropDownInnerWrap>
            </DropDownWrap>
          );
        }

        return (
          <ItemWrapper key={social.label}>
            <Link external href={social.href} aria-label={social.label}>
              <Icon {...iconProps} />
            </Link>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default NavSocial;