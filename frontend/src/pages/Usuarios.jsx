import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterINI';
import Tabla1 from '../components/Tabla1';         // Tabla reutilizable
import { Btn, Input, Card, PageTitle } from '../components/UIkit'; // Tus componentes
import '../template.css';

// Datos de prueba (sustituye por conexión a backend cuando lo tengas)
const USUARIOS_DEMO = [
  { id: 1, nombre: "Juan Pérez", usuario: "jperez", rol: "Administrador", correo: "juan@demo.com", estado: "Activo" },
  { id: 2, nombre: "Ana López", usuario: "alopez", rol: "Supervisor", correo: "ana@demo.com", estado: "Suspendido" },
];

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState(USUARIOS_DEMO);
  const [form, setForm] = useState({ nombre: '', usuario: '', correo: '', rol: '', estado: 'Activo' });
  const [selectedId, setSelectedId] = useState(null);

  // Columnas para la tabla
  const columns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'usuario', label: 'Usuario' },
    { key: 'rol', label: 'Rol' },
    { key: 'correo', label: 'Correo' },
    { key: 'estado', label: 'Estado' },
  ];

  // Al seleccionar usuario en la tabla
  const handleSelect = (id) => {
    const user = usuarios.find(u => u.id === id);
    setForm({ ...user });
    setSelectedId(id);
  };

  // Guardar (agregar o editar)
  const handleSave = (e) => {
    e.preventDefault();
    if (selectedId) {
      // Editar
      setUsuarios(usuarios.map(u => u.id === selectedId ? { ...form, id: selectedId } : u));
    } else {
      // Agregar
      setUsuarios([...usuarios, { ...form, id: Date.now() }]);
    }
    setForm({ nombre: '', usuario: '', correo: '', rol: '', estado: 'Activo' });
    setSelectedId(null);
  };

  // Eliminar
  const handleDelete = () => {
    if (!selectedId) return;
    setUsuarios(usuarios.filter(u => u.id !== selectedId));
    setForm({ nombre: '', usuario: '', correo: '', rol: '', estado: 'Activo' });
    setSelectedId(null);
  };

  // Limpiar formulario
  const handleClear = () => {
    setForm({ nombre: '', usuario: '', correo: '', rol: '', estado: 'Activo' });
    setSelectedId(null);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <PageTitle>Usuarios</PageTitle>

        <Card title={selectedId ? "Editar usuario" : "Nuevo usuario"}>
          <form className="form-grid" onSubmit={handleSave}>
            <Input label="Nombre:" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} required />
            <Input label="Usuario:" value={form.usuario} onChange={e => setForm(f => ({ ...f, usuario: e.target.value }))} required />
            <Input label="Correo:" type="email" value={form.correo} onChange={e => setForm(f => ({ ...f, correo: e.target.value }))} required />
            <div>
              <label>Rol:</label>
              <select className="ui-input" value={form.rol} onChange={e => setForm(f => ({ ...f, rol: e.target.value }))} required>
                <option value="">Selecciona un rol...</option>
                <option value="Administrador">Administrador</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Almacenista">Almacenista</option>
              </select>
            </div>
            <div>
              <label>Estado:</label>
              <select className="ui-input" value={form.estado} onChange={e => setForm(f => ({ ...f, estado: e.target.value }))}>
                <option value="Activo">Activo</option>
                <option value="Suspendido">Suspendido</option>
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', marginTop: 8 }}>
              <Btn type="submit">{selectedId ? "Actualizar" : "Agregar"}</Btn>
              <Btn type="button" onClick={handleClear}>Limpiar</Btn>
              <Btn type="button" color="danger" onClick={handleDelete} disabled={!selectedId}>Eliminar</Btn>
            </div>
          </form>
        </Card>

        {/* Tabla de usuarios */}
        <Card title="Usuarios registrados">
          <Tabla1
            columns={columns}
            data={usuarios}
            // Al hacer click en una fila, selecciona usuario
            onRowClick={row => handleSelect(row.id)}
            rowClass={row => row.id === selectedId ? 'row-selected' : ''}
          />
        </Card>
      </main>
      <Footer />
    </div>
  );
}
