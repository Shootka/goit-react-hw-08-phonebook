import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logoutUser } from '../userSlice';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const logout = createAsyncThunk(
  'user/logout',
  async (token,{ dispatch }) => {
    try {
      const res = await axios.post(`users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      console.log(res.data);
      dispatch(logoutUser());
    } catch (e) {
      console.error(e.message);
    }
  },
);

