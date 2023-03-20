import React from 'react';
import { TextArea, Button } from 'Common/components';
import * as S from './StyledForm';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { editComment } from 'Features/duck/Column-Slice';
import { TComment } from 'Features/typings/initialState';

export interface ICommentForm {
  commentData: TComment;
  cardIndex: string;
}

export const Form: React.FC<ICommentForm> = ({ commentData, cardIndex }) => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { editComment: commentData.comment },
  });

  const onSubmit = (data: { editComment: string }) => {
    dispatch(editComment({ _id: commentData._id, id: commentData.id, cardIndex: cardIndex, comment: data.editComment }));
    reset();
  };

  return (
    <S.CommentForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="editComment"
        render={({ field: { value, onChange } }) => <TextArea width="100%" height="140px" value={value} onChange={onChange} />}
      />
      <Button>Изменить</Button>
    </S.CommentForm>
  );
};
