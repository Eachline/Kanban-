import Button from 'components/Button';
import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon';
import CommentList from 'components/CommentList';
import Icon from 'components/Icon';
import Input from 'components/Input';
import Modal from 'components/Modal';
import * as S from './StyleCard';

export const CardItem: React.FC<any> = ({ columnIndex, cardData, onDeleteCard, editCard, onEditTitle, addComment, onDeleteComment }) => {
  const [toggleModalCard, setToggleModalCard] = useState(false);
  const [cardTitle, setCardTitle] = useState(cardData.title);

  const handleToggleModal = () => {
    setToggleModalCard((prevState) => !prevState);
  };

  const handleSubmitForm = (e: React.ChangeEvent) => {
    e.preventDefault();
  };

  const handleChangeCardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  return (
    <>
      <S.CardWrapper>
        <Button onClick={handleToggleModal} background="#fff" width="100%">
          {cardData.title}
        </Button>
        <Modal showModal={toggleModalCard}>
          <S.CardContainer>
            <S.CardHeader>
              {/* toggle */}
              {cardData.edit ? (
                <S.CardForm onChange={handleSubmitForm}>
                  <Input outline="1px solid #000" value={cardTitle} onChange={handleChangeCardTitle} />
                  <ButtonIcon
                    background="transparent"
                    border="transparent"
                    hover="transparent"
                    onClick={() => onEditTitle(cardData.id, cardTitle)}
                    typeIcon="User"
                  />
                </S.CardForm>
              ) : (
                <>
                  <span onClick={() => onEditTitle(cardData.id, cardTitle)}>{cardTitle}</span>
                  <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
                </>
              )}
            </S.CardHeader>
            <S.CardContent>
              <S.CardDescription>{cardData.description}</S.CardDescription>
              <S.CardInner>
                <S.CardUser>
                  <Icon type="User" /> {cardData.author}
                </S.CardUser>
                <Button onClick={() => onDeleteCard(columnIndex, cardData.id)} background="#FF0000" hover="#aa1f1f" color="#fff">
                  Delete
                </Button>
              </S.CardInner>
              <CommentList cardData={cardData} addComment={addComment} onDeleteComment={onDeleteComment} columnIndex={columnIndex} />
            </S.CardContent>
          </S.CardContainer>
        </Modal>
      </S.CardWrapper>
    </>
  );
};
