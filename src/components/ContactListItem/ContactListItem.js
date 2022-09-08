import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/slice/contacts/asyncSlice/deleteContact';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li style={{ display: 'flex', alignItems: 'center', alignContent: 'center', gap: 10, height: 75 }}>
      <p>{name} {number}</p>
      <button id={id}
              onClick={(event) => dispatch(deleteContact(event.target?.id))}
      >delete
      </button>
    </li>
  );

};

ContactListItem.propTypes = {
  id: PropTypes.string || PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactListItem;
