import { configureStore } from '@reduxjs/toolkit';

import searchIndex from './searchIndex';
import searchValue from './searchValue';
import recommendList from './recommendList';

export const store = configureStore({
  reducer: {
    searchIndex,
    searchValue,
    recommendList,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;