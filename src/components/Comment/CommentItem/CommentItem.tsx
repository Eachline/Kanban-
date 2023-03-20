import React from 'react';
import ButtonIcon from 'components/ui/ButtonIcon';
import Icon from 'components/ui/Icon';
import Form from './Form';
import * as S from './StyleComment';

import { ICommentItem } from 'types/comment/commentItem';
import { useAppDispatch } from 'hook/useAppDispatch';
import { toggleComment, removeComment } from 'features/Column-Slice';

export const CommentItem: React.FC<ICommentItem> = ({ commentData, cardIndex }) => {
  const dispatch = useAppDispatch();

  return (
    <S.Comment>
      <S.CommentHeader>
        <S.CommentInner>
          <Icon type="User" /> {commentData.author}
        </S.CommentInner>
        <ButtonIcon
          onClick={() => dispatch(removeComment({ _id: commentData._id, id: commentData.id, cardIndex: cardIndex }))}
          padding="7px"
          background="transparent"
          border="transparent"
          hover="transparent"
          typeIcon="Close"
        />
      </S.CommentHeader>
      {commentData.edit ? (
        <Form commentData={commentData} cardIndex={cardIndex} />
      ) : (
        <S.CommentBody onDoubleClick={() => dispatch(toggleComment({ _id: commentData._id, id: commentData.id, cardIndex: cardIndex }))}>
          {commentData.comment}
        </S.CommentBody>
      )}
    </S.Comment>
  );
};
