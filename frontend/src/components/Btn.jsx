// src/components/Btn.jsx
import React from "react";

export default function Btn({ children, color = "blue", ...props }) {
  return (
    <>
      <style>
        {`
          .btn-jova {
            border: none;
            padding: 10px 24px;
            border-radius: var(--borde-radius1);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            color: #fff;
            background: var(--jovablue1);
            transition: background 0.15s;
            margin: 0;
          }
          .btn-jova.red { background: var(--jovared1); }
          .btn-jova.blue { background: var(--jovablue1); }
          .btn-jova:hover { opacity: .89; }
        `}
      </style>
      <button
        className={`btn-jova ${color}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
