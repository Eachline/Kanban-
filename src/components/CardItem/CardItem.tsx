import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';
import CommentList from 'components/CommentList';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCardWrapper = styled.div``;

const StyledCardContainer = styled.div`
   min-width: 600px;
   height: max-content;
   padding: 15px 15px 15px 15px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 15px;
`;
const StyledCardHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
const StyledCardContent = styled.div`
   max-width: 600px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 15px;
`;

const StyledCardInner = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0px 0px 30px 0px;
   border-bottom: 2px solid #eeeeee;
`;

const StyledCardDescription = styled.p`
   width: 100%;
   display: block;
`;

const StyledCardUser = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
`;

export const CardItem: React.FC<any> = ({ cardData, onDeleteCard }) => {
   const [toggleModalCard, setToggleModalCard] = useState(false);
   console.log(cardData);

   const handleToggleModal = () => {
      setToggleModalCard((prevState) => !prevState);
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
                     <span>{cardData.title}</span>
                     <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
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
                     <CommentList cardData={cardData} />
                     {/* comments */}
                  </StyledCardContent>
               </StyledCardContainer>
            </Modal>
         </StyledCardWrapper>
      </>
   );
};
