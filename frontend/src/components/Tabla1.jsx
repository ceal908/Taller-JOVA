// src/components/Tabla1jsx
import React from 'react';

export default function Tabla1({ columns, data, renderActions }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key || col}>{col.label || col}</th>
          ))}
          {renderActions && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row.id || idx}>
            {columns.map(col => (
              <td key={col.key || col}>{row[col.key || col]}</td>
            ))}
            {renderActions && <td>{renderActions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
