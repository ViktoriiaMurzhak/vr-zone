import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

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

export const AboutUsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 30px 0;
  animation: ${fadeIn} 1s ease-out;
  @media ${breakpoints.minTablet} {
    gap: 30px;
    padding: 50px 0;
  }
  @media ${breakpoints.desktop} {
    gap: 8px;
  }
`;

export const AboutUsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
    :nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;

export const DescrBox = styled.div``;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;

  @media ${breakpoints.minTablet} {
    font-size: 30px;
    margin-bottom: 15px;
  }

  @media ${breakpoints.desktop} {
    font-size: 42px;
    line-height: 55px;
    margin-bottom: 20px;
    margin-top: 70px;
  }
`;
export const DescrText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media ${breakpoints.minTablet} {
    margin-bottom: 30px;
  }

  @media ${breakpoints.desktop} {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 34px;
  }
`;

export const AboutImg = styled.img`
  display: none;

  @media ${breakpoints.minTablet} {
    display: block;
    width: 280px;
  }

  @media ${breakpoints.desktop} {
    width: 588px;
  }
`;
