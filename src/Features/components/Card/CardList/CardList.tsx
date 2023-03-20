import React, { useState } from 'react';
import { Button, Modal, Form } from 'Common/components';
import { CardItem } from 'Features/components';
import * as S from './StyleCardList';
import { ICardListProps } from 'Features/typings/cardListProps';
import { useKeyDown } from 'Common/hook/useKeyDown';

export const CardList: React.FC<ICardListProps> = ({ columnData }) => {
  const [modalAddCard, setModalAddCard] = useState(false);

  const handleOpenModal = () => {
    setModalAddCard((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setModalAddCard(false);
  };

  const handleKeyModal = (e: React.KeyboardEvent) => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  useKeyDown(handleKeyModal);

  return (
    <S.CardList>
      <Button onClick={handleOpenModal} background="#fff" hover="#eee" width="100%">
        <span>Добавить карточку</span>
      </Button>
      <Modal onClick={handleOpenModal} showModal={modalAddCard}>
        <Form columnData={columnData} onClose={handleCloseModal} />
      </Modal>
      {columnData.cards && columnData.cards.map((card) => <CardItem key={card.id} cardData={card} columnIndex={columnData.id} />)}
    </S.CardList>
  );
};
