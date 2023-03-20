import React, { useState } from 'react';
import Form from './Form';
import * as S from './StyleCard';
import { Icon, Modal, Button, ButtonIcon } from 'Common/components';
import { CommentList } from 'Features/components';
import { ICardItemProps } from 'Features/typings/cardItemProps';
import { useKeyDown } from 'Common/hook/useKeyDown';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { toggleCard, removeCard } from 'Features/duck/Column-Slice';

export const CardItem: React.FC<ICardItemProps> = ({ cardData }) => {
  const [toggleModalCard, setToggleModalCard] = useState(false);

  const handleOpenModal = () => {
    setToggleModalCard(true);
  };

  const handleCloseModal = () => {
    setToggleModalCard(false);
  };

  const handleKeyModal = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useKeyDown(handleKeyModal);

  const dispatch = useAppDispatch();

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
              {cardData.edit ? (
                <Form card={cardData} />
              ) : (
                <S.CardForm>
                  <S.CardFormHeader>
                    <S.CardTitle onDoubleClick={() => dispatch(toggleCard({ id: cardData.id, _id: cardData._id }))}>{cardData.title}</S.CardTitle>
                    <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleCloseModal} typeIcon="Close" />
                  </S.CardFormHeader>
                  <S.CardDescription onDoubleClick={() => dispatch(toggleCard({ id: cardData.id, _id: cardData._id }))}>
                    {cardData.description}
                  </S.CardDescription>
                </S.CardForm>
              )}
            </S.CardHeader>
            <S.CardContent>
              <S.CardInner>
                <S.CardUser>
                  <Icon type="User" /> {cardData.author}
                </S.CardUser>
                <Button
                  onClick={() => dispatch(removeCard({ id: cardData.id, _id: cardData._id }))}
                  background="#FF0000"
                  hover="#aa1f1f"
                  color="#fff">
                  Delete
                </Button>
              </S.CardInner>
              <CommentList cardData={cardData} />
            </S.CardContent>
          </S.CardContainer>
        </Modal>
      </S.CardWrapper>
    </>
  );
};
