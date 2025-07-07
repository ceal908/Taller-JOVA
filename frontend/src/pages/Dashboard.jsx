// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';     // Si ya tienes Sidebar
import Footer from '../components/FooterINI';    // Puedes usar el mismo footer, o haz uno nuevo
import '../template.css'; // O el CSS que decidas para el dashboard

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Bienvenido al panel de control. Selecciona una opción del menú lateral para comenzar.</p>
        {/* Aquí agregas los widgets, tablas, etc */}
      </main>
      <Footer />
    </div>
  );
}
