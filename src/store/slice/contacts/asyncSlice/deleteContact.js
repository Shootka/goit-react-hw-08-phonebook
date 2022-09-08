import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteItem } from '../contactsSlice';

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { dispatch }) => {
    const res = await axios.delete(`https://6319fc396b4c78d91b49a0a1.mockapi.io/contacts/${id}`);
    dispatch(deleteItem(res.data.id));
  },
);
