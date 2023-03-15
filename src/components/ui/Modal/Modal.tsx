import React from 'react';
import * as S from './StyleModal';

interface IModalProps {
  background?: string;
  showModal?: boolean;
  children?: React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onClick?: () => void;
}

export const Modal: React.FC<IModalProps> = ({ showModal, children, onKeyDown, onClick }): JSX.Element => {
  return (
    <>
      {showModal && (
        <S.ModalOverlay onClick={onClick} onKeyDown={onKeyDown}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalBody>{children}</S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};
