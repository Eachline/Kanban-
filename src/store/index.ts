import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ColumnReducer from './duck/Column-Slice';
import CardReducer from './duck/Card-Slice';
import CommentReducer from './duck/Comment-Slice';
import UserReducer from './duck/User-Slice';

const rootReducer = combineReducers({
  column: ColumnReducer,
  card: CardReducer,
  comment: CommentReducer,
  user: UserReducer,
});

const persistConfig = {
  key: 'column',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: true,
  });
};

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

// 13413
