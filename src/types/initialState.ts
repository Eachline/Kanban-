export type TInitialStateColumn = {
  id: string;
  title: string;
  author: string;
  edit: boolean;
  cards: TCard[];
}[];

export type TCard = {
  id: string;
  title: string;
  description: string;
  edit: boolean;
  author: string;
  comments: TComment[];
};

export type TComment = {
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
