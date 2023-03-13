import styled from 'styled-components';
import { breakpoints } from '../../helpers/variables';

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  @media ${breakpoints.minTablet} {
    padding: 30px 0;
  }
`;

export const LogoName = styled.p`
  margin-left: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
