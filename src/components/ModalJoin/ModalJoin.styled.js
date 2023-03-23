import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

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
  padding: 60px 20px 40px;
  background-color: white;
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: auto;
  position: relative;
  z-index: 1000;

  @media ${breakpoints.minTablet} {
    max-width: 800px;
    padding: 32px 40px 32px 20px;
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
  /* min-width: 280px;
  max-width: 400px; */
  margin-bottom: 30px;
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
    margin-bottom: 40px;
  }
  @media ${breakpoints.desktop} {
    font-size: 44px;
  }
`;

export const InputBox = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;

  height: 80px;
  padding: 0 40px;
  text-align: center;
  background: linear-gradient(
    89.83deg,
    rgb(37, 99, 235) 0.11%,
    rgb(217, 70, 239) 58.65%
  );
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.07);
  border-radius: 70px;
  border: 2px solid;
  border-color: transparent;
  font-size: 18px;
  line-height: 30px;

  color: #ffffff;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::placeholder {
    font-size: 18px;
    line-height: 30px;

    color: #ffffff;
  }

  :focus {
    border-color: rgb(27 32 162);
  }

  @media ${breakpoints.minTablet} {
    height: 80px;
    padding: 0 40px;
    text-align: start;
  }

  @media ${breakpoints.desktop} {
    height: 80px;
    padding: 0 40px;
  }
`;

export const Subscribe = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: linear-gradient(90.35deg, #2563eb 0.36%, #d946ef 201.02%);
  border-radius: 70px;
  margin: 16px auto 0 auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  text-align: center;
  color: #ffffff;

  @media ${breakpoints.minTablet} {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    margin: 0;
  }
`;
