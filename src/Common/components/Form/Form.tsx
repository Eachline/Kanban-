import React from 'react';
import { Button, ButtonIcon, Input } from 'Common/ui-components';
import * as S from './StyleForm';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { TInitialStateColumn } from 'Features/types/initialState';
import { addCard } from 'store/duck/Card-Slice';
import { useForm, Controller } from 'react-hook-form';
import { useAppSelector } from 'Common/hook/useAppSelector';

export interface IFormProps {
  onClose: () => void;
  columnData: TInitialStateColumn;
}

export const Form: React.FC<IFormProps> = ({ onClose, columnData }) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: { cardTitle: '', cardDescription: '' },
  });

  const onSubmit = async (data: { cardTitle: string; cardDescription: string }) => {
    dispatch(addCard({ columnId: columnData.id, title: data.cardTitle, description: data.cardDescription, username: userName.userName }));
    onClose();
    reset();
  };

  const optionsForm = {
    required: 'Поле обязательно к заполнению',
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.HeaderForm>
        <S.HeaderTitle>{columnData.title}</S.HeaderTitle>
        <ButtonIcon typeButton="button" background="transparent" border="transparent" hover="transparent" onClick={onClose} typeIcon="Close" />
      </S.HeaderForm>
      <S.FieldList>
        <Controller
          name="cardTitle"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              error={errors}
              register={register}
              optionsForm={optionsForm}
              name="cardTitle"
              outline="1px solid #000"
              placeholder="Название карточки"
            />
          )}
        />
        <Controller
          name="cardDescription"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              error={errors}
              optionsForm={optionsForm}
              register={register}
              name="cardDescription"
              outline="1px solid #000"
              placeholder="Описание карточки"
            />
          )}
        />
      </S.FieldList>
      <S.ButtonList>
        <Button type="button" onClick={onClose} background="#FF0000" color="#fff" hover="#aa1f1f">
          Cancel
        </Button>
        <Button type="submit" background="#008000" color="#fff" hover="#046804">
          Add Card
        </Button>
      </S.ButtonList>
    </S.Form>
  );
};
