import { TInitialStateColumn } from 'types/initialState';
import { newGuid } from 'utils/guid';
export const InitialStateColumn: TInitialStateColumn = [
  {
    id: newGuid(),
    title: 'TODO',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
  {
    id: newGuid(),
    title: 'In Progress',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
  {
    id: newGuid(),
    title: 'Testing',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
  {
    id: newGuid(),
    title: 'Done',
    author: 'Kehic',
    edit: false,
    cards: [],
  },
];

export default InitialStateColumn;
