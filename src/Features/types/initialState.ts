export type TInitialStateColumn = {
  id: string;
  title: string;
  author: string;
  edit: boolean;
};

export type TCard = {
  columnId: string;
  id: string;
  title: string;
  description: string;
  edit: boolean;
  author: string;
};

export type TComment = {
  cardId: string;
  id: string;
  author: string;
  edit: boolean;
  comment: string;
};
