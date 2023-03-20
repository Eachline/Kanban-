import React from 'react';
import { TCard } from 'Features/typings/initialState';
import { Button, Input, TextArea } from 'Common/components';
import * as S from './StyleForm';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { editCard } from 'Features/duck/Column-Slice';
import { useForm, Controller } from 'react-hook-form';

export interface IForm {}

export interface ICardForm {
  card: TCard;
}

export const Form: React.FC<ICardForm> = ({ card }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, control } = useForm({
    shouldUnregister: true,
    defaultValues: { editCardTitle: card.title, editCardDescription: card.description },
  });

  const onSubmit = (data: { editCardTitle: string; editCardDescription: string }) => {
    dispatch(editCard({ id: card.id, _id: card._id, title: data.editCardTitle, description: data.editCardDescription }));
    reset();
  };

  return (
    <S.CardForm onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} name="editCardTitle" outline="1px solid #000" />
      <Controller
        control={control}
        name="editCardDescription"
        render={({ field: { onChange, value } }) => <TextArea onChange={onChange} value={value} height="130px" outline="1px solid #000" />}
      />
      <Button>Изменить</Button>
    </S.CardForm>
  );
};
