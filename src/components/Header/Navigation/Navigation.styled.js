import styled from 'styled-components';
import { breakpoints } from '../../../helpers/variables';

export const NavigationStyled = styled.div`
  display: none;

  @media ${breakpoints.minTablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavStyled = styled.div`
  @media ${breakpoints.mobile} {
    display: none;
  }
  @media ${breakpoints.minTablet} {
    display: block;
    margin-right: 80px;
  }
  @media ${breakpoints.desktop} {
    display: block;
    margin-right: 120px;
  }
`;
