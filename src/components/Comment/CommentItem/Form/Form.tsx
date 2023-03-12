import React from 'react';
import TextArea from 'components/ui/TextArea';
import Button from 'components/ui/Button';
import * as S from './StyledForm';

export interface ICommentForm {
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Form: React.FC<ICommentForm> = ({ onSubmit, onKeyDown, value, onChange }) => {
  return (
    <S.CommentForm onSubmit={onSubmit}>
      <TextArea width="100%" height="140px" onKeyDown={onKeyDown} value={value} onChange={onChange} />
      <Button>Изменить</Button>
    </S.CommentForm>
  );
};
