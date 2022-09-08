import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginUser } from '../userSlice';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const login = createAsyncThunk(
  'user/login',
  async (data, { dispatch }) => {
    console.log(data);
    try {
      const res = await axios.post(`users/login`,  data,
        {
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      console.log(res);
      dispatch(loginUser(res.data));
    } catch (e) {
      console.error(e.message);
    }
  },
);

