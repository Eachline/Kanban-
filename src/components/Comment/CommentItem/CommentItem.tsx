import React, { useState } from 'react';
import ButtonIcon from 'components/ui/ButtonIcon';
import Icon from 'components/ui/Icon';
import Form from './Form';
import * as S from './StyleComment';

import { ICommentItem } from 'types/comment/commentItem';

export const CommentItem: React.FC<ICommentItem> = ({ commentData, onDeleteComment, editComment, columnIndex, cardIndex }) => {
  const [valueComment, setValueComment] = useState(commentData.comment);
  const [showEditComment, setShowEditComment] = useState(false);

  const handleShowEdit = () => {
    setShowEditComment((prevState) => !prevState);
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateComment(valueComment);
    handleShowEdit();
  };

  const handleChangeCommentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueComment(e.target.value);
  };

  const updateComment = (value: string) => {
    const newComment = { ...commentData, comment: value };
    editComment(columnIndex, cardIndex, newComment.id, newComment);
  };

  const handleKeyEditForm = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleShowEdit();
      updateComment(valueComment);
    }
  };

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
      {showEditComment ? (
        <Form onSubmit={handleSubmitForm} onChange={handleChangeCommentValue} onKeyDown={handleKeyEditForm} value={valueComment} />
      ) : (
        <S.CommentBody onDoubleClick={handleShowEdit}>{commentData.comment}</S.CommentBody>
      )}
    </S.Comment>
  );
};
