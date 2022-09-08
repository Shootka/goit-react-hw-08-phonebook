import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if (response.statusText !== 'OK') {
        throw new Error('Bad request');
      }
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
