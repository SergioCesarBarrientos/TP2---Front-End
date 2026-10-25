import { useState } from "react";
import "./Bitacora.css";

const registros = [
  {
    id: 1,
    fecha: "Octubre 2026",
    tipo: "Avance",
    titulo: "Del TP1 a React",
    resumen: "Migramos el sitio del TP1 a una aplicación React con Vite y React Router.",
    detalle:
      "Armamos la estructura de componentes, la sidebar compartida y las rutas de cada sección. El menú se adapta a celular con un panel que se abre y se cierra.",
  },
  {
    id: 2,
    fecha: "Octubre 2026",
    tipo: "Avance",
    titulo: "Perfiles del equipo",
    resumen: "Cada integrante tiene su perfil dentro de la app y una tarjeta en la portada.",
    detalle:
      "Los datos de cada persona (estudios, tecnologías, intereses, películas y música) se muestran con un mismo componente de perfil, que elige a quién mostrar según la URL.",
  },
  {
    id: 3,
    fecha: "Octubre 2026",
    tipo: "Avance",
    titulo: "Catálogo JSON con búsqueda y filtro",
    resumen: "Cargamos 20 películas en un JSON local y las mostramos en tarjetas.",
    detalle:
      "La lista se puede buscar por título y filtrar por género. Si no hay resultados, la página lo avisa y permite restablecer la lista completa.",
  },
  {
    id: 4,
    fecha: "Octubre 2026",
    tipo: "Decisión",
    titulo: "Elección de la API pública",
    resumen: "Usamos la API de TVMaze para la sección de series.",
    detalle:
      "Se consulta desde el navegador sin clave privada, como pide la consigna. La página muestra un mensaje mientras carga y otro si hay un error.",
  },
  {
    id: 5,
    fecha: "23 de octubre de 2026",
    tipo: "Dificultad",
    titulo: "Error de mayúsculas en Vercel",
    resumen: "Dos imports de CSS no coincidían en mayúsculas con el nombre real del archivo.",
    detalle:
      "En Windows funcionaba, pero Vercel compila en Linux, que distingue mayúsculas, y el build fallaba. Corregimos los nombres de los imports (SideBar.css e Inicio.css).",
  },
  {
    id: 6,
    fecha: "23 de octubre de 2026",
    tipo: "Decisión",
    titulo: "Configuración de Vercel para las rutas",
    resumen: "Agregamos vercel.json para poder recargar o abrir directamente cualquier sección.",
    detalle:
      "La aplicación es de una sola página. Sin esa regla, Vercel buscaría un archivo por cada ruta y devolvería un error 404.",
  },
  {
    id: 7,
    fecha: "Octubre 2026",
    tipo: "Dificultad",
    titulo: "Conflicto de merge en App.jsx",
    resumen: "Al juntar ramas quedaron marcas de conflicto de Git dentro de App.jsx.",
    detalle:
      "Con esas marcas el proyecto no compilaba. Lo resolvimos entre integrantes dejando las rutas de Árbol y Bitácora y quitando las marcas.",
  },
];

const tipos = ["Todos", "Avance", "Decisión", "Dificultad"];

export default function Bitacora() {
  const [filtro, setFiltro] = useState("Todos");

  const visibles =
    filtro === "Todos"
      ? registros
      : registros.filter((registro) => registro.tipo === filtro);

  return (
    <div className="bitacora-pagina">
      <h1 className="bitacora-titulo">Bitácora del equipo</h1>
      <p className="bitacora-intro">
        Registro de avances, decisiones y dificultades durante el desarrollo del TP2.
      </p>

      <div className="bitacora-filtros">
        {tipos.map((tipo) => (
          <button
            key={tipo}
            type="button"
            className={`bitacora-filtro ${filtro === tipo ? "activo" : ""}`}
            onClick={() => setFiltro(tipo)}
            aria-pressed={filtro === tipo}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="bitacora-lista">
        {visibles.length === 0 && (
          <p className="bitacora-vacio">No hay registros de este tipo.</p>
        )}

        {visibles.map((registro) => (
          <details key={registro.id} className="bitacora-registro">
            <summary>
              <span>{registro.titulo}</span>
              <span className={`bitacora-etiqueta ${registro.tipo.toLowerCase().replace("ó", "o")}`}>
                {registro.tipo}
              </span>
              <span className="bitacora-fecha">{registro.fecha}</span>
            </summary>
            <div className="bitacora-detalle">
              <p><strong>Resumen:</strong> {registro.resumen}</p>
              <p><strong>Detalle:</strong> {registro.detalle}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}