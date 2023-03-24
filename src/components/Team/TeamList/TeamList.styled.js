import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const TeamListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 50px;
  margin-bottom: 60px;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;

    margin-bottom: 120px;
  }
`;

export const TeamItem = styled.li`
  padding: 32px 0;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    268.12deg,
    rgba(254, 254, 255, 0.032) -11.04%,
    rgba(255, 255, 255, 0.018) 104.89%
  );

  box-shadow: 0px 22px 18px rgba(0, 0, 0, 0.05);
  border-radius: 34px;

  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
    border-radius: 34px;
  }

  &::before {
    background: linear-gradient(89.83deg, #2563eb 0.11%, #d946ef 58.65%);
    opacity: 0;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const TeamPhoto = styled.img`
  width: 90px;
`;

export const TeamName = styled.h3`
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 10px;
`;

export const TeamRole = styled.p`
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 16px;

  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
