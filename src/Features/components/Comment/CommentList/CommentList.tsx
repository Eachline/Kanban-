import React from 'react';
import { Button, TextArea } from 'Common/components';
import { CommentItem } from 'Features/components';
import * as S from './StyleCommentList';
import { ICommentListProps } from 'Features/typings/commentListProps';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { addComment } from 'Features/duck/Column-Slice';
import { useForm, Controller } from 'react-hook-form';

export const CommentList: React.FC<ICommentListProps> = ({ cardData }) => {
  const { handleSubmit, control, reset } = useForm({
    shouldUnregister: true,
    defaultValues: { comment: '' },
  });

  const onSubmit = (data: { comment: string }) => {
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
