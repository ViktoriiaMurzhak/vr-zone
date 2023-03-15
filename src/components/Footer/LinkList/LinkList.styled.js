import styled from 'styled-components';
import { breakpoints } from 'helpers/variables';

export const ListBox = styled.div`
  display: none;

  @media ${breakpoints.minTablet} {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
  }
  @media ${breakpoints.desktop} {
    gap: 60px;
  }
`;

export const FooterList = styled.ul`
  display: none;

  @media ${breakpoints.minTablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }
  @media ${breakpoints.desktop} {
    gap: 12px;
  }
`;

export const ListItem = styled.li``;

export const ListLink = styled.a`
  font-size: 12px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.9);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: rgb(189 210 255);
  }

  @media ${breakpoints.desktop} {
    font-size: 16px;
  }
`;
