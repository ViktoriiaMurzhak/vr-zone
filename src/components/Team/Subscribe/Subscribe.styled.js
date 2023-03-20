import { breakpoints } from 'helpers/variables';
import styled from 'styled-components';

export const SubscribeBox = styled.div`
  width: 100%;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(254, 254, 255, 0.0145) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );

  box-shadow: 0px 22px 18px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 34px;

  @media ${breakpoints.minTablet} {
    padding: 40px 50px;
  }
`;

export const SubscTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 16px;

  @media ${breakpoints.minTablet} {
    font-size: 30px;
    margin-bottom: 24px;
  }

  @media ${breakpoints.desktop} {
    font-size: 38px;
  }
`;

export const DescriptionSubsc = styled.p`
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 16px;

  margin-left: auto;
  margin-right: auto;
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

export const SubInputBox = styled.div`
  position: relative;
`;

export const SubInput = styled.input`
  width: 240px;

  height: 80px;
  padding: 0 40px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(254, 254, 255, 0.0348) 0%,
    rgba(255, 255, 255, 0.048) 100%
  );
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.07);
  border-radius: 70px;
  border: 1px solid;
  border-color: transparent;
  font-size: 18px;
  line-height: 30px;

  color: #ffffff;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::placeholder {
    font-size: 18px;
    line-height: 30px;

    color: #ffffff;
  }

  :focus {
    border-color: #ffffff;
  }

  @media ${breakpoints.minTablet} {
    width: 680px;
    height: 80px;
    padding: 0 40px;
    text-align: start;
  }

  @media ${breakpoints.desktop} {
    width: 860px;
    height: 80px;
    padding: 0 40px;
  }
`;

export const BtnSubscribe = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: linear-gradient(90.35deg, #2563eb 0.36%, #d946ef 201.02%);
  border-radius: 70px;
  margin: 16px auto 0 auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  color: #ffffff;

  @media ${breakpoints.minTablet} {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    margin: 0;
  }
`;
