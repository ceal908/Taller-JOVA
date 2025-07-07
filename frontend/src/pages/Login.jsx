import React, { useState } from 'react';
import NavbarINI from '../components/NavbarINI';
import FooterINI from '../components/FooterINI';
import '../estilos.css';

export default function Login() {
  const [error, setError] = useState("");


  // Opcional: para el submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpia errores previos

    // Toma los valores del formulario
    const username = e.target.username.value.trim();
    const password = e.target.password.value;

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (res.ok) {
        // Aquí puedes guardar info, redirigir, etc.
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Usuario o contraseña incorrectos.');
      }
    } catch {
      setError('No se pudo conectar al servidor.');
    }
  };

  return (
    <>
      <NavbarINI />
      <main>
        <section className="login-card">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label for="rol">Tipo de usuario:</label>
            <select id="rol" name="rol" required>
                <option value="" disabled selected>Selecciona el rol</option>
                <option value="administrador">Administrador</option>
                <option value="supervisor">Supervisor</option>
                <option value="almacenista">Almacenista</option>
            </select>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" autoComplete="username" required />

            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" autoComplete="current-password" required />

            <button type="submit">Ingresar</button>
            {error && <div className="error">{error}</div>}
          </form>
        </section>
      </main>
      <FooterINI />
    </>
  );
}
