import { Container } from 'components/Container';
import React from 'react';
import Address from './Address/Address';

import { FooterBox, FooterStyled, Rights } from './Footer.styled';
import LinkList from './LinkList/LinkList';

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <Container>
          <FooterBox>
            <Address />
            <LinkList />
          </FooterBox>
        </Container>
      </FooterStyled>
      <Container>
        <Rights>
          <span dangerouslySetInnerHTML={{ __html: '&copy;' }} /> 2023 VRZone. -
          All rights reserved.
        </Rights>
      </Container>
    </>
  );
}
