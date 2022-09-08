import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './asyncSlice/fetchContacts';
import { addContact } from './asyncSlice/addContact';

const contactSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    items: [],
    isLoading: true,
    error: null
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;},
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default contactSlice.reducer;
export const { addItem, deleteItem, setItems } = contactSlice.actions;
