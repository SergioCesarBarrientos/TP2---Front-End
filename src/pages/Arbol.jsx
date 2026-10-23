import React, { useState } from 'react';

// Componente helper para renderizar cada nodo desplegable
function NodoComponente({ nombre, tipo, descripcion, children }) {
  const [abierto, setAbierto] = useState(true);

  return (
    <div style={{ marginLeft: '20px', marginTop: '8px', borderLeft: '2px solid #3b82f6', paddingLeft: '12px' }}>
      <div 
        onClick={() => setAbierto(!abierto)} 
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
      >
        <span>{children && children.length > 0 ? (abierto ? '▼' : '►') : '•'}</span>
        <span style={{ color: '#1e40af' }}>{nombre}</span>
        <span style={{ fontSize: '0.8em', backgroundColor: '#e0e7ff', padding: '2px 6px', borderRadius: '4px', color: '#3730a3' }}>
          {tipo}
        </span>
      </div>
      {descripcion && (
        <p style={{ margin: '4px 0 0 24px', fontSize: '0.85em', color: '#4b5563' }}>
          {descripcion}
        </p>
      )}
      {abierto && children && (
        <div style={{ marginTop: '4px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Arbol() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '8px' }}>Árbol de Renderizado de la Aplicación</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>
        Estructura jerárquica de componentes React y su relación en el proyecto. Podés hacer clic en los nodos para expandir o contraer las ramas.
      </p>

      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <NodoComponente nombre="App" tipo="Componente Raíz" descripcion="Maneja el enrutamiento con React Router y la estructura global.">
          <NodoComponente nombre="Sidebar" tipo="Layout Compartido" descripcion="Menú lateral de navegación persistente en todas las secciones.">
            <NodoComponente nombre="NavLink" tipo="Componente de Navegación" descripcion="Enlace interactivo que marca la sección activa." />
          </NodoComponente>

          <NodoComponente nombre="MainContent" tipo="Contenedor de Rutas" descripcion="Renderiza la pantalla según la URL activa.">
            
            <NodoComponente nombre="Inicio" tipo="Página / Portada" descripcion="Presentación del equipo, nombre, descripción y acceso a integrantes." />
            
            <NodoComponente nombre="Integrante" tipo="Página de Perfil" descripcion="Muestra la información individual (Sergio y Mariana).">
              <NodoComponente nombre="PerfilCard" tipo="Subcomponente / UI" descripcion="Tarjeta reutilizable con datos, redes, gustos y tecnologías." />
            </NodoComponente>

            <NodoComponente nombre="PeliculasJson" tipo="Página de Datos Locales" descripcion="Muestra las películas guardadas localmente en JSON.">
              <NodoComponente nombre="BuscadorFiltro" tipo="UI / Control" descripcion="Filtro por texto y categoría de película." />
              <NodoComponente nombre="PeliculaCard" tipo="Componente Reutilizable" descripcion="Renderiza cada película en formato tarjeta." />
            </NodoComponente>

            <NodoComponente nombre="PeliculasAPI" tipo="Página API Pública" descripcion="Consulta datos de películas desde una API externa.">
              <NodoComponente nombre="EstadoCarga" tipo="UI Feedback" descripcion="Mensaje o indicador mientras se consultan los datos." />
              <NodoComponente nombre="EstadoError" tipo="UI Feedback" descripcion="Mensaje ante fallos en la consulta a la API." />
            </NodoComponente>

            <NodoComponente nombre="Arbol" tipo="Página / Documentación" descripcion="Visualización interactiva de la jerarquía de componentes." />
            
            <NodoComponente nombre="Bitacora" tipo="Página / Registros" descripcion="Registro del proceso de trabajo, decisiones y solución de problemas." />

          </NodoComponente>
        </NodoComponente>
      </div>
    </div>
  );
}