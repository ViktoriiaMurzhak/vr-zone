import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const FooterStyled = styled.footer`
  border-top: 1px solid;
  border-color: rgb(19 42 92);
  width: 100%;
  padding: 20px 0;
`;

export const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;

  @media ${breakpoints.desktop} {
    gap: 200px;
  }
`;

export const Rights = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: rgb(38 52 83 / 96%);
`;
