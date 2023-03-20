import { TInitialStateColumn } from 'Features/typings/initialState';
import { newGuid } from 'Common/utils/guid';
import { InitialStateCard } from './card.api';

export const InitialStateColumn: TInitialStateColumn[] = [
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
