import React, { useEffect, useState } from 'react';
import Icon from 'components/ui/Icon';
import Modal from 'components/ui/Modal';
import Button from 'components/ui/Button';
import ButtonIcon from 'components/ui/ButtonIcon';
import CommentList from 'components/Comment/CommentList';
import * as S from './StyleCard';
import { ICardItem } from 'types/card/cardItem';
import Form from './Form';

export const CardItem: React.FC<ICardItem> = ({ columnIndex, cardData, onDeleteCard, editCard, addComment, onDeleteComment, editComment }) => {
  const [card, setCard] = useState({ ...cardData });
  const [cardTitle, setCardTitle] = useState(card.title);
  const [cardDescription, setCardDescription] = useState(card.description);
  const [showEditCard, setShowEditCard] = useState(false);
  const [toggleModalCard, setToggleModalCard] = useState(false);

  const handleToggleModal = () => {
    setToggleModalCard((prevState) => !prevState);
  };

  const handleShowEdit = () => {
    setShowEditCard((prevState) => !prevState);
  };

  const handleChangeCardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const handleChangeCardDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardDescription(e.target.value);
  };

  const updateCard = (title: string, description: string) => {
    setCard({ ...card, title: title, description: description });
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateCard(cardTitle, cardDescription);
    handleShowEdit();
  };

  useEffect(() => {
    if (editCard) editCard(columnIndex, card.id, card);
  }, [card]);

  return (
    <>
      <S.CardWrapper>
        <Button justify="flex-start" onClick={handleToggleModal} background="#fff" width="100%">
          <S.CardButtonInner>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardButtonComments>
              <Icon type="Comment" />
              {card.comments.length}
            </S.CardButtonComments>
          </S.CardButtonInner>
        </Button>
        <Modal showModal={toggleModalCard}>
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
                  card={card}
                />
              ) : (
                <S.CardForm>
                  <S.CardFormHeader>
                    <S.CardTitle onClick={handleShowEdit}>{card.title}</S.CardTitle>
                    <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
                  </S.CardFormHeader>
                  <S.CardDescription onClick={handleShowEdit}>{card.description}</S.CardDescription>
                </S.CardForm>
              )}
            </S.CardHeader>
            <S.CardContent>
              <S.CardInner>
                <S.CardUser>
                  <Icon type="User" /> {card.author}
                </S.CardUser>
                <Button onClick={() => onDeleteCard(columnIndex, card.id)} background="#FF0000" hover="#aa1f1f" color="#fff">
                  Delete
                </Button>
              </S.CardInner>
              <CommentList
                cardData={card}
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
