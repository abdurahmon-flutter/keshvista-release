import React, { useState } from 'react';
import FormControl from './FormControl';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    learning_center_name: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Ismingiz bo\'sh bo\'lmasin';
    if (!formData.learning_center_name) errors.learning_center_name = 'O\'quv markaz nomi bo\'sh bo\'lmasin';
    if (!formData.phone.match(/^\+?(\d.*){3,}$/))
      errors.phone = 'Telefon raqamda xato!';
    if (!formData.message) errors.message = 'Izoh bosh bo\'lmasin';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      onSubmit();
    }
  };

  return (
    <form id="mainForm" onSubmit={handleSubmit} noValidate>
      <h2>So'rov yuborish</h2>
      <FormControl
        label="Ismingiz"
        id="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        error={formErrors.name}
      />
      <FormControl
        label="Markazingiz nomi"
        id="learning_center_name"
        type="text"
        value={formData.learning_center_name}
        onChange={handleInputChange}
        error={formErrors.learning_center_name}
      />
      <FormControl
        label="Telefon"
        id="phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        error={formErrors.phone}
      />
      <FormControl
        label="Izoh"
        id="message"
        type="textarea"
        value={formData.message}
        onChange={handleInputChange}
        error={formErrors.message}
      />
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default Form;
