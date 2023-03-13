import React, { useEffect, useState } from 'react';
import ButtonIcon from 'components/ui/ButtonIcon';
import Icon from 'components/ui/Icon';
import Form from './Form';
import * as S from './StyleComment';

import { ICommentItem } from 'types/comment/commentItem';

export const CommentItem: React.FC<ICommentItem> = ({ commentData, onDeleteComment, editComment, columnIndex, cardIndex }) => {
  const [comment, setComment] = useState({ ...commentData });
  const [valueComment, setValueComment] = useState(comment.comment);
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
    setComment({ ...comment, comment: value });
  };

  const handleKeyEditForm = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleShowEdit();
      updateComment(valueComment);
    }
  };

  useEffect(() => {
    if (editComment) editComment(columnIndex, cardIndex, comment.id, comment);
  }, [comment]);

  return (
    <S.Comment>
      <S.CommentHeader>
        <S.CommentInner>
          <Icon type="User" /> {commentData.author}
        </S.CommentInner>
        <ButtonIcon
          onClick={() => onDeleteComment(columnIndex, cardIndex, comment.id)}
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
        <S.CommentBody onDoubleClick={handleShowEdit}>{comment.comment}</S.CommentBody>
      )}
    </S.Comment>
  );
};
