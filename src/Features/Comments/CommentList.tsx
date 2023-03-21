import React from 'react';
import { Button, TextArea } from 'Common/ui-components';
import { CommentItem } from 'Features';
import * as S from './StyleCommentList';
import { ICommentListProps } from 'Features/types/commentListProps';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { addComment } from 'store/duck/Comment-Slice';
import { useForm, Controller } from 'react-hook-form';
import { useAppSelector } from 'Common/hook/useAppSelector';

export const CommentList: React.FC<ICommentListProps> = ({ cardData }) => {
  const commentList = useAppSelector((state) => state.comment.filter((comment) => comment.cardId === cardData.id));
  const userName = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { handleSubmit, control, reset } = useForm({
    shouldUnregister: true,
    defaultValues: { comment: '' },
  });

  const onSubmit = (data: { comment: string }) => {
    dispatch(addComment({ cardId: cardData.id, comment: data.comment, username: userName.userName }));
    reset();
  };

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
      {commentList && commentList.map((comment) => <CommentItem key={comment.id} commentData={comment} />)}
    </S.CommentList>
  );
};
