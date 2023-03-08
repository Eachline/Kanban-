import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';
import CommentList from 'components/CommentList';
import Icon from 'components/Icon';
import Input from 'components/Input';
import Modal from 'components/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StyledCardWrapper,
  StyledCardContainer,
  StyledCardHeader,
  StyledCardContent,
  StyledCardDescription,
  StyledCardInner,
  StyledCardUser,
} from './StyleCard';

const StyledFormV333 = styled.form<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardItem: React.FC<any> = ({ cardData, setColumnData, onDeleteCard, onEditTitle }) => {
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
      <StyledCardWrapper>
        <Button onClick={handleToggleModal} background="#fff" width="100%">
          {cardData.title}
        </Button>
        <Modal showModal={toggleModalCard}>
          <StyledCardContainer>
            <StyledCardHeader>
              {/* toggle */}
              {cardData.edit ? (
                <StyledFormV333 onChange={handleSubmitForm}>
                  <Input outline="1px solid #000" value={cardTitle} onChange={handleChangeCardTitle} />
                  <ButtonIcon
                    background="transparent"
                    border="transparent"
                    hover="transparent"
                    onClick={() => onEditTitle(cardData.id, cardTitle)}
                    typeIcon="User"
                  />
                </StyledFormV333>
              ) : (
                <>
                  <span onClick={() => onEditTitle(cardData.id, cardTitle)}>{cardTitle}</span>
                  <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
                </>
              )}
            </StyledCardHeader>
            <StyledCardContent>
              <StyledCardDescription>{cardData.description}</StyledCardDescription>
              <StyledCardInner>
                <StyledCardUser>
                  <Icon type="User" /> {cardData.author}
                </StyledCardUser>
                <Button onClick={() => onDeleteCard(cardData.id)} background="#FF0000" hover="#aa1f1f" color="#fff">
                  Delete
                </Button>
              </StyledCardInner>
              <CommentList cardData={cardData} setColumnData={setColumnData} />
            </StyledCardContent>
          </StyledCardContainer>
        </Modal>
      </StyledCardWrapper>
    </>
  );
};
