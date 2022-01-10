import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Box/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
}

interface StyledModalProps {
  ref?: React.MutableRefObject<HTMLDivElement | null>;
}

const StyledModal = styled.div<StyledModalProps>`
  background-color: #fff;
  border-radius: 16px 16px 0 0;  
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    min-width: 416px;
    max-width: 100%;
    border-radius: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 32px 24px;
  }
  
  .closeModal {
    width: 24px;
    height: 24px;
  }
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const ModalBody = styled.div`
  padding: 0 16px 24px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 32px 32px;
  }
`
const useOutsideClickHandler = (ref: any, handler: (() => void) | undefined, enabledListener = false) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!enabledListener || !ref.current || ref.current.contains(event.target)) {
            return;
        }
        // eslint-disable-next-line no-unused-expressions
        handler && handler();
        console.log('USING EVENT LISTENERS')

      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [enabledListener, ref, handler]
  )
};


const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
}) => {
  const modalRef = useRef(null);

  useOutsideClickHandler(modalRef, onDismiss, true);

  return (
    <StyledModal ref={modalRef}>
      <ModalHeader>
        <ModalTitle>
          {onBack && (
            <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
              <ArrowBackIcon color="primary"/>
            </IconButton>
          )}
          <Heading>{title}</Heading>
        </ModalTitle>
        {!hideCloseButton && (
          <IconButton variant="text" className="closeModal" scale="sm" ml="12px" onClick={onDismiss}
                      aria-label="Close the dialog">
            <CloseIcon width="24px" color="card"/>
          </IconButton>
        )}
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
    </StyledModal>
  );
}

export default Modal;
