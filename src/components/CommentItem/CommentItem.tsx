import ButtonIcon from 'components/ButtonIcon';
import Icon from 'components/Icon';
import React from 'react';
import styled from 'styled-components';

const StyledComment = styled.div`
   width: 590px;
   height: max-content;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0px 10px;
   gap: 10px;

   background: #ffffff;
   border: 1px solid #f5f8fa;
   border-radius: 8px;
`;

const StyledCommentHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const StyledCommentInner = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
`;

const StyledCommentBody = styled.div`
   max-width: 100%;
   padding: 10px;
   word-wrap: break-word;
`;

export const CommentItem: React.FC<any> = ({ handleDeleteComment, commentData }) => {
   return (
      <StyledComment>
         <StyledCommentHeader>
            <StyledCommentInner>
               <Icon type="User" /> {commentData.author}
            </StyledCommentInner>
            <ButtonIcon
               onClick={() => handleDeleteComment(commentData.id)}
               padding="7px"
               background="transparent"
               border="transparent"
               hover="transparent"
               typeIcon="Close"
            />
         </StyledCommentHeader>
         <StyledCommentBody>{commentData.comment}</StyledCommentBody>
      </StyledComment>
   );
};
