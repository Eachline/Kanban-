import React from 'react';
import { ModalOverlay, ModalContent, ModalBody } from './StyleModal';

interface IModalProps {
  background?: string;
  showModal?: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ showModal, children }): JSX.Element => {
  return (
    <>
      {showModal && (
        <ModalOverlay>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
