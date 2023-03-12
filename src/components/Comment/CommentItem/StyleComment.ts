import styled from 'styled-components';

export const Comment = styled.div`
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

export const CommentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CommentBody = styled.div`
  max-width: 100%;
  padding: 10px;
  word-wrap: break-word;
`;

export const CommentForm = styled.form<any>`
  width: 100%;
`;

export const CommentText = styled.div<any>``;
