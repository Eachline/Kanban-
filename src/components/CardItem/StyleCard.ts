import styled from 'styled-components';

export const StyledCardWrapper = styled.div``;

export const StyledCardContainer = styled.div`
  min-width: 900px;
  height: max-content;
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledCardContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const StyledCardInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 30px 0px;
  border-bottom: 2px solid #eeeeee;
`;

export const StyledCardDescription = styled.p`
  width: 100%;
  display: block;
`;

export const StyledCardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
