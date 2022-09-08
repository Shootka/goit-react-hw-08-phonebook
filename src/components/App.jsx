import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { addItem } from '../store/slice/contactsSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const { items, filter } = useSelector(state => state.contacts)
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    localStorage.setItem('contacts', JSON.stringify(items))
    if (items
      .map(el => el.name)
      .includes(data.name)
    ) {
      return alert('already in cotacts');
    } else {
      dispatch(addItem({ id: Math.floor(Math.random() * 999293).toString(10), ...data }))
    }
  };
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
      Phonebook
      <Form submitData={submitHandler} />
      <Filter/>
      <ContactList title={'Contacts'} />
    </div>
  );
};

export default App;
