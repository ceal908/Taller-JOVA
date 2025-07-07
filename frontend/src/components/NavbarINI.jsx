// src/components/NavbarINI.jsx
import React from 'react';

export default function NavbarINI() {
  return (
    <header className="navbar">
      <div className="logo">JO.VA Taller</div>
      <nav>
        <ul>
          <li><a href="/" className="activo">Inicio</a></li>
          <li><a href="#" className="disabled">Servicios</a></li>
          <li><a href="#" className="disabled">Acerca</a></li>
          <li><a href="/Login" id="btnLogin">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

