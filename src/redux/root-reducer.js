import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: contactsSlice,
  filter: filterSlice,
});

export default rootReducer;
