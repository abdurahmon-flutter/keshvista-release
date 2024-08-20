import React from 'react';
function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">Kesh<span className="vista">Vista</span></a>
      <div className="links">
        <a href="#">Ota-onalar</a>
        <a href="#">O'quvchilar</a>
        <a href="#">O'qituvchilar</a>
      </div>
      <div className="login">
        <button className="signup">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
