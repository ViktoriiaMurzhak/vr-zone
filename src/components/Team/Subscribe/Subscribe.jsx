import React from 'react';
import {
  BtnSubscribe,
  DescriptionSubsc,
  SubInput,
  SubInputBox,
  SubscribeBox,
  SubscTitle,
} from './Subscribe.styled.js';

import { FaTelegramPlane } from 'react-icons/fa';

export default function Subscribe() {
  return (
    <SubscribeBox>
      <SubscTitle>Subscribe to get the Latest News</SubscTitle>
      <DescriptionSubsc>
        We recommended you to subscribe to our newspaper,drop your email below
        to get daily update about us
      </DescriptionSubsc>
      <SubInputBox>
        <SubInput placeholder="Enter your email..." />
        <BtnSubscribe>
          <FaTelegramPlane color="#FFFFFF" />
          Subscribe
        </BtnSubscribe>
      </SubInputBox>
    </SubscribeBox>
  );
}
