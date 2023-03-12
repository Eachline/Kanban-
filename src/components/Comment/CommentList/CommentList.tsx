import React, { useState } from 'react';
import Button from 'components/ui/Button';
import TextArea from 'components/ui/TextArea';
import CommentItem from 'components/Comment/CommentItem';
import * as S from './StyleCommentList';
import { ICommentList } from 'types/comment/commentList';

export const CommentList: React.FC<ICommentList> = ({ columnIndex, cardData, addComment, onDeleteComment, editComment }) => {
  const { comments } = cardData;
  const [commentValue, setCommentValue] = useState('');

  const handleCommentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCommentValue('');
  };

  return (
    <S.CommentList>
      <S.FormComment onSubmit={handleCommentSubmit}>
        <TextArea border="1px solid #eee" height="170px" value={commentValue} onChange={handleCommentValue} />
        <Button onClick={() => addComment(columnIndex, cardData.id, commentValue)}>Добавить комментарий</Button>
      </S.FormComment>
      {comments &&
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            commentData={comment}
            onDeleteComment={onDeleteComment}
            editComment={editComment}
            columnIndex={columnIndex}
            cardIndex={cardData.id}
          />
        ))}
    </S.CommentList>
  );
};
