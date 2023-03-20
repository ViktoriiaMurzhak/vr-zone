import { Container } from 'components/Container';
import Team from 'components/Team/Team';
import React from 'react';
import {
  ContactBox,
  ContactsTitle,
  DescriptionContacts,
} from './Contacts.styled';

export default function Contacts() {
  return (
    <ContactBox>
      <Container>
        <ContactsTitle>Met Our Team</ContactsTitle>
        <DescriptionContacts>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </DescriptionContacts>
        <Team />
      </Container>
    </ContactBox>
  );
}
