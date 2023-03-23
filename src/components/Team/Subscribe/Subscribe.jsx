import React, { useState } from 'react';
import {
  BtnSubscribe,
  DescriptionSubsc,
  SubInput,
  SubInputBox,
  SubscribeBox,
  SubscTitle,
} from './Subscribe.styled.js';

import { FaTelegramPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value.trim());
  };

  const handleSubscribe = () => {
    // eslint-disable-next-line
    let re = /^\w{1,}[\.-\w]*\w{1,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === '') {
      toast('Enter your email address');
    } else if (!re.test(String(email).toLocaleLowerCase())) {
      toast(
        'The email was entered incorrectly! Example of a validated email: name@gmail.com'
      );
    } else {
      toast('Thanks for subscribing! Wait for letters to your email.');
      setEmail('');
    }
  };
  return (
    <SubscribeBox>
      <SubscTitle>Subscribe to get the Latest News</SubscTitle>
      <DescriptionSubsc>
        We recommended you to subscribe to our newspaper,drop your email below
        to get daily update about us
      </DescriptionSubsc>
      <SubInputBox>
        <SubInput
          placeholder="Enter your email..."
          type="email"
          name="email"
          onChange={handleEmail}
          value={email}
          onBlur={handleEmail}
        />
        <BtnSubscribe onClick={handleSubscribe}>
          <FaTelegramPlane color="#FFFFFF" />
          Subscribe
        </BtnSubscribe>
      </SubInputBox>
    </SubscribeBox>
  );
}
