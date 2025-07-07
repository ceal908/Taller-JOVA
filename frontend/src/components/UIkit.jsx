// src/components/UIKit.jsx
import React from "react";

// Botón reutilizable
export function Btn({ children, onClick, color = "primary", type = "button", ...props }) {
  return (
    <button
      className={`btn ${color}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Input re-usable
export function Input({ label, ...props }) {
  return (
    <div className="ui-field">
      {label && <label className="ui-label">{label}</label>}
      <input className="ui-input" {...props} />
    </div>
  );
}

// Label
export function Label({ children, ...props }) {
  return <label className="ui-label" {...props}>{children}</label>;
}

// Card (útil para formularios)
export function Card({ title, children, style }) {
  return (
    <section className="ui-card" style={style}>
      {title && <h2 className="ui-card-title">{title}</h2>}
      {children}
    </section>
  );
}

// Título grande
export function PageTitle({ children }) {
  return <h1 className="ui-page-title">{children}</h1>;
}
