import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, colors } from '../../../helpers/variables';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
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

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${colors.primaryText};
  :hover,
  :focus,
  &.active {
    /* font-weight: 700; */
    text-decoration: underline;
  }
`;
