import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { setFilter } from '../../store/slice/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {

  const dispatch = useDispatch();
  return (
    <div>
      <span style={{ fontSize: 20 }}>Find contact by name </span>
      <Input onChange={(event) => dispatch(setFilter(event.target.value))} />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
