import React, { useEffect } from 'react';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from '../../store/slice/contacts/asyncSlice/fetchContacts';
import { addContact } from '../../store/slice/contacts/asyncSlice/addContact';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const { items } = useSelector(state => state.contacts);
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);
  const submitHandler = (data) => {
    localStorage.setItem('contacts', JSON.stringify(items));
    if (items
      .map(el => el.name)
      .includes(data.name)
    ) {
      return alert('already in contacts');
    } else {
      dispatch(addContact(data));
    }
  };
  return (
    <>
      <Form submitData={submitHandler} />
      <Filter />
      <ContactList title={'Contacts'} />
    </>
  );
};

export default Contacts;
