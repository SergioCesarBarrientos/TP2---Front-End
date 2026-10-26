import { useState } from "react";
import "./Arbol.css";

// Árbol real de la aplicación (se omiten los <div> de maquetación).
const arbol = {
  nombre: "App",
  tipo: "Componente raíz",
  archivo: "src/App.jsx",
  descripcion:
    "Componente principal. Se renderiza desde main.jsx y arma el layout y las rutas.",
  hijos: [
    {
      nombre: "BrowserRouter",
      tipo: "React Router",
      descripcion: "Habilita la navegación por URL sin recargar la página.",
      hijos: [
        {
          nombre: "SideBar",
          tipo: "Layout",
          archivo: "src/components/SideBar.jsx",
          descripcion:
            "Menú lateral compartido: identidad del equipo, enlaces, sección activa y panel para celular.",
        },
        {
          nombre: "Routes",
          tipo: "React Router",
          descripcion: "Elige qué página mostrar según la URL.",
          hijos: [
            {
              nombre: "Inicio",
              tipo: "Página",
              archivo: "src/pages/Inicio.jsx",
              descripcion: "Portada del equipo con las tarjetas de los integrantes.",
            },
            {
              nombre: "Integrante",
              tipo: "Página",
              archivo: "src/pages/Integrante.jsx",
              descripcion: "Perfil de cada persona. Toma el id de la URL (/Equipo/:id).",
            },
            {
              nombre: "PeliculasJson",
              tipo: "Página",
              archivo: "src/pages/PeliculasJson.jsx",
              descripcion: "Catálogo local de 20 películas con búsqueda y filtro por género.",
            },
            {
              nombre: "PeliculasAPI",
              tipo: "Página",
              archivo: "src/pages/PeliculasAPI.jsx",
              descripcion:
                "Búsqueda en la API pública de TVMaze, con estados de carga y de error.",
            },
            {
              nombre: "Arbol",
              tipo: "Página",
              archivo: "src/pages/Arbol.jsx",
              descripcion: "Esta página. Dibuja el árbol con el componente NodoComponente.",
              hijos: [
                {
                  nombre: "NodoComponente",
                  tipo: "Componente reutilizable",
                  archivo: "src/pages/Arbol.jsx",
                  descripcion:
                    "Muestra un nodo y, de forma recursiva, sus hijos. Se reutiliza con props distintas.",
                },
              ],
            },
            {
              nombre: "Bitacora",
              tipo: "Página",
              archivo: "src/pages/Bitacora.jsx",
              descripcion: "Registros del proceso, con desplegables y filtro por tipo.",
            },
          ],
        },
        {
          nombre: "Footer",
          tipo: "Layout",
          archivo: "src/components/Footer.jsx",
          descripcion: "Pie de página que se muestra en todas las secciones.",
        },
      ],
    },
  ],
};

function NodoComponente({ nodo }) {
  const [abierto, setAbierto] = useState(true);
  const tieneHijos = nodo.hijos && nodo.hijos.length > 0;

  return (
    <div className="arbol-nodo">
      <button
        type="button"
        className="arbol-header"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={tieneHijos ? abierto : undefined}
      >
        <span className="arbol-flecha">
          {tieneHijos ? (abierto ? "▼" : "►") : "•"}
        </span>
        <span className="arbol-nombre">{nodo.nombre}</span>
        <span className="arbol-tipo">{nodo.tipo}</span>
      </button>

      {nodo.archivo && <p className="arbol-archivo">{nodo.archivo}</p>}
      {nodo.descripcion && <p className="arbol-desc">{nodo.descripcion}</p>}

      {tieneHijos && abierto && (
        <div className="arbol-hijos">
          {nodo.hijos.map((hijo) => (
            <NodoComponente key={hijo.nombre} nodo={hijo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Arbol() {
  return (
    <div className="arbol-page">
      {/* ACÁ ESTÁ LA MAGIA: EL HEADER QUE EMPUJA TODO HACIA ABAJO */}
      <header className="marca-superior">
        IFTS<span>29</span>
      </header>

      <h1>Árbol de renderizado</h1>
      <p>
        Jerarquía de componentes de la aplicación. Tocá un nodo para expandirlo
        o contraerlo.
      </p>
      <div className="arbol-contenedor">
        <NodoComponente nodo={arbol} />
      </div>
    </div>
  );
}