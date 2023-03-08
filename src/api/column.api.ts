export const InitialStateColumn: {
  id: number;
  title: string;
  author: string;
  edit: boolean;
  cards: { id: number; title: string; description: string; edit: boolean; author: string; comments: string[] }[];
}[] = [
  {
    id: 1,
    title: 'TODO',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
  {
    id: 2,
    title: 'In Progress',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
  {
    id: 3,
    title: 'Testing',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
  {
    id: 4,
    title: 'Done',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
];

export default InitialStateColumn;
