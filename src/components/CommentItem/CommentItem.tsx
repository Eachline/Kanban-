import ButtonIcon from 'components/ButtonIcon';
import Icon from 'components/Icon';
import React from 'react';
import { StyledComment, StyledCommentHeader, StyledCommentInner, StyledCommentBody } from './StyleComment';

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
