import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactBox = styled.div`
  padding: 30px 0;
  animation: ${fadeIn} 1s ease-out;
  @media ${breakpoints.minTablet} {
    padding: 50px 0;
  }

  @media ${breakpoints.desktop} {
    padding: 70px 0;
  }
`;

export const ContactsTitle = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 16px;

  @media ${breakpoints.minTablet} {
    font-size: 34px;
    margin-bottom: 30px;
  }

  @media ${breakpoints.desktop} {
    font-size: 42px;
  }
`;

export const DescriptionContacts = styled.p`
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 16px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    margin-bottom: 40px;
    max-width: 768px;
  }
`;
