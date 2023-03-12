import styled from 'styled-components';

export interface IModalContent {
  background?: string;
}

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`;

export const ModalContent = styled.div<IModalContent>`
  margin: 10% auto auto auto;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  width: max-content;
  height: max-content;
  border-radius: 10px;
  background: ${(props) => props.background || props.theme.colors.white};
`;

export const ModalBody = styled.div``;
