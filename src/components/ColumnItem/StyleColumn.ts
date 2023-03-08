import styled from 'styled-components';

export const StyleColumnItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  height: max-content;
  padding: 16px 16px 16px 16px;
  max-width: 324px;
  border-radius: 10px;
  background-color: #f5f8fa;
`;

export const StyledColumnInner = styled.div`
  padding: 0px 5px 0px 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledColumnItem = styled.span<any>``;

export const StyledEditForm = styled.form<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
