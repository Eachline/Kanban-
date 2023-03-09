import React, { useState } from 'react';
import CommentItem from 'components/CommentItem';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import * as S from './StyleCommentList';

export const CommentList: React.FC<any> = ({ columnIndex, cardData, addComment, onDeleteComment }) => {
  const [commentValue, setCommentValue] = useState('');
  const [commentData, setCommentData] = useState(cardData.comments);
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
      {commentData &&
        commentData.map((comment: any) => (
          <CommentItem key={comment.id} commentData={comment} onDeleteComment={onDeleteComment} columnIndex={columnIndex} cardIndex={cardData.id} />
        ))}
    </S.CommentList>
  );
};
