import React from 'react';
import * as S from './StyleForm';
import Input from 'components/ui/Input';
import ButtonIcon from 'components/ui/ButtonIcon';
import { useAppDispatch } from 'hook/useAppDispatch';
import { editColumn } from 'features/Column-Slice';
import { useForm } from 'react-hook-form';
import { TColumn } from 'types/initialState';

export interface IColumnForm {
  columnData: TColumn;
}

export const Form: React.FC<IColumnForm> = ({ columnData }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm({
    shouldUnregister: true,
    defaultValues: { editColumn: columnData.title },
  });

  const onSubmit = (data: { editColumn: string }) => {
    dispatch(editColumn({ id: columnData.id, title: data.editColumn }));
    reset();
  };

  return (
    <S.EditForm onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} name="editColumn" />
      <ButtonIcon typeIcon="Edit" />
    </S.EditForm>
  );
};
