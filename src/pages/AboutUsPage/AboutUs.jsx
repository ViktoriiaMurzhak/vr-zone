import Button from 'components/Button/Button';
import { Container } from 'components/Container';
import React, { useEffect, useState } from 'react';
import {
  AboutImg,
  AboutUsItem,
  AboutUsList,
  DescrBox,
  DescrText,
  Title,
} from './AboutUs.styled';
import img from '../../helpers/images/about-us1.png';
import ModalReadMore from 'components/ModalReadMore/ModalReadMore';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyModalClose);
    return () => {
      document.removeEventListener('keydown', handleKeyModalClose);
    };
  });

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };
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
              <Button title={'Read more'} onClick={handleModalOpen} />
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
              <Button title={'Read more'} onClick={handleModalOpen} />
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
              <Button title={'Read more'} onClick={handleModalOpen} />
            </DescrBox>
            <AboutImg src={img} />
          </AboutUsItem>
        </AboutUsList>
      </Container>
      {isModalOpen === true && (
        <ModalReadMore
          handleModalClose={handleModalClose}
          title="More about Us!"
          handleBackdropClose={handleBackdropClose}
        />
      )}
    </>
  );
}
