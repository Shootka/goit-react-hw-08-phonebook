import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

const ContactList = ({ title }) => {
  const { items, filter } = useSelector(state => state.contacts)

  const filteredContacts = items.filter(el => {
    return el?.name?.toLowerCase().includes(filter?.toLowerCase() || '');
  });

  return (
    <ul>
      {title}
      {filteredContacts?.map((contact) => {
        return <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  title: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default ContactList;
