import styled, { keyframes } from 'styled-components';
import heroBg from '../../helpers/images/hero-bg.png';
import { breakpoints } from 'helpers/variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroBox = styled.div`
  background: transparent;
  padding: 50px 0 50px 0;
  animation: ${fadeIn} 1s ease-out;

  @media ${breakpoints.minTablet} {
    display: block;
    padding: 60px 0;
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: 470px;
    background-position: bottom -42px right -60px;
  }
  @media ${breakpoints.desktop} {
    padding: 90px 0 120px 0;
    background-size: 700px;
    background-position: bottom -58px right -96px;
  }
`;

export const HeroTitle = styled.h1`
  min-width: 280px;
  max-width: 400px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.02em;
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
    max-width: 560px;
    font-size: 58px;
  }
`;

export const HeroDescription = styled.p`
  min-width: 280px;
  margin-bottom: 30px;

  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);

  @media ${breakpoints.minTablet} {
    width: 380px;
    margin-bottom: 40px;
  }
  @media ${breakpoints.desktop} {
    width: 560px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BtnVideo = styled.a`
  padding: 5px 0;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1;
  gap: 8px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.1;
  }
`;
