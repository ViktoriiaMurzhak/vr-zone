import React from 'react';
import { Container } from 'components/Container';
import {
  BtnBox,
  BtnVideo,
  HeroBox,
  HeroDescription,
  HeroTitle,
} from './Home.styled';
import Button from 'components/Button/Button';
import { BsPlayCircle } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <Container>
        <HeroBox>
          <HeroTitle>Virtual Reality Business Solutions</HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in.
          </HeroDescription>
          <BtnBox>
            <Button title={'Join Us'} />
            <BtnVideo
              href={'https://www.youtube.com/watch?v=ybyib5pAq7Y'}
              target={'_blank'}
            >
              <BsPlayCircle />
              <p>Watch video</p>
            </BtnVideo>
          </BtnBox>
        </HeroBox>
      </Container>
    </>
  );
}
