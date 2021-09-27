import React from "react";
import styled from "styled-components";
import { PanelFooterProps } from "../types";

interface Props extends PanelFooterProps {
  isPushed: boolean;
}

const Wrapper = styled.div<Props>`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: ${({ isPushed }) => (isPushed ? "block" : "none")};
  }
  
  .move-enter {
    opacity: 0.01;
    transform: translatey(-40px)
  }

  .move-enter-active {
    opacity: 1;
    transform: translatey(0);
    transition: all 500ms ease-in;
  }

  .move-exit {
    opacity: 1;
    transform: translateY(0)
  }

  .move-exit-active {
    opacity: 0.01;
    transform: translateY(10px);
    transition: all 500ms ease-in;
  }
`;

const PanelFooter2: React.FC<Props> = ({isPushed,dealsForUIKit,showDeals}) => {
  return (
    <Wrapper isPushed={isPushed}>
      { showDeals &&
       dealsForUIKit()
      }
    </Wrapper>
  );
};

export default PanelFooter2;
