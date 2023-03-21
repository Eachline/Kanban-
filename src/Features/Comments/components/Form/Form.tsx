import React from 'react';
import { TextArea, Button } from 'Common/ui-components';
import * as S from './StyledForm';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { editComment } from 'store/duck/Comment-Slice';
import { TComment } from 'Features/types/initialState';

export interface ICommentForm {
  commentData: TComment;
}

export const Form: React.FC<ICommentForm> = ({ commentData }) => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { editComment: commentData.comment },
  });

  const onSubmit = (data: { editComment: string }) => {
    dispatch(editComment({ id: commentData.id, comment: data.editComment }));
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
