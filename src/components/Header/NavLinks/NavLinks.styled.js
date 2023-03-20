import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, colors } from '../../../helpers/variables';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;

  @media ${breakpoints.minTablet} {
    margin-top: 0;
    display: flex;
    flex-direction: row;
  }
  @media ${breakpoints.desktop} {
    gap: 60px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 20px 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${colors.primaryText};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${breakpoints.minTablet} {
    padding: 30px 0;
    font-size: 14px;
  }

  :hover,
  :focus {
    color: rgb(189 210 255);
  }

  &.active {
    text-decoration: underline;
  }
`;
