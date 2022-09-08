import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
