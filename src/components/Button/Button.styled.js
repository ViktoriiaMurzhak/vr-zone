import styled from 'styled-components';
import { colors } from '../../helpers/variables';

export const BtnStandart = styled.button`
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  scale: 1;
  background: linear-gradient(90.35deg, #2563eb 0.36%, #d946ef 201.02%);
  color: ${colors.primaryText};
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    scale: 1.1;
  }
`;
