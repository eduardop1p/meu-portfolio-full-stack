/* eslint-disable */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import darkMode from './modules/darkMode/reducer';
import resume from './modules/resume/reducer';

const persistConfig = {
  key: 'dark-mode',
  storage,
  whitelist: ['darkMode'],
  version: 1.1,
};

const rootReducers = persistReducer(persistConfig, combineReducers({ darkMode, resume }));

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
const persist = persistStore(store);

export { persist };

export default store;
