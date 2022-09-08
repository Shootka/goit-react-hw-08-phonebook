import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/SignUpForm.css'
import { register } from '../../store/slice/user/asyncSlice/register';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isRegister } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if (isRegister) navigate('/login')
  },[isRegister])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({name,email, password}))
  };

  return (
    <form className={'sign-up'} onSubmit={(e) => handleSubmit(e)}>
      <h4 className={'title'}>SignUp</h4>
      <input
        placeholder={'name'}
        className={'field'}
        type='text'
        onChange={(e) => {
        setName(e.target.value);
      }} />
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
      <button>SignUp</button>
    </form>

  );
};

export default SignUpForm;
