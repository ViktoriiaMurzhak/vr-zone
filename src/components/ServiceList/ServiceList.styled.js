import styled from 'styled-components';
import { breakpoints, colors } from 'helpers/variables';

export const ListServ = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media ${breakpoints.minTablet} {
    gap: 30px;
  }
`;

export const ItemServ = styled.li`
  background: linear-gradient(
    268.12deg,
    rgba(254, 254, 255, 0.032) -11.04%,
    rgba(255, 255, 255, 0.018) 104.89%
  );
  box-shadow: 0px 22px 18px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 34px;
  min-width: 280px;
  width: 370px;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.minTablet} {
    min-width: 320px;
    max-width: 324px;
  }
  @media ${breakpoints.desktop} {
    min-width: 370px;
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #8684ed 0%, #4247bb 100%);
  border-radius: 50%;
  width: 65px;
  height: 65px;
`;

export const ItemTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  margin-top: 16px;
  text-align: center;
`;

export const ItemDescript = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  margin-top: 16px;
`;

export const LearnMore = styled.a`
  border: none;
  background: transparent;
  color: ${colors.primaryText};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
  scale: 1;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.1;
  }
`;
