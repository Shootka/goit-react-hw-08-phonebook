import React from 'react';
import PropTypes from 'prop-types';
import { deleteItem } from '../../store/slice/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li style={{ display: 'flex', alignItems: 'center', alignContent: 'center', gap: 10, height: 75 }}>
      <p>{name} {number}</p>
      <button id={id} style={{ height: 20 }}
              onClick={(event) => dispatch(deleteItem(event.target?.id))}
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
