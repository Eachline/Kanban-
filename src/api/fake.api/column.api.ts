import { TInitialStateColumn } from 'types/initialState';
import { newGuid } from 'utils/guid';
import { InitialStateCard } from './card.api';

export const InitialStateColumn: TInitialStateColumn = [
  {
    id: newGuid(),
    title: 'TODO',
    author: 'Kehic',
    edit: false,
    cards: InitialStateCard,
  },
  {
    id: newGuid(),
    title: 'In Progress',
    author: 'Kehic',
    edit: false,
    cards: InitialStateCard,
  },
  {
    id: newGuid(),
    title: 'Testing',
    author: 'Kehic',
    edit: false,
    cards: InitialStateCard,
  },
  {
    id: newGuid(),
    title: 'Done',
    author: 'Kehic',
    edit: false,
    cards: InitialStateCard,
  },
];

export default InitialStateColumn;
