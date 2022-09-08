import React  from 'react';
import UserMenu from './UserMenu/UserMenu';
import AppRoutes from '../routes/AppRoutes';

const App = () => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}>
      <UserMenu />
      <AppRoutes />
    </div>
  );
};

export default App;
