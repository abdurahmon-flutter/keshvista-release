import React from 'react';

function Footer() {
  return (
    <footer>
      <h3>Biz bilan 1 oylik demo varianti orqali o'quv markazingizni 99.9% nazorat qiling</h3>
      <div className="right">
        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Cooperation</a>
          <a href="#">Sponsorship</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social">
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-facebook-square'></i>
          <i className='bx bxl-github'></i>
        </div>
        <p>2024 KeshVista, All Rights Reserved.</p>
        <button className='contact-button'>
          Contact
        </button>
      </div>
    </footer>
  );
}

export default Footer;
