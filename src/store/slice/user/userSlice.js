import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    name: '',
    email: '',
    token: localStorage.getItem('token') || '',
    isLoggedIn: !!localStorage.getItem('token'),
    isRegister: false
  },
  reducers: {
    setUser(state, action) {
      const { token } = action.payload;
      const { name, email } = action.payload.user;
      state.name = name;
      state.email = email;
      state.token = token;
      state.isRegister = true;
    },
    loginUser(state, action){
      const { token } = action.payload;
      state.token = token;
      state.isLoggedIn = true
      localStorage.setItem('token', token);
    },
    logoutUser(state){
      state.name = ''
      state.email = ''
      state.token = '';
      state.isLoggedIn = false
      localStorage.removeItem('token');
    }
  },
});

export default userSlice.reducer;
export const { setUser, loginUser, logoutUser } = userSlice.actions;
