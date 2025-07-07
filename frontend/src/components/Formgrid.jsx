import React from 'react';

// Puedes ajustar el número de columnas si quieres recibirlo como prop
export default function FormGrid({ children, columns = 3, ...props }) {
  return (
    <>
      <style>
        {`
          .form-grid {
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
            gap: 18px 22px;
            max-width: 100%;
          }
          .form-grid label {
            font-weight: 500;
            margin-bottom: 4px;
            display: block;
          }
          .form-grid input,
          .form-grid select,
          .form-grid textarea {
            width: 100%;
          }
          @media (max-width: 1024px) {
            .form-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 650px) {
            .form-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      <form className="form-grid" {...props}>
        {children}
      </form>
    </>
  );
}
