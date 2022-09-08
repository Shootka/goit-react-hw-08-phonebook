import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { divStyle } from '../style';
import Input from '../Input/Input';
import { nameTitle, numberTitle } from '../static/titles';
import { contactNameRegex, contactNumberRegex } from '../static/regex';

const Form = ({ submitData }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    submitData(formData);
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} style={divStyle}>
      <label style={{ fontSize: 25, marginRight: 14 }}>Name:</label>
      <Input name={'name'}
             type={'text'}
             title={nameTitle}
             pattern={contactNameRegex}
             isRequired={true}
             onChange={handleChange} />
      <label style={{ fontSize: 25, marginRight: 14 }}>Number:</label>
      <Input name={'number'}
             type={'tel'}
             title={numberTitle}
             pattern={contactNumberRegex}
             onChange={handleChange}
             isRequired={true} />
      <button>Add contact</button>
    </form>
  );

};

Form.propTypes = {
  submitData: PropTypes.func,
};

export default Form;
