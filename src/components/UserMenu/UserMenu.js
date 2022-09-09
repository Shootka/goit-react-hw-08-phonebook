import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import './style/UserMenu.css';
import { logout } from '../../store/slice/user/asyncSlice/logout';

const UserMenu = () => {
  const { isLoggedIn, token, email } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className={'user-menu'}>
        <p className={'main-title'}>Phonebook</p>
        <div className={'button-group'}>
          {
            !isLoggedIn
            ? <button onClick={() => navigate('/register')}>Register</button>
            : <button className={'exit'} onClick={() => dispatch(logout(token))}>Logout</button>
          }
          {isLoggedIn && <button onClick={() => navigate('/contacts')}>contacts</button>}
        </div>
        {email && <p className={'email'}>User email: {email}</p>}
        <Outlet />
      </div>
    </>
  );
};

export default UserMenu;
