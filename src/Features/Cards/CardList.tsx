import React, { useState } from 'react';
import { Button, Modal } from 'Common/ui-components';
import { Form } from 'Common/components';
import { CardItem } from 'Features';
import * as S from './StyleCardList';
import { ICardListProps } from 'Features/types/cardListProps';
import { useKeyDown } from 'Common/hook/useKeyDown';
import { useAppSelector } from 'Common/hook/useAppSelector';

export const CardList: React.FC<ICardListProps> = ({ columnData }) => {
  const [modalAddCard, setModalAddCard] = useState(false);

  const cardList = useAppSelector((state) => state.card.filter((card) => card.columnId === columnData.id));

  const handleOpenModal = () => {
    setModalAddCard(true);
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
      <Modal onClick={handleCloseModal} showModal={modalAddCard}>
        <Form columnData={columnData} onClose={handleCloseModal} />
      </Modal>
      {cardList && cardList.map((card) => <CardItem key={card.id} cardData={card} columnIndex={columnData.id} />)}
    </S.CardList>
  );
};
