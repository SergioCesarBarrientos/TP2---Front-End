import { useState } from "react";
import "./Bitacora.css";

const registros = [
  {
    id: 1,
    fecha: "TP1",
    tipo: "Decisión",
    titulo: "Decisiones heredadas del TP1",
    resumen:
      "Mantuvimos el nombre TechArg, la idea de estilos por integrante y las tarjetas en la portada.",
    detalle:
      "El nombre combina tecnología con Argentina. En el TP1 cada integrante tuvo su propio CSS para evitar conflictos, y la portada combinaba un carrusel de habilidades con una grilla de tarjetas. En el TP2 mantuvimos las tarjetas de cada integrante en la portada.",
  },
  {
    id: 2,
    fecha: "14 y 15 de octubre de 2026",
    tipo: "Avance",
    titulo: "Estructura inicial y primeros perfiles",
    resumen:
      "Se creó el proyecto React con Vite y se cargaron los primeros perfiles con su navegación.",
    detalle:
      "Un mismo componente de perfil muestra a cada persona según la URL, y desde la portada y el menú se llega a cada uno. También se ajustaron los estilos.",
  },
  {
    id: 3,
    fecha: "19 al 24 de octubre de 2026",
    tipo: "Avance",
    titulo: "Perfiles de los integrantes",
    resumen: "Cada integrante cargó sus datos y su foto en la aplicación.",
    detalle:
      "Mariana completó el suyo el 19 y el 23, Carolina el 23, y Karina y Miguel el 24. Cada perfil quedó disponible desde la portada y desde el menú lateral.",
  },
  {
    id: 4,
    fecha: "23 de octubre de 2026",
    tipo: "Avance",
    titulo: "Diseño responsive y menú hamburguesa",
    resumen:
      "La aplicación se adapta a celular, con un menú lateral que se abre y se cierra.",
    detalle:
      "También se agregó el diseño responsive a la página de cada integrante.",
  },
  {
    id: 5,
    fecha: "23 de octubre de 2026",
    tipo: "Avance",
    titulo: "Primeras versiones del Árbol y la Bitácora",
    resumen:
      "Se agregaron las secciones de Árbol de renderizado y Bitácora, con sus rutas.",
    detalle:
      "Se corrigieron las rutas y el CSS del árbol. Sobre esas versiones iniciales se trabajó después.",
  },
  {
    id: 6,
    fecha: "23 de octubre de 2026",
    tipo: "Dificultad",
    titulo: "Error de mayúsculas en Vercel",
    resumen:
      "Dos imports de CSS no coincidían en mayúsculas con el nombre real del archivo.",
    detalle:
      "En Windows funcionaba, pero Vercel compila en Linux, que distingue mayúsculas, y el build fallaba. Corregimos los nombres de los imports (SideBar.css e Inicio.css).",
  },
  {
    id: 7,
    fecha: "23 de octubre de 2026",
    tipo: "Decisión",
    titulo: "Configuración de Vercel para las rutas",
    resumen:
      "Se agregó vercel.json para poder recargar o abrir directamente cualquier sección.",
    detalle:
      "La aplicación es de una sola página. Sin esa regla, Vercel buscaría un archivo por cada ruta y devolvería un error 404.",
  },
  {
    id: 8,
    fecha: "23 de octubre de 2026",
    tipo: "Avance",
    titulo: "Sección de la API y navegación completa",
    resumen:
      "Se implementó la API pública con fetch, estados de carga y de error y búsqueda por texto, y se conectaron las rutas de Árbol y Bitácora.",
    detalle:
      "La sección usa TVMaze, una API que se consulta desde el navegador sin clave privada. Con las rutas conectadas, todas las secciones del menú abren su propia página.",
  },
  {
    id: 9,
    fecha: "23 de octubre de 2026",
    tipo: "Avance",
    titulo: "Primera versión del README",
    resumen:
      "Se reemplazó el README de la plantilla por uno con descripción, integrantes y uso de IA.",
    detalle:
      "Después cada integrante completó su responsabilidad y su declaración de IA.",
  },
  {
    id: 10,
    fecha: "24 de octubre de 2026",
    tipo: "Dificultad",
    titulo: "Conflicto de merge en App.jsx",
    resumen:
      "Al juntar ramas quedaron marcas de conflicto de Git dentro de App.jsx.",
    detalle:
      "Con esas marcas el proyecto no compilaba. Lo resolvimos dejando las rutas de Árbol y Bitácora y quitando las marcas.",
  },
  {
    id: 11,
    fecha: "24 de octubre de 2026",
    tipo: "Avance",
    titulo: "Mejoras en la API y en los catálogos",
    resumen:
      "Se completó el filtro por género, se unificó el estilo de las tarjetas y se agregó un detalle expandible en el catálogo JSON.",
    detalle:
      "Las series muestran todos sus géneros, el detalle del catálogo muestra la sinopsis de cada película, y los catálogos se adaptan a distintos tamaños de pantalla.",
  },
  {
    id: 12,
    fecha: "24 de octubre de 2026",
    tipo: "Decisión",
    titulo: "La sección de la API pasa a series y suma reintentar",
    resumen:
      "TVMaze devuelve series, así que la sección se renombró a Series y se agregó un botón de reintentar.",
    detalle:
      "El botón vuelve a pedir los datos cuando hay un error. Se mantuvo el nombre del componente (PeliculasAPI) para no romper rutas ni imports.",
  },
  {
    id: 13,
    fecha: "24 de octubre de 2026",
    tipo: "Avance",
    titulo: "Árbol y Bitácora reescritos",
    resumen:
      "A partir de las primeras versiones, se reescribieron las dos secciones.",
    detalle:
      "El Árbol se arma desde datos e indica el archivo de cada componente para que coincida con el código. La Bitácora tiene registros reales, filtro por tipo y estilos en su propio CSS.",
  },
  {
    id: 14,
    fecha: "25 de octubre de 2026",
    tipo: "Avance",
    titulo: "Cierre: README según la plantilla y ajustes de calidad",
    resumen:
      "El README quedó con el formato de la cátedra y se evitó la pantalla en blanco con un perfil inexistente.",
    detalle:
      "El README tiene título, sitio publicado y descripción de cada captura. También se limpió un import sin usar y se corrigió el enlace de LinkedIn de un perfil.",
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
      {/* ACÁ AGREGAMOS EL HEADER */}
      <header className="marca-superior">
        IFTS<span>29</span>
      </header>

      <h1 className="bitacora-titulo">Bitácora del equipo</h1>
      <p className="bitacora-intro">
        Registro de avances, decisiones y dificultades durante el desarrollo del
        TP2, con la fecha de cada uno.
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
              <span
                className={`bitacora-etiqueta ${registro.tipo.toLowerCase().replace("ó", "o")}`}
              >
                {registro.tipo}
              </span>
              <span className="bitacora-fecha">{registro.fecha}</span>
            </summary>
            <div className="bitacora-detalle">
              <p>
                <strong>Resumen:</strong> {registro.resumen}
              </p>
              <p>
                <strong>Detalle:</strong> {registro.detalle}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
