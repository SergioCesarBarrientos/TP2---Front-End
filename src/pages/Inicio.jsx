import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./inicio.css";
import portada from '../assets/img/portada.png';
import sergioFoto from "../assets/img/sergio.png";
import marianaFoto from "../assets/img/mariana.jpg";

const integrantes = [
  {
    id: 1,
    nombre: "Sergio Cesar Barrientos",
    puesto: "Desarrollador Frontend",
    foto: sergioFoto,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/SergioCesarBarrientos",
    ruta: "/Equipo/sergio-cesar-barrientos",
  },
 {
    id: 2,
    nombre: "Mariana Sosa",
    puesto: "Desarrolladora Frontend",
    foto: marianaFoto,
    linkedin: "www.linkedin.com/in/mariana-sosa-0b2378185",
    github: "https://github.com/MaruSosa",
    ruta: "/Equipo/mariana-sosa",
  },
  {
    id: 3,
    nombre: "Persona 3",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    ruta: "/Equipo/persona-3",
  },
  {
    id: 4,
    nombre: "Persona 4",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    ruta: "/Equipo/persona-4",
  },
  {
    id: 5,
    nombre: "Persona 5",
    puesto: "Desarrollador Frontend",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    ruta: "/Equipo/persona-5",
  },
];

function Inicio() {
  const [tarjetaActiva, setTarjetaActiva] = useState(null);
  const navigate = useNavigate();

  const irAEquipo = () => {
    document
      .getElementById("equipo")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const verPerfil = (integrante) => {
    navigate(integrante.ruta);
    window.scrollTo(0, 0);
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
            página de películas para esta segunda entrega
            de la materia DSWF de IFTS 29.
          </p>

          <button className="banner-boton" onClick={irAEquipo}>
            Conocé al equipo
            <ArrowRight size={18} />
          </button>
        </div>


      </section>

      <section className="equipo-seccion" id="equipo">
        <div className="equipo-encabezado">
          <div>
            <span className="seccion-etiqueta">
              LAS PERSONAS DETRÁS DEL PROYECTO
            </span>

            <h2>Nuestro equipo</h2>
            <p>Visitá los perfiles del equipo TechArg.</p>
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
                className={`equipo-card ${activa
                    ? `card-seleccionada ${colorSeleccion}`
                    : ""
                  }`}
                onClick={() =>
                  setTarjetaActiva(
                    activa ? null : integrante.id
                  )
                }
              >
                <div className="foto-contenedor">
                  {integrante.foto ? (
                    <img
                      src={integrante.foto}
                      alt={`Foto de ${integrante.nombre}`}
                      className="foto-placeholder"
                    />
                  ) : (
                    <div
                      className="foto-placeholder"
                      role="img"
                      aria-label={`Foto pendiente de ${integrante.nombre}`}
                    />
                  )}
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
