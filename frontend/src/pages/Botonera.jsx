// src/pages/Botonera.jsx
import React from 'react';
import Btn from '../components/Btn';
import '../global.css';    // Asegúrate de importar tu css global una sola vez al inicio de la app

export default function Botonera() {
  return (
    <div>
      <h2>Ejemplo de grupo de botones (al lado):</h2>
      <div className="btn-group">
        <Btn>Guardar</Btn>
        <Btn color="red">Eliminar</Btn>
        <Btn color="blue" disabled>Deshabilitado</Btn>
      </div>
      <p style={{marginTop: 40}}>
        Puedes agregar más botones o estilos solo cambiando props/color.<br />
        El acomodo de los botones lo controla el <b>.btn-group</b> del global.css.
      </p>
    </div>
  );
}
