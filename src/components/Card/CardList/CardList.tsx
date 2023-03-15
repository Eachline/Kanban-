import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Modal from 'components/ui/Modal';
import Form from 'components/ui/Form';
import CardItem from 'components/Card/CardItem';
import * as S from './StyleCardList';
import { ICardList } from 'types/card/cardList';
import { useKeyDown } from 'hook/useKeyDown';

export const CardList: React.FC<ICardList> = ({ columnData, addCard, onDeleteCard, editCard, addComment, onDeleteComment, editComment }) => {
  const { title, id, cards } = columnData;
  const [modalAddCard, setModalAddCard] = useState(false);

  const handleOpenModal = () => {
    setModalAddCard((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setModalAddCard(false);
  };

  const handleKeyModal = (e: any) => {
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
        <Form title={title} columnIndex={id} onClick={addCard} onClose={handleCloseModal} />
      </Modal>
      {cards &&
        cards.map((card) => (
          <CardItem
            key={card.id}
            cardData={card}
            onDeleteCard={onDeleteCard}
            editCard={editCard}
            addComment={addComment}
            onDeleteComment={onDeleteComment}
            editComment={editComment}
            columnIndex={id}
          />
        ))}
    </S.CardList>
  );
};
