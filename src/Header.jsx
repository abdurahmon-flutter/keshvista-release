import React from 'react';
import header from './assets/header.png'
function Header() {
  return (
    <header>
      <div className="left">
        <h3>O'quv markazingiz kelajagini quring!<br /><span>KeshVista Platformasi</span></h3>
        <p>Bu platforma orqasi siz o'zingizning shaxsiy o'quv markazingizni ancha qulay boshqarishingiz mumkun.</p>
        <a href="#">
          <span>Get Started</span>                   
        </a>
      </div>
      <img src={header} alt="Header" />
    </header>
  );
}

export default Header;
