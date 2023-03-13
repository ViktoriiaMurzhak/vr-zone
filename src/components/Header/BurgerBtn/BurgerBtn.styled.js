import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const BurgerBtnStyled = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background: transparent;

  @media ${breakpoints.minTablet} {
    display: none;
  }
`;
