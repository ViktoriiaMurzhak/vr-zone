import React from 'react';
import Facebook from '../TeamSvg/Facebook';
import Linkedin from '../TeamSvg/Linkedin';
import Skype from '../TeamSvg/Skype';
import Twitter from '../TeamSvg/Twitter';
import { Item, List } from './SocialList.styled';

export default function SocialList() {
  return (
    <List>
      <Item>
        <Skype />
      </Item>
      <Item>
        <Linkedin />
      </Item>
      <Item>
        <Twitter />
      </Item>
      <Item>
        <Facebook />
      </Item>
    </List>
  );
}
