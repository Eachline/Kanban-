import styled from 'styled-components';

export const CardWrapper = styled.div``;

export const CardContainer = styled.div`
  min-width: 900px;
  max-width: 900px;
  height: max-content;
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CardInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 30px 0px;
  border-bottom: 2px solid #eeeeee;
`;

export const CardDescription = styled.p`
  width: 100%;
  display: block;
`;

export const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardFormHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButtonInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardButtonComments = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
export const CardTitle = styled.span``;
