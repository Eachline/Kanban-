import styled from 'styled-components';

export const StyledComment = styled.div`
  width: 590px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  gap: 10px;

  background: #ffffff;
  border: 1px solid #f5f8fa;
  border-radius: 8px;
`;

export const StyledCommentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCommentInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCommentBody = styled.div`
  max-width: 100%;
  padding: 10px;
  word-wrap: break-word;
`;

export const StyledCommentForm = styled.form``;

export const StyledCommentText = styled.div<any>``;
