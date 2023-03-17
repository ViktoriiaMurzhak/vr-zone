import Button from 'components/Button/Button';
import { Container } from 'components/Container';
import React from 'react';
import {
  AboutImg,
  AboutUsItem,
  AboutUsList,
  DescrBox,
  DescrText,
  Title,
} from './AboutUs.styled';
import img from '../../helpers/images/about-us1.png';

export default function AboutUs() {
  return (
    <>
      <Container>
        <AboutUsList>
          <AboutUsItem>
            <DescrBox>
              <Title>
                We complete every projects extra care as customer need
              </Title>
              <DescrText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
                amet, consectetur adipisicing elit. Labore eius molestiae
                facere, natus reprehenderit eaque eum, autem ipsam. Magfini,
                error. Tempora odit laborum iure inventore possimus laboriosam
                qui nam.
              </DescrText>
              <Button title={'Read more'} />
            </DescrBox>
            <AboutImg src={img} />
          </AboutUsItem>
          <AboutUsItem>
            <DescrBox>
              <Title>
                We complete every projects extra care as customer need
              </Title>
              <DescrText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
                amet, consectetur adipisicing elit. Labore eius molestiae
                facere, natus reprehenderit eaque eum, autem ipsam. Magfini,
                error. Tempora odit laborum iure inventore possimus laboriosam
                qui nam.
              </DescrText>
              <Button title={'Read more'} />
            </DescrBox>
            <AboutImg src={img} />
          </AboutUsItem>
          <AboutUsItem>
            <DescrBox>
              <Title>
                We complete every projects extra care as customer need
              </Title>
              <DescrText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
                amet, consectetur adipisicing elit. Labore eius molestiae
                facere, natus reprehenderit eaque eum, autem ipsam. Magfini,
                error. Tempora odit laborum iure inventore possimus laboriosam
                qui nam.
              </DescrText>
              <Button title={'Read more'} />
            </DescrBox>
            <AboutImg src={img} />
          </AboutUsItem>
        </AboutUsList>
      </Container>
    </>
  );
}
