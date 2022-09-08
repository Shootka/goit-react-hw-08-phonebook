import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://6319fc396b4c78d91b49a0a1.mockapi.io/contacts');
      if (response.statusText !== 'OK') {
        throw new Error('Bad request');
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
