import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterINI';
import Tabla1 from '../components/Tabla1';
import { Btn, Input, Card, PageTitle } from '../components/UIkit';
import FormGrid from '../components/Formgrid';
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
        <PageTitle>Citas</PageTitle>

        <Card title="Nueva Cita">
          <FormGrid columns={3}>
            {/* 1ra fila: Buscar cliente y checkbox */}
            <div>
              <label>Buscar cliente:</label>
              <input type="text" placeholder="Nombre o teléfono" list="clientesList" />
              <datalist id="clientesList">
                <option value="Juan Pérez" />
                <option value="Ana López" />
              </datalist>
            </div>
            <div>
              <label htmlFor="nuevo">Cliente nuevo?</label>
              <input type="checkbox" id="nuevo" /> 
            </div>
            <div></div> {/* Espacio para alinear */}

            {/* 2da fila: Datos cliente */}
            <div>
              <label>Nombre:</label>
              <input type="text" disabled />
            </div>
            <div>
              <label>Teléfono:</label>
              <input type="text" disabled />
            </div>
            <div>
              <label>Correo:</label>
              <input type="email" disabled />
            </div>

            {/* 3ra fila: Vehículo, descripción temporal, fecha/hora */}
            <div>
              <label>Vehículo:</label>
              <select>
                <option value="">Seleccionar vehículo...</option>
                <option value="temporal">No registrado (describir abajo)</option>
              </select>
            </div>
            <div>
              <label>Fecha y hora:</label>
              <input type="datetime-local" />
            </div>

            {/* 4ta fila: Tipo de cita, Motivo, Observaciones */}
            <div>
              <label>Tipo de cita:</label>
              <select>
                <option value="recepción">Recepción</option>
                <option value="entrega">Entrega</option>
              </select>
            </div>
            <div>
              <label>Observaciones:</label>
              <textarea placeholder="Detalles u observaciones"></textarea>
            </div>

            {/* Botón */}
            <div style={{gridColumn:'1/-1', textAlign:'right'}}>
              <Btn type="submit">Guardar cita</Btn>
            </div>
          </FormGrid>
        </Card>

        {/* Tabla de citas */}
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
