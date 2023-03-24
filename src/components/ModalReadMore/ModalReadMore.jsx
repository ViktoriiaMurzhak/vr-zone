import React from 'react';
import {
  Backdrop,
  ModalBox,
  ModalCLoseBtn,
  ModalTitle,
} from './ModalReadMore.styled';
import { GrClose } from 'react-icons/gr';

import { ModalText } from './ModalReadMore.styled';

export default function ModalReadMore({
  title,
  handleModalClose,
  handleBackdropClose,

  isModalClosing,
}) {
  return (
    <Backdrop onClick={handleBackdropClose}>
      <ModalBox className={isModalClosing ? 'modal-leave' : 'show'}>
        <ModalCLoseBtn onClick={handleModalClose}>
          <GrClose />
        </ModalCLoseBtn>
        <ModalTitle>{title}</ModalTitle>

        <ModalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
          amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
          consectetur adipisicing elit. Labore eius molestiae facere, natus
          reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
          laborum iure inventore possimus laboriosam qui nam.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Duis at dictum risus, non
          suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis
          nuncoe scelerisque in. orem ipsum dolor sit amet, consectetur
          adipisicing elit. Labore eius molestiae facere, natus reprehenderit
          eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure
          inventore possimus laboriosam qui nam.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu.
          Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque
          in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
          Magfini, error. Tempora odit laborum iure inventore possimus
          laboriosam qui nam.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Duis at dictum risus, non suscipit arcu.
        </ModalText>
      </ModalBox>
    </Backdrop>
  );
}
