import React from "react";
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll'
import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from "../../config";
import { BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks } from "../../types";
import { Button } from "../../../../components/Button";
import ArrowUp from "../../../../components/Svg/Icons/ArrowUp";

import FooterInfo from "./FoolerInfo";
import About from "./About";
import Product from "./Product";
import Service from "./Service";
import Community from "./Community";
import Support from './Support'

interface Props extends
  BSWPriceProps,
  FooterStatisticProps,
  FooterAboutLinks,
  FooterProductLinks,
  FooterServiceLinks
{
  isPushed: boolean;
  onClick: () => void;
  buyBswLink: string
}

const Wrapper = styled.footer<{ isPushed: boolean }>`
  color: #fff;
  background: ${({ theme }) => theme.colors.footer};
  padding: 32px 16px;
  transition: padding-left 0.2s;
  z-index: 10;
`;

const InnerRow = styled.div`
  display: grid;
  max-width: 1120px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "footer-info footer-info"
                        "about about"
                        "product product"
                        "service service"
                        "community support";

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(3, minmax(110px, 1fr));
    grid-template-areas: "footer-info footer-info footer-info"
                          "about product service"
                          "community support .";
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));
    grid-template-areas: "footer-info . about product service "
                          "footer-info . community support .";
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, minmax(110px, 1fr));
    grid-template-areas: "footer-info footer-info footer-info"
                          "about product service"
                          "community support .";
  }
  
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));
    grid-template-areas: "footer-info . about product service "
                          "footer-info . community support .";
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 132px;
    grid-template-areas: "footer-info . about product service community"
                          "footer-info . about product service support";
  }
`;

const Footer: React.FC<Props> = (
  {
    isPushed,
    BSWPriceLabel,
    BSWPriceValue,
    onClick,
    footerStatistic,
    aboutLinks,
    productLinks,
    serviceLinks,
    buyBswLink
  }) => {
  return (
    <Wrapper isPushed={isPushed}>
      <InnerRow>
        <FooterInfo BSWPriceLabel={BSWPriceLabel} BSWPriceValue={BSWPriceValue} onClick={onClick} footerStatistic={footerStatistic} buyBswLink={buyBswLink}/>
        <About aboutLinks={aboutLinks}/>
        <Product productLinks={productLinks}/>
        <Service serviceLinks={serviceLinks}/>
        <Community/>
        <Support/>
        {/* <BtnUp onClick={()=> scroll.scrollToTop()}><ArrowUp color='white'/></BtnUp> */}
      </InnerRow>
    </Wrapper>
  );
};

export default Footer;
