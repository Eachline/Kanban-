import React from 'react';
import * as S from './StyleForm';
import { Input, ButtonIcon } from 'Common/components';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { editColumn } from 'Features/duck/Column-Slice';
import { useForm } from 'react-hook-form';
import { TInitialStateColumn } from 'Features/typings/initialState';

export interface IColumnForm {
  columnData: TInitialStateColumn;
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
