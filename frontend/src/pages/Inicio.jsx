// src/pages/Inicio.jsx
import React from 'react';
import NavbarINI from '../components/NavbarINI';
import FooterINI from '../components/FooterINI';
import '../estilos.css';

export default function Inicio() {
  return (
    <>
      <NavbarINI />
      <main> {/* Apartir de aqui agrega html (el contenido) */}
        <section className="hero">
          <h1>Bienvenido a JO.VA Taller Automotriz</h1>
          <p>Expertos en reparación y mantenimiento de tu vehículo. Atención profesional, rápida y honesta.</p>
        </section>
        <section className="contacto">
          <h2>Agenda tu cita</h2>
          <div className="contacto-info">
            <p>📞 <strong>Teléfono:</strong> <a href="tel:8111926019">811 192 6019</a></p>
            <p>✉️ <strong>Email:</strong> <a href="mailto:contacto@jovataller.com">contacto@jovataller.com</a></p>
            <p>O visítanos en nuestro taller. <span className="mini">(Próximamente citas en línea)</span></p>
          </div>
        </section>
      </main>
      <FooterINI />
    </>
  );
}


