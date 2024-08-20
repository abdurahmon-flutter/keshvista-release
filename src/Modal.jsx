import React from 'react';

function Modal({ closeModal }) {
  return (
    <div id="successModal" className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>Success!</h2>
        <p>Your form has been submitted successfully.</p>
      </div>
    </div>
  );
}

export default Modal;
