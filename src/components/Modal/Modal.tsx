import React from 'react';
import * as S from './StyleModal';

interface IModalProps {
  background?: string;
  showModal?: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ showModal, children }): JSX.Element => {
  return (
    <>
      {showModal && (
        <S.ModalOverlay>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalBody>{children}</S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};
