import styled from 'styled-components';
// import { colors } from 'helpers/variables';

export const BurgerOverlay = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  z-index: 1000;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  background: rgb(17 24 39 / 30%);
  backdrop-filter: blur(5px);
  text-align: center;
`;
