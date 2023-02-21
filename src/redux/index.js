/* eslint-disable */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import darkMode from './modules/darkMode/reducer';

const persistConfig = {
  key: 'dark-mode',
  storage,
  whitelist: ['darkMode'],
  version: 1.1,
};

const rootReducers = persistReducer(persistConfig, combineReducers({ darkMode }));

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
const persist = persistStore(store);

export { persist };

export default store;
