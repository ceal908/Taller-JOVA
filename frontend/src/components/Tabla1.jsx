// src/components/Tabla1.jsx
import React from 'react';

// columns: [{key:..., label:...}], data: array, renderActions: func (opcional), onRowClick: func, rowClass: func
export default function Tabla1({ columns, data, renderActions, onRowClick, rowClass }) {
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
          <tr
            key={row.id || idx}
            className={rowClass ? rowClass(row) : ''}
            style={{ cursor: onRowClick ? 'pointer' : undefined }}
            onClick={onRowClick ? () => onRowClick(row) : undefined}
          >
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
