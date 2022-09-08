import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    items: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: ''
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addItem(state, action){
      state.items.push(action.payload)
      localStorage.setItem('contacts', JSON.stringify(state.items))
    },
    deleteItem(state, action){
      state.items = state.items.filter(el => el.id !== action.payload)
      localStorage.setItem('contacts', JSON.stringify(state.items))
    },
  },
});
export default contactSlice.reducer;
export const { setFilter, addItem, deleteItem} = contactSlice.actions;
