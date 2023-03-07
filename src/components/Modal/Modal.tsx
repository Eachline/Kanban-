import React from 'react';
import styled from 'styled-components';

interface IModalProps {
   background?: string;
   showModal?: boolean;
   children?: React.ReactNode;
}

export interface IModalContent {
   background?: string;
}

const ModalOverlay = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   top: 0;
   left: 0;
   overflow: auto;
`;

const ModalContent = styled.div<IModalContent>`
   display: flex;
   flex-direction: column;
   padding: 20px 20px 20px 20px;
   width: max-content;
   height: max-content;
   border-radius: 10px;
   background: ${(props) => props.background || props.theme.colors.white};
`;

const ModalBody = styled.div``;

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
