import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LoginForm from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import Contacts from '../components/Contacts/Contacts';

const AppRoutes = () => {
  const { isLoggedIn, token } = useSelector(state => state.user);
  return (
    <Routes>
      <Route path='/' element={<div>This is home page, register for work</div>} />
      <Route path='/contacts' element={isLoggedIn ? <Contacts /> : <Navigate to={'/login'} replace />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={token && isLoggedIn ? <Contacts /> : <SignUpForm />} />
      <Route path='*' element={''} />
    </Routes>
  );
};


export default AppRoutes;
