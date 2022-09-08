import {combineReducers, configureStore} from '@reduxjs/toolkit'
import contactsSlice from './slice/contacts/contactsSlice';
import filterSlice from './slice/filterSlice';

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice
})
export const store = configureStore({
  reducer: rootReducer,
})
