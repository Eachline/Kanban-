import React, { useState } from 'react';
import Icon from 'components/ui/Icon';
import Modal from 'components/ui/Modal';
import Button from 'components/ui/Button';
import ButtonIcon from 'components/ui/ButtonIcon';
import CommentList from 'components/Comment/CommentList';
import * as S from './StyleCard';
import { ICardItem } from 'types/card/cardItem';
import Form from './Form';
import { useKeyDown } from 'hook/useKeyDown';

export const CardItem: React.FC<ICardItem> = ({ columnIndex, cardData, onDeleteCard, editCard, addComment, onDeleteComment, editComment }) => {
  const [cardTitle, setCardTitle] = useState(cardData.title);
  const [cardDescription, setCardDescription] = useState(cardData.description);
  const [showEditCard, setShowEditCard] = useState(false);
  const [toggleModalCard, setToggleModalCard] = useState(false);

  const handleOpenModal = () => {
    setToggleModalCard(true);
  };

  const handleCloseModal = () => {
    setToggleModalCard(false);
  };

  const handleShowEdit = () => {
    setShowEditCard((prevState) => !prevState);
  };

  const handleKeyModal = (e: any) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };
  useKeyDown(handleKeyModal);

  const handleChangeCardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const handleChangeCardDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardDescription(e.target.value);
  };

  const updateCard = (title: string, description: string) => {
    const newCard = { ...cardData, title, description };
    editCard(columnIndex, newCard.id, newCard);
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateCard(cardTitle, cardDescription);
    handleShowEdit();
  };

  return (
    <>
      <S.CardWrapper>
        <Button justify="flex-start" onClick={handleOpenModal} background="#fff" width="100%">
          <S.CardButtonInner>
            <S.CardTitle>{cardData.title}</S.CardTitle>
            <S.CardButtonComments>
              <Icon type="Comment" />
              {cardData.comments.length}
            </S.CardButtonComments>
          </S.CardButtonInner>
        </Button>
        <Modal showModal={toggleModalCard} onClick={handleCloseModal}>
          <S.CardContainer>
            <S.CardHeader>
              {showEditCard ? (
                <Form
                  columnIndex={columnIndex}
                  onSubmit={handleSubmitForm}
                  valueInput={cardTitle}
                  valueArea={cardDescription}
                  onChangeArea={handleChangeCardDesc}
                  onChangeInput={handleChangeCardTitle}
                  onClick={editCard}
                  card={cardData}
                />
              ) : (
                <S.CardForm>
                  <S.CardFormHeader>
                    <S.CardTitle onClick={handleShowEdit}>{cardData.title}</S.CardTitle>
                    <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleCloseModal} typeIcon="Close" />
                  </S.CardFormHeader>
                  <S.CardDescription onClick={handleShowEdit}>{cardData.description}</S.CardDescription>
                </S.CardForm>
              )}
            </S.CardHeader>
            <S.CardContent>
              <S.CardInner>
                <S.CardUser>
                  <Icon type="User" /> {cardData.author}
                </S.CardUser>
                <Button onClick={() => onDeleteCard(columnIndex, cardData.id)} background="#FF0000" hover="#aa1f1f" color="#fff">
                  Delete
                </Button>
              </S.CardInner>
              <CommentList
                cardData={cardData}
                addComment={addComment}
                onDeleteComment={onDeleteComment}
                editComment={editComment}
                columnIndex={columnIndex}
              />
            </S.CardContent>
          </S.CardContainer>
        </Modal>
      </S.CardWrapper>
    </>
  );
};
