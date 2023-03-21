import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateUsers } from 'Features/api';

const userSlice = createSlice({
  name: '@@user',
  initialState: InitialStateUsers,
  reducers: {
    userName: (state, action: PayloadAction<{ userName: string }>) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { userName } = userSlice.actions;
export default userSlice.reducer;
