import ButtonIcon from 'components/ButtonIcon';
import Icon from 'components/Icon';
import React from 'react';
import * as S from './StyleComment';

export const CommentItem: React.FC<any> = ({ commentData, onDeleteComment, columnIndex, cardIndex }) => {
  return (
    <S.Comment>
      <S.CommentHeader>
        <S.CommentInner>
          <Icon type="User" /> {commentData.author}
        </S.CommentInner>
        <ButtonIcon
          onClick={() => onDeleteComment(columnIndex, cardIndex, commentData.id)}
          padding="7px"
          background="transparent"
          border="transparent"
          hover="transparent"
          typeIcon="Close"
        />
      </S.CommentHeader>
      <S.CommentBody>{commentData.comment}</S.CommentBody>
    </S.Comment>
  );
};
