import { TComment } from '../initialState';

export interface ICommentItem {
  columnIndex: string;
  cardIndex: string;
  commentData: TComment;
  onDeleteComment: (columnId: string, cardId: string, commentId: string) => void;
  editComment: (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => void;
}
