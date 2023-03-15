import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-self: start;
`;

export const AddressLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  :hover p {
    color: rgb(189 210 255);
  }
`;

export const AddressText = styled.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 2;

  color: rgb(255, 255, 255);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${breakpoints.desktop} {
    font-size: 16px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;

  @media ${breakpoints.desktop} {
    gap: 14px;
  }
`;

export const SocialItem = styled.li`
  width: 28px;
  height: 28px;
  background: linear-gradient(
    180deg,
    rgba(254, 254, 255, 0.0145) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.desktop} {
    width: 32px;
    height: 32px;
  }
`;

export const Social = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.1;
  }
`;
