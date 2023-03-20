export type TInitialStateColumn = {
  id: string;
  title: string;
  author: string;
  edit: boolean;
  cards: TCard[];
}[];

export type TCard = {
  _id: string;
  id: string;
  title: string;
  description: string;
  edit: boolean;
  author: string;
  comments: TComment[];
};

export type TComment = {
  _id: string;
  id: string;
  author: string;
  edit: boolean;
  comment: string;
};

export type TColumn = {
  id: string;
  title: string;
  author: string;
  edit: boolean;
  cards: TCard[];
};
