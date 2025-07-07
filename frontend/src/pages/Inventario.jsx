import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterINI';
import Tabla1 from '../components/Tabla1';
import { Btn, Input, Card, PageTitle } from '../components/UIkit';
import '../template.css';

// Datos demo (después conectarás a backend)
const INVENTARIO_DEMO = [
  { id: 1, nombre: "Filtro de Aceite", codigo: "FILT001", categoria: "Lubricación", cantidad: 15, proveedor: "Castrol", precio_compra: 80.00, precio_venta: 120.00, estado: "Activo" },
  { id: 2, nombre: "Bujía NGK", codigo: "BUJNGK", categoria: "Eléctrico", cantidad: 32, proveedor: "NGK", precio_compra: 45.00, precio_venta: 70.00, estado: "Activo" }
];

export default function Inventario() {
  const [items, setItems] = useState(INVENTARIO_DEMO);
  const [form, setForm] = useState({ nombre: '', codigo: '', categoria: '', cantidad: 0, proveedor: '', precio_compra: '', precio_venta: '', estado: 'Activo' });
  const [selectedId, setSelectedId] = useState(null);

  const columns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'codigo', label: 'Código' },
    { key: 'categoria', label: 'Categoría' },
    { key: 'cantidad', label: 'Cantidad' },
    { key: 'proveedor', label: 'Proveedor' },
    { key: 'precio_compra', label: 'Precio compra' },
    { key: 'precio_venta', label: 'Precio venta' },
    { key: 'estado', label: 'Estado' }
  ];

  // Al seleccionar
  const handleSelect = (id) => {
    const item = items.find(i => i.id === id);
    setForm({ ...item });
    setSelectedId(id);
  };

  // Guardar/actualizar
  const handleSave = (e) => {
    e.preventDefault();
    if (selectedId) {
      setItems(items.map(i => i.id === selectedId ? { ...form, id: selectedId } : i));
    } else {
      setItems([...items, { ...form, id: Date.now() }]);
    }
    setForm({ nombre: '', codigo: '', categoria: '', cantidad: 0, proveedor: '', precio_compra: '', precio_venta: '', estado: 'Activo' });
    setSelectedId(null);
  };

  // Eliminar
  const handleDelete = () => {
    if (!selectedId) return;
    setItems(items.filter(i => i.id !== selectedId));
    setForm({ nombre: '', codigo: '', categoria: '', cantidad: 0, proveedor: '', precio_compra: '', precio_venta: '', estado: 'Activo' });
    setSelectedId(null);
  };

  // Limpiar
  const handleClear = () => {
    setForm({ nombre: '', codigo: '', categoria: '', cantidad: 0, proveedor: '', precio_compra: '', precio_venta: '', estado: 'Activo' });
    setSelectedId(null);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <PageTitle>Inventario</PageTitle>

        <Card title={selectedId ? "Editar refacción" : "Nueva refacción"}>
          <form className="form-grid" onSubmit={handleSave}>
            <Input label="Nombre:" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} required />
            <Input label="Código:" value={form.codigo} onChange={e => setForm(f => ({ ...f, codigo: e.target.value }))} required />
            <Input label="Categoría:" value={form.categoria} onChange={e => setForm(f => ({ ...f, categoria: e.target.value }))} required />
            <Input label="Cantidad:" type="number" min={0} value={form.cantidad} onChange={e => setForm(f => ({ ...f, cantidad: e.target.value }))} required />
            <Input label="Proveedor:" value={form.proveedor} onChange={e => setForm(f => ({ ...f, proveedor: e.target.value }))} required />
            <Input label="Precio compra:" type="number" min={0} step={0.01} value={form.precio_compra} onChange={e => setForm(f => ({ ...f, precio_compra: e.target.value }))} required />
            <Input label="Precio venta:" type="number" min={0} step={0.01} value={form.precio_venta} onChange={e => setForm(f => ({ ...f, precio_venta: e.target.value }))} required />
            <div>
              <label>Estado:</label>
              <select className="ui-input" value={form.estado} onChange={e => setForm(f => ({ ...f, estado: e.target.value }))}>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', marginTop: 8 }}>
              <Btn type="submit">{selectedId ? "Actualizar" : "Agregar"}</Btn>
              <Btn type="button" onClick={handleClear}>Limpiar</Btn>
              <Btn type="button" color="danger" onClick={handleDelete} disabled={!selectedId}>Eliminar</Btn>
            </div>
          </form>
        </Card>

        <Card title="Inventario de refacciones">
          <Tabla1
            columns={columns}
            data={items}
            onRowClick={row => handleSelect(row.id)}
            rowClass={row => row.id === selectedId ? 'row-selected' : ''}
          />
        </Card>
      </main>
      <Footer />
    </div>
  );
}
