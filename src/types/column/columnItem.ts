import { TColumn, TCard, TComment } from '../initialState';

export interface IColumnItem {
  columnData: { id: string; title: string; author: string; edit: boolean; cards: TCard[] };
  onDeleteColumn: (id: string) => void;
  editColumn: (id: string, column: TColumn) => void;
  addCard: (id: string, title: string, description: string) => void;
  onDeleteCard: (columnIndex: string, cardIndex: string) => void;
  editCard: (columnIndex: string, cardIndex: string, card: TCard) => void;
  addComment: (columnId: string, cardId: string, value: string) => void;
  onDeleteComment: (columnId: string, cardId: string, commentId: string) => void;
  editComment: (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => void;
}
