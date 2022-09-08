import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addItem } from '../contactsSlice';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { dispatch }) => {
    const res = await axios.post(`https://6319fc396b4c78d91b49a0a1.mockapi.io/contacts`, data);
    dispatch(addItem(res.data));
  },
);
