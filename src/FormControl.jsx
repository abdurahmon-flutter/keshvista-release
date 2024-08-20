import React from 'react';


function FormControl({ label, id, type, value, onChange, error }) {
  return (
    <div className={`form-control ${error ? 'error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={id} placeholder={`${label}`} value={value} onChange={onChange} />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={`${label}`}
          value={value}
          onChange={onChange}
        />
      )}
      <i className={`icon fas ${error ? 'fa-times-circle' : 'fa-check-circle'}`}></i>
      {error && <small>{error}</small>}
    </div>
  );
}

export default FormControl;
