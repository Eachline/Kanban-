import React, { useState } from 'react';
import CardItem from 'components/CardItem';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Form from 'components/Form';
import * as S from './StyleCardList';

export const CardList: React.FC<any> = ({ columnData, addCard, onDeleteCard, editCard, addComment, onDeleteComment }) => {
  const { title, id } = columnData;
  const [card, setCard] = useState(columnData.cards);
  const [modalAddCard, setModalAddCard] = useState(false);
  const handleAddItemModal = () => {
    setModalAddCard((prevState) => !prevState);
  };

  const handleToggleEditTitle = (id: number, title: string) => {
    setCard((prevState: any) => prevState.map((cardEdit: any) => (cardEdit.id === id ? { ...cardEdit, title, edit: !cardEdit.edit } : cardEdit)));
  };

  const handleToggleEditDescription = (id: number, description: string) => {
    setCard((prevState: any) =>
      prevState.map((cardEdit: any) => (cardEdit.id === id ? { ...cardEdit, description, edit: !cardEdit.edit } : cardEdit)),
    );
  };

  return (
    <S.CardList>
      <Button onClick={handleAddItemModal} background="#fff" hover="#eee" width="100%">
        <span>Добавить карточку</span>
      </Button>
      <Modal showModal={modalAddCard}>
        <Form title={title} columnIndex={id} onClick={addCard} onClose={handleAddItemModal} />
      </Modal>
      {card &&
        card.map((card: any) => (
          <CardItem
            key={card.id}
            cardData={card}
            onDeleteCard={onDeleteCard}
            onEditTitle={handleToggleEditTitle}
            onEditDesc={handleToggleEditDescription}
            editCard={editCard}
            addComment={addComment}
            onDeleteComment={onDeleteComment}
            columnIndex={id}
          />
        ))}
    </S.CardList>
  );
};
