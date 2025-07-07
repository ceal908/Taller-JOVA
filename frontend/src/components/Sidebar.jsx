import React, { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar-container${open ? '' : ' collapsed'}`}>
      <nav className="sidebar">
        <div className="sidebar-logo">JO.VA Taller</div>
        <ul>
          <li><a href="/dashboard">Inicio</a></li>
          <li><a href="/usuarios">Usuarios</a></li>
          <li><a href="/inventario">Inventario</a></li>
          <li><a href="/citas">Citas</a></li>
          <li><a href="/citas">ejempolo</a></li>
          <li><a href="/login" id="cerrarSesion">Cerrar sesión</a></li>
        </ul>
      </nav>
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Ocultar menú' : 'Mostrar menú'}
      >
        {open ? '←' : '→'}
      </button>
    </div>
  );
}


