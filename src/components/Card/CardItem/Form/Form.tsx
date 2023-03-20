import React from 'react';
import { TCard } from 'types/initialState';
import Input from 'components/ui/Input';
import TextArea from 'components/ui/TextArea';
import Button from 'components/ui/Button';
import * as S from './StyleForm';
import { useAppDispatch } from 'hook/useAppDispatch';
import { editCard } from 'features/Column-Slice';
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

  const onSubmit = (data: any) => {
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
