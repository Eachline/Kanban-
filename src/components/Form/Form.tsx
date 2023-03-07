import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import ButtonIcon from 'components/ButtonIcon';

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 30px;
   width: 900px;
   height: max-content;
   background: #fff;
`;

const StyledFieldList = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 30px;
`;

const StyledButtonList = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 30px;
`;

const StyledHeaderForm = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 30px;
`;

export interface IFormProps {
   onSubmit?: (e: React.ChangeEvent<HTMLFormElement>) => void;
   value?: { title?: string; description?: string; commets?: string };
   onChange?: (e: any) => void;
   onClick?: () => void;
   onClose?: () => void;
   title?: string;
}

export const Form: React.FC<IFormProps> = ({ onSubmit, value, onChange, onClick, onClose, title }) => {
   console.log(title);
   return (
      <StyledForm onSubmit={onSubmit}>
         <StyledHeaderForm>
            <span>{title}</span> <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={onClose} typeIcon="Close" />
         </StyledHeaderForm>
         <StyledFieldList>
            <Input value={value?.title} name="title" onChange={onChange} outline="1px solid #000" placeholder="Название карточки" />
            <Input value={value?.description} name="description" onChange={onChange} outline="1px solid #000" placeholder="Описание карточки" />
         </StyledFieldList>
         <StyledButtonList>
            <Button onClick={onClose} background="#FF0000" color="#fff" hover="#aa1f1f">
               Cancel
            </Button>
            <Button onClick={onClick} background="#008000" color="#fff" hover="#046804">
               Add Card
            </Button>
         </StyledButtonList>
      </StyledForm>
   );
};
