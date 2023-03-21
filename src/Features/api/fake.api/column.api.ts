import { TInitialStateColumn } from 'Features/types/initialState';
import { newGuid } from 'Common/utils/guid';

export const InitialStateColumn: TInitialStateColumn[] = [
  {
    id: newGuid(),
    title: 'TODO',
    author: 'Kehic',
    edit: false,
  },
  {
    id: newGuid(),
    title: 'In Progress',
    author: 'Kehic',
    edit: false,
  },
  {
    id: newGuid(),
    title: 'Testing',
    author: 'Kehic',
    edit: false,
  },
  {
    id: newGuid(),
    title: 'Done',
    author: 'Kehic',
    edit: false,
  },
];

export default InitialStateColumn;
