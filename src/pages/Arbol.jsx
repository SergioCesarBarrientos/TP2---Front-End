import React, { useState } from 'react';
import './Arbol.css'; // O podés integrarlo en tus estilos globales

function NodoComponente({ nombre, tipo, descripcion, children }) {
  const [abierto, setAbierto] = useState(true);

  return (
    <div className="arbol-nodo">
      <div onClick={() => setAbierto(!abierto)} className="arbol-header">
        <span>{children && children.length > 0 ? (abierto ? '▼' : '►') : '•'}</span>
        <span className="arbol-nombre">{nombre}</span>
        <span className="arbol-tipo">{tipo}</span>
      </div>
      {descripcion && <p className="arbol-desc">{descripcion}</p>}
      {abierto && children && <div className="arbol-hijos">{children}</div>}
    </div>
  );
}

export default function Arbol() {
  return (
    <div className="app-pagina arbol-page">
      <h2>Árbol de Renderizado</h2>
      <p>Estructura jerárquica de componentes React y su relación en el proyecto.</p>
      <div className="arbol-contenedor">
        <NodoComponente nombre="App" tipo="Raíz" descripcion="Maneja rutas y layout global.">
          <NodoComponente nombre="Sidebar" tipo="Layout" descripcion="Menú lateral compartido." />
          <NodoComponente nombre="MainContent" tipo="Contenedor" descripcion="Renderiza las vistas según la ruta.">
            <NodoComponente nombre="Inicio" tipo="Portada" />
            <NodoComponente nombre="Integrante" tipo="Perfil" />
            <NodoComponente nombre="PeliculasJson" tipo="Datos Locales" />
            <NodoComponente nombre="PeliculasAPI" tipo="API Externa" />
            <NodoComponente nombre="Arbol" tipo="Documentación" />
            <NodoComponente nombre="Bitacora" tipo="Documentación" />
          </NodoComponente>
        </NodoComponente>
      </div>
    </div>
  );
}