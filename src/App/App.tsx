import React, { useState } from 'react';
import * as S from './StyleApp';
import { Input, ButtonIcon, Modal } from 'Common/ui-components';
import { ColumnList } from 'Features';
import { useKeyDown } from 'Common/hook/useKeyDown';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { addAuthorColumn } from 'store/duck/Column-Slice';
import { userName } from 'store/duck/User-Slice';
export const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(!localStorage.getItem('persist:column') ? true : false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: { username: '' },
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleKeyModal = (e: React.KeyboardEvent) => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  const onSubmit = (data: { username: string }) => {
    dispatch(addAuthorColumn({ username: data.username }));
    dispatch(userName({ userName: data.username }));
    handleCloseModal();
  };

  const optionsForm = {
    required: 'Поле обязательно к заполнению',
    minLength: {
      value: 4,
      message: 'Минимальное количество символов 4',
    },
  };

  useKeyDown(handleKeyModal);

  return (
    <S.Container>
      <ColumnList />
      <Modal showModal={showModal}>
        <S.Register onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                error={errors}
                register={register}
                optionsForm={optionsForm}
                onChange={onChange}
                name="username"
                outline="1px solid #EEEEEE"
                placeholder="Введите ваше имя"
              />
            )}
          />
          <ButtonIcon padding="0px 30px" background="transparent" border="transparent" hover="transparent" typeIcon="Edit" />
        </S.Register>
      </Modal>
    </S.Container>
  );
};
