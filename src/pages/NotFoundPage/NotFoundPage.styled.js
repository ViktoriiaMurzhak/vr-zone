import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const Box = styled.div`
  ${`min-height: calc(100vh - 306px);`}

  @media ${breakpoints.minTablet} {
    ${`min-height: calc(100vh - 312px);`}
  }
  @media ${breakpoints.desktop} {
    ${`min-height: calc(100vh - 330px);`}
  }
`;

export const Title = styled.h2`
  padding: 50px 0 70px 0;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.02em;
  background: linear-gradient(89.83deg, #2563eb 0.11%, #d946ef 58.65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);

  @media ${breakpoints.minTablet} {
    font-size: 38px;
    margin-bottom: 40px;
    padding: 100px 0 160px 0;
  }
  @media ${breakpoints.desktop} {
    font-size: 58px;
    padding: 130px 0 200px 0;
  }
`;
