import React, { useState } from 'react';
import CardItem from 'components/CardItem';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Form from 'components/Form';
import { newGuid } from './../../utils/guid';
import { StyledCardList } from './StyleCardList';

export const CardList: React.FC<any> = ({ columnData, setColumnData, author }) => {
  const { title } = columnData;
  const [card, setCard] = useState(columnData.cards);
  const [modalAddCard, setModalAddCard] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState({ title: '', description: '', comments: '' });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleAddCardItem = () => {
    const newItemCard = {
      id: newGuid(),
      title: textFieldValue.title,
      description: textFieldValue.description,
      edit: false,
      author: author,
      comments: [],
    };
    setCard((prevState: any) => [newItemCard, ...prevState]);
    setTextFieldValue({ ...textFieldValue, title: '', description: '' });
    handleAddItemModal();
  };

  const handleDeleteCard = (id: number) => {
    setCard((prevState: any) => prevState.filter((card: any) => card.id !== id));
  };

  const handleAddItemModal = () => {
    setModalAddCard((prevState) => !prevState);
  };

  const handleToggleEditTitle = (id: number, title: string) => {
    setCard((prevState: any) => prevState.map((cardEdit: any) => (cardEdit.id === id ? { ...cardEdit, title, edit: !cardEdit.edit } : cardEdit)));
  };

  return (
    <StyledCardList>
      <Button onClick={handleAddItemModal} background="#fff" hover="#eee" width="100%">
        <span>Добавить карточку</span>
      </Button>
      <Modal showModal={modalAddCard}>
        <Form
          title={title}
          onSubmit={handleSubmitForm}
          value={textFieldValue}
          onChange={handleFieldChange}
          onClick={handleAddCardItem}
          onClose={handleAddItemModal}
        />
      </Modal>
      {card &&
        card.map((card: any) => (
          <CardItem onDeleteCard={handleDeleteCard} setColumnDate={setColumnData} onEditTitle={handleToggleEditTitle} key={card.id} cardData={card} />
        ))}
    </StyledCardList>
  );
};
