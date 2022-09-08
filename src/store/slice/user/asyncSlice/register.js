import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setUser } from '../userSlice';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const register = createAsyncThunk(
  'user/register',
  async (data, { dispatch }) => {
    console.log(data);
    try {
      const res = await axios.post(`/users/signup`,  data,
        {
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      console.log(res.data);
      dispatch(setUser(res.data));
    } catch (e) {
      console.error(e.message);
    }
  },
);
