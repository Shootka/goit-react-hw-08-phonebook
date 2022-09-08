import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addItem } from '../contactsSlice';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token') || ''}`

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { dispatch }) => {
    const res = await axios.post(`/contacts`, data);
    dispatch(addItem(res.data));
  },
);
