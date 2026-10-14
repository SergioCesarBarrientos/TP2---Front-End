import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./inicio.css";

const integrantes = [
  {
    id: 1,
    nombre: "Sergio Cesar Barrientos",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/SergioCesarBarrientos",
  },
  {
    id: 2,
    nombre: "Persona 2",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    id: 3,
    nombre: "Persona 3",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    id: 4,
    nombre: "Persona 4",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    id: 5,
    nombre: "Persona 5",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
];

function Inicio() {
  const [tarjetaActiva, setTarjetaActiva] = useState(null);

  const irAEquipo = () => {
    document
      .getElementById("equipo")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const verPerfil = (integrante) => {
    console.log("Ver perfil de:", integrante.nombre);
  };

  return (
    <main className="home">
      <header className="marca-superior">
         IFTS<span>29</span>
      </header>

      <section className="home-banner">
        <div className="banner-contenido">
          <h1>
            Bienvenidos a <span>TechArg</span>
          </h1>

          <p>
            Somos el equipo TechArg y desarrollamos esta
            pagina de peliculas para esta segunda entrega de la materia DSWF de IFTS 29.
          </p>

          <button className="banner-boton" onClick={irAEquipo}>
            Conocé al equipo
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="banner-decoracion" aria-hidden="true">
          <div className="banner-circulo circulo-uno" />
          <div className="banner-circulo circulo-dos" />
          <div className="banner-circulo circulo-tres" />
          <div className="banner-codigo">&lt;/&gt;</div>
        </div>
      </section>

      <section className="equipo-seccion" id="equipo">
        <div className="equipo-encabezado">
          <div>
            <span className="seccion-etiqueta">
              LAS PERSONAS DETRÁS DEL PROYECTO
            </span>

            <h2>Nuestro equipo</h2>

            <p>Visita los perfiles del equipo TechArg.</p>
          </div>
        </div>

        <div className="equipo-grid">
          {integrantes.map((integrante, index) => {
            const activa = tarjetaActiva === integrante.id;

            const colorSeleccion =
              index % 2 === 0 ? "color-verde" : "color-azul";

            return (
              <article
                key={integrante.id}
                className={`equipo-card ${
                  activa
                    ? `card-seleccionada ${colorSeleccion}`
                    : ""
                }`}
                onClick={() =>
                  setTarjetaActiva(activa ? null : integrante.id)
                }
              >
                <div className="foto-contenedor">
                  <div
                    className="foto-placeholder"
                    role="img"
                    aria-label={`Foto de ${integrante.nombre}`}
                  />
                </div>

                <div className="card-contenido">
                  <h3>{integrante.nombre}</h3>

                  <p className="integrante-puesto">
                    {integrante.puesto}
                  </p>

                  <div className="integrante-redes">
                    <a
                      href={integrante.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`LinkedIn de ${integrante.nombre}`}
                      title="LinkedIn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaLinkedinIn size={18} />
                    </a>

                    <a
                      href={integrante.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub de ${integrante.nombre}`}
                      title="GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  <button
                    className="perfil-boton"
                    onClick={(e) => {
                      e.stopPropagation();
                      verPerfil(integrante);
                    }}
                  >
                    Ver perfil
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Inicio;
