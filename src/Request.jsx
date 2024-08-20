import React, { useState } from 'react';
import Form from './Form';
import Modal from './Modal';
import './App.css';
import image from "./assets/bg.png"
function Request() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleFormSubmit = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <img src={image} alt="Background" />
      <Form onSubmit={handleFormSubmit} />
      {isModalVisible && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Request;