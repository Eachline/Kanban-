import React from 'react';
import Button from 'components/ui/Button';
import TextArea from 'components/ui/TextArea';
import CommentItem from 'components/Comment/CommentItem';
import * as S from './StyleCommentList';
import { ICommentList } from 'types/comment/commentList';
import { useAppDispatch } from 'hook/useAppDispatch';
import { addComment } from 'features/Column-Slice';
import { useForm, Controller } from 'react-hook-form';

export const CommentList: React.FC<ICommentList> = ({ cardData }) => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    dispatch(addComment({ id: cardData.id, _id: cardData._id, comment: data.comment }));
    reset();
  };

  const dispatch = useAppDispatch();

  return (
    <S.CommentList>
      <S.FormComment onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="comment"
          render={({ field: { onChange, value } }) => <TextArea border="1px solid #eee" height="170px" value={value} onChange={onChange} />}
        />
        <Button>Добавить комментарий</Button>
      </S.FormComment>
      {cardData.comments && cardData.comments.map((comment) => <CommentItem key={comment.id} commentData={comment} cardIndex={cardData.id} />)}
    </S.CommentList>
  );
};
