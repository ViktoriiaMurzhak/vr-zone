import React from 'react';

import {
  FooterAddress,
  AddressLink,
  AddressText,
  Social,
  SocialItem,
  SocialList,
} from './Address.styled';

import { GoLocation, GoMail, GoDeviceMobile } from 'react-icons/go';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';

import Logo from '../../Logo/Logo';

export default function Address() {
  return (
    <FooterAddress>
      <Logo />
      <AddressLink href="https://goo.gl/maps/dMjBaiQ9C813Q6pj7" target="_blank">
        <GoLocation />
        <AddressText>Dhaka, Bangladesh</AddressText>
      </AddressLink>

      <AddressLink href="tel:+0943833399">
        <GoDeviceMobile />
        <AddressText>0943833399</AddressText>
      </AddressLink>

      <AddressLink href="mailto:support@zone.com">
        <GoMail />
        <AddressText>support@zone.com</AddressText>
      </AddressLink>
      <SocialList>
        <SocialItem>
          <Social href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </Social>
        </SocialItem>
        <SocialItem>
          <Social href="https://twitter.com/" target="_blank">
            <FaTwitter />
          </Social>
        </SocialItem>
        <SocialItem>
          <Social href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </Social>
        </SocialItem>
        <SocialItem>
          <Social href="https://www.pinterest.com/" target="_blank">
            <FaPinterestP />
          </Social>
        </SocialItem>
      </SocialList>
    </FooterAddress>
  );
}
