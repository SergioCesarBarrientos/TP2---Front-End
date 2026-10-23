import { useParams } from 'react-router-dom';
import {
    GraduationCap,
    Code2,
    Heart,
    Film,
    Music,
} from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Integrante.css';

import sergioFoto from '../assets/img/sergio.png';
import marianaFoto from '../assets/img/mariana.jpg';

function Integrante() {
    const { id } = useParams();

    const integrantes = {
        'sergio-cesar-barrientos': {
            nombre: 'Sergio Cesar Barrientos',
            rol: 'Estudiante de Desarrollo de Software',
            ciudad: 'Flores, CABA',
            edad: 27,
            descripcion:
                'Soy estudiante de Desarrollo de Software, con conocimientos en Desarrollo Web Full Stack, testing QA y automatización de pruebas.\n\nEmpecé mi recorrido con un curso de Desarrollo Web Full Stack, seguido por uno de Testing QA, donde encontré un gran interés y pasión por el mundo de la tecnología. Actualmente me encuentro estudiando en la Tecnicatura Superior en Desarrollo de Software, con el objetivo de complementar y seguir fortaleciendo aún más mis conocimientos en el mundo IT.',
            foto: sergioFoto,
            linkedin: 'https://www.linkedin.com',
            github: 'https://github.com/sergiocesarbarrientos',
            estudios: 'Tecnicatura Superior en Desarrollo de Software - IFTS 29',
            tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'MongoDB', 'Testing QA', 'Automatización de pruebas',],
            intereses: ['Desarrollo Web Full Stack', 'Testing QA', 'Automatización de pruebas', 'Tecnología',],

            peliculas: [
                { titulo: 'El amanecer de los muertos', anio: 2004, director: 'Zack Snyder', },
                { titulo: 'Resident Evil', anio: 2002, director: 'Paul W. S. Anderson', },
                { titulo: 'Train to Busan', anio: 2016, director: 'Yeon Sang-ho', },
                { titulo: '28 días después', anio: 2002, director: 'Danny Boyle', },
                { titulo: 'Guerra Mundial Z', anio: 2013, director: 'Marc Forster', },
                { titulo: 'Zombieland', anio: 2009, director: 'Ruben Fleischer', },],

            musica: [
                { titulo: 'De música ligera', artista: 'Soda Stereo', },
                { titulo: 'Persiana americana', artista: 'Soda Stereo', },
                { titulo: 'Ji ji ji', artista: 'Patricio Rey y sus Redonditos de Ricota', },
                { titulo: 'Loco (tu forma de ser)', artista: 'Los Auténticos Decadentes', },
            ],
        },

        'mariana-sosa': {
            nombre: 'Mariana Sosa',
            rol: 'Estudiante de Ingeniería en Sistemas y Desarrollo de Software',
            ciudad: 'Aguilares-Tucumán',
            edad: 36,
            descripcion:
                'Soy estudiante de Ingeniería en Sistemas y Desarrollo de Software. Me apasiona la programación, el desarrollo web y la creación de soluciones tecnológicas, combinando la lógica del código con el diseño.',
            foto: marianaFoto,
             linkedin: 'www.linkedin.com/in/mariana-sosa-0b2378185',
            github: 'https://github.com/MaruSosa',
            estudios: 'Ingeniería en Sistemas y Desarrollo de Software',
            tecnologias: ['JavaScript', 'C#', 'Node.js', 'Express', 'HTML', 'CSS', 'MySQL', 'Git'],
            intereses: ['Desarrollo Web', 'Programación', 'Diseño de Interfaces', 'Bases de datos'],
            peliculas: [
                { titulo: 'Psicosis', anio: 1960, director: 'Alfred Hitchcock' },
                { titulo: 'Troya', anio: 2004, director: 'Wolfgang Petersen' },
                { titulo: 'Coco', anio: 2017, director: 'Lee Unkrich y Adrián Molina' },
            ],
            musica: [
                { titulo: 'November Rain', artista: 'Guns N Roses' },
                { titulo: 'Knockin On Heavens Door', artista: 'Guns N Roses' },
                { titulo: 'Flowers', artista: 'Miley Cyrus' },
                { titulo: 'Seguir viviendo sin tu amor', artista: 'Luis Alberto Spinetta' },
            ],
        },

        'persona-3': {
            nombre: 'Persona 3',
            rol: 'Estudiante y desarrollador web',
            ciudad: '',
            edad: null,
            descripcion:
                'Integrante del Equipo 32, participando en el desarrollo de TechArg.',
            foto: '',
              linkedin: 'https://www.linkedin.com',
            github: 'https://github.com',
            estudios: 'Estudiante de IFTS 29',
            tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
            intereses: ['Programación', 'Diseño web'],
            peliculas: [],
            musica: [],
        },

        'persona-4': {
            nombre: 'Persona 4',
            rol: 'Estudiante y desarrollador web',
            ciudad: '',
            edad: null,
            descripcion:
                'Integrante del Equipo 32, participando en el desarrollo de TechArg.',
            foto: '',
             linkedin: 'https://www.linkedin.com',
            github: 'https://github.com',
            estudios: 'Estudiante de IFTS 29',
            tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
            intereses: ['Tecnología', 'Desarrollo web'],
            peliculas: [],
            musica: [],
        },

        'persona-5': {
            nombre: 'Persona 5',
            rol: 'Estudiante y desarrollador web',
            ciudad: '',
            edad: null,
            descripcion:
                'Integrante del Equipo 32, participando en el desarrollo de TechArg.',
            foto: '',
             linkedin: 'https://www.linkedin.com',
            github: 'https://github.com',
            estudios: 'Estudiante de IFTS 29',
            tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
            intereses: ['Programación', 'Tecnología'],
            peliculas: [],
            musica: [],
        },
    };
    const integrante = integrantes[id];

    return (
        <>
            <header className="integrante-header">
                IFTS<span>29</span>
            </header>

            <main className="integrante-page">
                <section className="integrante-presentacion">
                    <div className="integrante-foto-contenedor">
                        {integrante.foto ? (
                            <img
                                src={integrante.foto}
                                alt={`Foto de ${integrante.nombre}`}
                                className="integrante-foto"
                            />
                        ) : (
                            <div className="integrante-foto-vacia">
                                Foto pendiente
                            </div>
                        )}
                    </div>

                    <div className="integrante-datos">
                        <span className="integrante-etiqueta">
                            EQUIPO 32 · TECHARG
                        </span>

                        <h1>{integrante.nombre}</h1>

                        <p className="integrante-rol">
                            {integrante.rol}
                        </p>

                        <div className="integrante-detalles">
                            {integrante.ciudad && (
                                <p>
                                    <strong>Ciudad:</strong>{' '}
                                    {integrante.ciudad}
                                </p>
                            )}

                            {integrante.edad != null && (
                                <p>
                                    <strong>Edad:</strong>{' '}
                                    {integrante.edad} años
                                </p>
                            )}
                        </div>

                        <p className="integrante-descripcion">
                            {integrante.descripcion}
                        </p>

                        <div className="integrantes-vista__redes">
                            {integrante.linkedin && (
                                <a
                                    href={integrante.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    title="LinkedIn"
                                    className="icono-red"
                                >
                                    <FaLinkedinIn size={20} />
                                </a>
                            )}

                            {integrante.github && (
                                <a
                                    href={integrante.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    title="GitHub"
                                    className="icono-red"
                                >
                                    <FaGithub size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                <section className="integrante-seccion">
                    <h2>Sobre mí</h2>

                    <div className="integrante-info">
                        <div className="integrante-info-icono">
                            <GraduationCap size={22} />
                        </div>

                        <div className="integrante-info-contenido">
                            <h3>Formación</h3>
                            <p>{integrante.estudios}</p>
                        </div>
                    </div>

                    <div className="integrante-info">
                        <div className="integrante-info-icono">
                            <Code2 size={22} />
                        </div>

                        <div className="integrante-info-contenido">
                            <h3>Tecnologías y conocimientos</h3>

                            <div className="integrante-etiquetas">
                                {integrante.tecnologias.map(
                                    (tecnologia) => (
                                        <span
                                            key={tecnologia}
                                            className="integrante-chip"
                                        >
                                            {tecnologia}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="integrante-info">
                        <div className="integrante-info-icono">
                            <Heart size={22} />
                        </div>

                        <div className="integrante-info-contenido">
                            <h3>Intereses</h3>

                            <div className="integrante-etiquetas">
                                {integrante.intereses.map((interes) => (
                                    <span
                                        key={interes}
                                        className="integrante-chip"
                                    >
                                        {interes}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {integrante.peliculas.length > 0 && (
                    <section className="integrante-favoritos">
                        <div className="integrante-favorito-card">
                            <div className="integrante-favorito-titulo">
                                <Film size={22} />
                                <h2>Películas favoritas</h2>
                            </div>

                            <ul className="integrante-lista-peliculas">
                                {integrante.peliculas.map((pelicula) => (
                                    <li key={pelicula.titulo}>
                                        <strong>{pelicula.titulo}</strong>
                                        <span>
                                            {pelicula.anio} · {pelicula.director}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="integrante-favorito-card">
                            <div className="integrante-favorito-titulo">
                                <Music size={22} />
                                <h2>Música favorita</h2>
                            </div>

                            <ul className="integrante-lista-musica">
                                {integrante.musica.map((cancion) => (
                                    <li key={cancion.titulo}>
                                        <strong>{cancion.titulo}</strong>
                                        <span>{cancion.artista}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}

export default Integrante;
