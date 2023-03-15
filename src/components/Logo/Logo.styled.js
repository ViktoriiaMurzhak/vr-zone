import styled from 'styled-components';
import { breakpoints, colors } from '../../helpers/variables';

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px 0;

  @media ${breakpoints.minTablet} {
    padding: 10px 0;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LogoName = styled.p`
  margin-left: 8px;

  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.primaryText};
`;
