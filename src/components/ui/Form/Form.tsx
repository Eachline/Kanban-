import React from 'react';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import ButtonIcon from 'components/ui/ButtonIcon';
import * as S from './StyleForm';
import { useAppDispatch } from 'hook/useAppDispatch';
import { TColumn } from 'types/initialState';
import { addCard } from 'features/Column-Slice';
import { useForm } from 'react-hook-form';

export interface IFormProps {
  onClose: () => void;
  columnData: TColumn;
}

export const Form: React.FC<IFormProps> = ({ onClose, columnData }) => {
  const { register, handleSubmit, reset } = useForm({
    shouldUnregister: true,
    defaultValues: { cardTitle: '', cardDescription: '' },
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: { cardTitle: string; cardDescription: string }) => {
    dispatch(addCard({ id: columnData.id, title: data.cardTitle, description: data.cardDescription }));
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
