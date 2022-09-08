import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../SignUpForm/style/SignUpForm.css';
import { login } from '../../store/slice/user/asyncSlice/login';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/contacts');
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form className={'sign-up'} onSubmit={(e) => handleSubmit(e)}>
      <h4 className={'title'}>Login</h4>
      <input
        placeholder={'email'}
        className={'field'}
        autoComplete={'false'}
        type='email'
        onChange={(e) => {
          setEmail(e.target.value);
        }} />
      <input
        placeholder={'password'}
        className={'field'}
        autoComplete={'false'}
        type='password'
        onChange={(e) => {
          setPassword(e.target.value);
        }} />
      <button>Login</button>
    </form>

  );
};

export default LoginForm;
