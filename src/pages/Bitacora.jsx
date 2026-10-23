import React from 'react';


const registrosBitacora = [
  {
    id: 1,
    fecha: "Octubre 2026",
    fase: "Estructura base y React Router",
    resumen: "Migración del proyecto del TP1 a componentes de React.",
    detalle: "Configuración inicial de Vite, enrutamiento y diseño de la sidebar compartida."
  },
  {
    id: 2,
    fecha: "Octubre 2026",
    fase: "Componentes, JSON y API",
    resumen: "Implementación de perfiles, datos locales y consumo de API.",
    detalle: "Uso de props dinámicas, filtros de búsqueda y manejo de estados asíncronos."
  }
];

export default function Bitacora() {
  return (
    <div className="app-pagina bitacora-page" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--fuente-titulos)', color: 'var(--color-texto-principal)', marginBottom: '10px' }}>
        Bitácora del Equipo
      </h2>
      <p style={{ fontFamily: 'var(--fuente-texto)', color: 'var(--color-texto-secundario)', marginBottom: '20px' }}>
        Registro de avances, decisiones y solución de problemas durante el desarrollo del TP2.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {registrosBitacora.map((registro) => (
          <details 
            key={registro.id} 
            style={{ 
              background: '#ffffff', 
              border: '1px solid #cfd8dc', 
              borderRadius: '12px', 
              padding: '16px',
              cursor: 'pointer',
              fontFamily: 'var(--fuente-texto)'
            }}
          >
            <summary style={{ fontWeight: '700', color: 'var(--color-primario)', display: 'flex', justifyContent: 'space-between' }}>
              <span>{registro.fase}</span>
              <span style={{ color: 'var(--color-secundario)', fontSize: '0.9rem' }}>{registro.fecha}</span>
            </summary>
            <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #eceff1', color: 'var(--color-texto-principal)' }}>
              <p><strong>Resumen:</strong> {registro.resumen}</p>
              <p style={{ marginTop: '6px', color: '#54656d' }}><strong>Detalle:</strong> {registro.detalle}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}