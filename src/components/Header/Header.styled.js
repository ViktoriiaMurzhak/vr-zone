import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  background-color: transparent;
  padding: 10px 0;

  @media ${breakpoints.minTablet} {
    padding: 0;
  }
`;

export const HeaderWraper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
