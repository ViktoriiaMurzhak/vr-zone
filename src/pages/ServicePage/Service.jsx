import { Container } from 'components/Container';
import ServiceList from 'components/ServiceList/ServiceList';
import React from 'react';
import { DescriptionService, ServiceBox, TitleService } from './Service.styled';

export default function Service() {
  return (
    <ServiceBox>
      <Container>
        <TitleService>Our Service </TitleService>
        <DescriptionService>
          We turn information into actionable insights We work to understand
          your issues and are driven to ask better questions in the pursuit of
          making work.
        </DescriptionService>
        <ServiceList />
      </Container>
    </ServiceBox>
  );
}
