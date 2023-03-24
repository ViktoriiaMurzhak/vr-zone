import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const modalShow = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const modalClose = keyframes`
  from {
     opacity: 1;
      transform: scale(1)
  }
  to {
     opacity: 0;
      transform: scale(0.8)
  }
`;

export const Backdrop = styled.div`
  z-index: 999;
  background: rgb(17 24 39 / 60%);
  backdrop-filter: blur(7px);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  /* pointer-events: none; */
`;

export const ModalBox = styled.div`
  max-width: 400px;
  max-height: 400px;
  padding: 30px 20px;
  background-color: white;
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: auto;
  position: relative;
  z-index: 1000;
  overflow: auto;
  transform: scale(0);
  transition: transform 0.3s ease-out;

  &.show {
    animation: ${modalShow} 0.3s ease-out forwards;
  }

  &.modal-leave {
    animation: ${modalClose} 0.3s ease-out;
  }

  @media ${breakpoints.minTablet} {
    max-width: 800px;
    padding: 32px;
  }
`;

export const ModalCLoseBtn = styled.button`
  color: black;
  fill: black;
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    scale: 1.2;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.02em;
  text-align: center;
  background: linear-gradient(89.83deg, #2563eb 0.11%, #d946ef 58.65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);

  @media ${breakpoints.minTablet} {
    font-size: 38px;
    margin-bottom: 20px;
  }
  @media ${breakpoints.desktop} {
    font-size: 44px;
  }
`;

export const ModalText = styled.p`
  text-align: center;
  color: #000000;
`;
