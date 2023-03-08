import React, { useState } from 'react';
import CommentItem from 'components/CommentItem';
import { newGuid } from './../../utils/guid';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import { StyledCommentList, StyledFormComment } from './StyleCommentList';

export const CommentList: React.FC<any> = ({ cardData }) => {
  const { comments, author } = cardData;
  const [commentValue, setCommentValue] = useState('');
  const [comment, setComment] = useState(comments);

  const handleCommentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const handleAddComment = () => {
    const newCommentItem = {
      id: newGuid(),
      author: author,
      edit: false,
      comment: commentValue,
    };
    setComment((prevState: any) => [newCommentItem, ...prevState]);
    setCommentValue('');
  };

  const handleDeleteComment = (id: number) => {
    setComment((prevState: any) => prevState.filter((comment: any) => comment.id !== id));
  };

  const handleCommentSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledCommentList>
      <StyledFormComment onSubmit={handleCommentSubmit}>
        <TextArea border="1px solid #eee" height="170px" value={commentValue} onChange={handleCommentValue} />
        <Button onClick={handleAddComment}>Добавить комментарий</Button>
      </StyledFormComment>
      {comment && comment.map((comment: any) => <CommentItem key={comment.id} commentData={comment} handleDeleteComment={handleDeleteComment} />)}
    </StyledCommentList>
  );
};
