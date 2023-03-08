export interface IInitialStateColumn {
  id: number;
  title: string;
  author: string;
  edit: boolean;
  cards: {
    id: number;
    title: string;
    description: string;
    edit: boolean;
    author: string;
    comments: string[];
  }[];
}
[];
