import React from 'react';
import { ButtonIcon, Icon } from 'Common/ui-components';
import Form from '../Form';
import * as S from './StyleComment';

import { ICommentItemProps } from 'Features/types/commentItemProps';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { toggleComment, removeComment } from 'store/duck/Comment-Slice';

export const CommentItem: React.FC<ICommentItemProps> = ({ commentData }) => {
  const dispatch = useAppDispatch();

  return (
    <S.Comment>
      <S.CommentHeader>
        <S.CommentInner>
          <Icon type="User" /> {commentData.author}
        </S.CommentInner>
        <ButtonIcon
          onClick={() => dispatch(removeComment({ id: commentData.id }))}
          padding="7px"
          background="transparent"
          border="transparent"
          hover="transparent"
          typeIcon="Close"
        />
      </S.CommentHeader>
      {commentData.edit ? (
        <Form commentData={commentData} />
      ) : (
        <S.CommentBody onDoubleClick={() => dispatch(toggleComment({ id: commentData.id }))}>{commentData.comment}</S.CommentBody>
      )}
    </S.Comment>
  );
};
