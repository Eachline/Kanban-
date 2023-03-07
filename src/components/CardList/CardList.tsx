import CardItem from 'components/CardItem';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { newGuid } from './../../utils/guid';
import Modal from 'components/Modal';
import Form from 'components/Form';

const StyledCardList = styled.div`
   margin: 0px 0px 10px 0px;
   padding: 16px 16px 16px 16px;
   min-width: 292px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   height: max-content;
   background: #fff;
   border-radius: 10px;
`;

export const CardList: React.FC<any> = ({ columnData, author }) => {
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
         {card && card.map((card: any) => <CardItem onDeleteCard={handleDeleteCard} key={card.id} cardData={card} />)}
      </StyledCardList>
   );
};
