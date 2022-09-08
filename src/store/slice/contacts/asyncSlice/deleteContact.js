import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteItem } from '../contactsSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { dispatch }) => {
    const res = await axios.delete(`/contacts/${id}`);
    if (res.statusText === 'OK') {
      dispatch(deleteItem(id));
    } else{
      throw new Error('can`t delete')
    }
  },
);

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token') || ''}`;
