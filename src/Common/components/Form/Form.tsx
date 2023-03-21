import React from 'react';
import { Button, ButtonIcon, Input } from 'Common/ui-components';
import * as S from './StyleForm';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { TInitialStateColumn } from 'Features/types/initialState';
import { addCard } from 'store/duck/Card-Slice';
import { useForm } from 'react-hook-form';

export interface IFormProps {
  onClose: () => void;
  columnData: TInitialStateColumn;
}

export const Form: React.FC<IFormProps> = ({ onClose, columnData }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm({
    shouldUnregister: true,
    defaultValues: { cardTitle: '', cardDescription: '' },
  });

  const onSubmit = (data: { cardTitle: string; cardDescription: string }) => {
    dispatch(addCard({ columnId: columnData.id, title: data.cardTitle, description: data.cardDescription }));
    onClose();
    reset();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.HeaderForm>
        <S.HeaderTitle>{columnData.title}</S.HeaderTitle>
        <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={onClose} typeIcon="Close" />
      </S.HeaderForm>
      <S.FieldList>
        <Input register={register} name="cardTitle" outline="1px solid #000" placeholder="Название карточки" />
        <Input register={register} name="cardDescription" outline="1px solid #000" placeholder="Описание карточки" />
      </S.FieldList>
      <S.ButtonList>
        <Button type="submit" onClick={onClose} background="#FF0000" color="#fff" hover="#aa1f1f">
          Cancel
        </Button>
        <Button type="submit" background="#008000" color="#fff" hover="#046804">
          Add Card
        </Button>
      </S.ButtonList>
    </S.Form>
  );
};
