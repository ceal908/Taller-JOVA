import React from 'react';
import Sidebar from '../components/Sidebar';     // usamos sidebar desde componentes
import Footer from '../components/FooterINI';    // lo mismo con footer
import '../template.css'; // estilos de toda la app

export default function Default() { //nombramos la funcion igual al nombre del archivo, despues vamos a App.js y agregamos la ruta.
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content"> {/* Apartir de aqui agrega contenido */}

        <h1>Hola</h1>
        <h2>Ejemplo</h2>
        <p>Esta es la plantilla para agregar nuevas paginas.</p>
        {/* Aquí agregas los widgets, tablas, etc */}
      </main>
      <Footer />
    </div>
  );
}