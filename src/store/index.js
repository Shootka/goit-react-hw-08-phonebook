import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slice/contacts/contactsSlice';
import filterSlice from './slice/filter/filterSlice';
import userSlice from './slice/user/userSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
  user: userSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
