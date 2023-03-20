import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ColumnReducer from '../features/Column-Slice';

// save reducers
const rootReducer = combineReducers({
  column: ColumnReducer,
});

const persistConfig = {
  key: 'column',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create Store
export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: true,
  });
};

// import index
export const store = setupStore();
export const persistor = persistStore(store);

// Hooks
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
