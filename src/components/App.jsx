import React, { useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { fetchContacts } from '../store/slice/contacts/asyncSlice/fetchContacts';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/slice/contacts/asyncSlice/addContact';

const App = () => {
  const { items } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  console.log(items);
  const submitHandler = (data) => {
    localStorage.setItem('contacts', JSON.stringify(items));
    if (items
      .map(el => el.name)
      .includes(data.name)
    ) {
      return alert('already in contacts');
    } else {
      dispatch(addContact(
        { id: String(Math.floor(Math.random() * 9293).toString(10)), ...data }));
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
      <Filter />
      <ContactList title={'Contacts'} />
    </div>
  );
};

export default App;
