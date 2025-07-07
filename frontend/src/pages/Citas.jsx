import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterINI';
import Tabla1 from '../components/Tabla1';
import { Btn, Input, Card, PageTitle } from '../components/UIkit';
import '../template.css';

export default function Citas() {
  const [citas, setCitas] = useState([
    {
      folio: 'C001',
      cliente: 'Juan Pérez',
      vehiculo: 'Nissan Versa',
      fecha: '2024-07-09 10:00',
      tipo: 'Recepción',
      estado: 'Pendiente'
    },
    {
      folio: 'C002',
      cliente: 'Ana López',
      vehiculo: 'Honda CR-V',
      fecha: '2024-07-09 11:00',
      tipo: 'Entrega',
      estado: 'Realizada'
    }
  ]);

  const columns = [
    { key: 'folio', label: 'Folio' },
    { key: 'cliente', label: 'Cliente' },
    { key: 'vehiculo', label: 'Vehículo' },
    { key: 'fecha', label: 'Fecha/Hora' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'estado', label: 'Estado' }
  ];

  const renderActions = (row) => (
    <>
      <Btn>Editar</Btn>
      <Btn color="danger">Eliminar</Btn>
    </>
  );

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">

        {/* Título principal */}
        <PageTitle>Citas</PageTitle>

        {/* --- Formulario nueva cita --- */}
        <Card title="Nueva Cita">
          <form className="cita-form">
            {/* Buscar o crear cliente */}
            <div className="row align">
              <Input label="Buscar cliente:" placeholder="Nombre o teléfono" list="clientesList" />
              <datalist id="clientesList">
                <option value="Juan Pérez" />
                <option value="Ana López" />
              </datalist>
              <label className="switch" style={{marginLeft:'18px'}}>
                <input type="checkbox" /> Cliente nuevo
              </label>
            </div>

            {/* Datos del cliente */}
            <div className="row triple">
              <div>
                <Input label="Nombre:" disabled />
              </div>
              <div>
                <Input label="Teléfono:" disabled />
              </div>
              <div>
                <Input label="Correo:" type="email" disabled />
              </div>
            </div>

            <div className="row align">
              <label>Vehículo:</label>
              <select className="ui-input">
                <option value="">Seleccionar vehículo...</option>
                <option value="temporal">No registrado (describir abajo)</option>
              </select>
              <Input placeholder="Descripción temporal" />
            </div>

            <div className="row">
              <Input label="Fecha y hora:" type="datetime-local" />
            </div>
            <div className="row">
              <label>Tipo de cita:</label>
              <select className="ui-input">
                <option value="recepción">Recepción</option>
                <option value="entrega">Entrega</option>
              </select>
            </div>
            <div className="row">
              <Input label="Motivo:" placeholder="Motivo de la cita" />
            </div>
            <div className="row">
              <label>Observaciones:</label>
              <textarea className="ui-input" placeholder="Detalles u observaciones"></textarea>
            </div>
            <div className="row">
              <Btn type="submit">Guardar cita</Btn>
            </div>
          </form>
        </Card>

        {/* --- Tabla de citas --- */}
        <section className="citas-listado">
          <Card title="Citas Agendadas">
            <Tabla1 columns={columns} data={citas} renderActions={renderActions} />
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}

