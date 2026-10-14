import { useState } from "react";
import "./PeliculasJson.css";
import peliculas from "../peliculas.json";

function PeliculasJson() {
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [tituloBuscado, setTituloBuscado] = useState("");
    const [generoBuscado, setGeneroBuscado] = useState("");

    const generos = [
        ...new Set(peliculas.map((pelicula) => pelicula.genero)),
    ];

    const peliculasFiltradas = peliculas.filter((pelicula) => {
        const coincideTitulo = pelicula.titulo
            .toLowerCase()
            .includes(tituloBuscado.toLowerCase());

        const coincideGenero =
            generoBuscado === "" || pelicula.genero === generoBuscado;

        return coincideTitulo && coincideGenero;
    });

    function buscarPeliculas(event) {
        event.preventDefault();
        setTituloBuscado(titulo.trim());
        setGeneroBuscado(genero);
    }

    function limpiarBusqueda() {
        setTitulo("");
        setGenero("");
        setTituloBuscado("");
        setGeneroBuscado("");
    }

    return (
        <>
            <header className="catalogo-json-superior">
                IFTS<span>29</span>
            </header>

            <main className="catalogo-json-pagina">
                <section className="catalogo-json-intro">
                    <p className="catalogo-json-etiqueta">CATÁLOGO</p>

                    <h1>Películas (JSON Local)</h1>

                    <p className="catalogo-json-descripcion">
                        Explorá el catálogo de películas guardado en un
                        archivo JSON local.
                    </p>
                </section>

                <section className="catalogo-json-busqueda">
                    <form onSubmit={buscarPeliculas}>
                        <div className="catalogo-json-campo">
                            <label htmlFor="buscar-titulo">
                                Buscar por título
                            </label>

                            <input
                                id="buscar-titulo"
                                type="text"
                                placeholder="Escribí un título..."
                                value={titulo}
                                onChange={(event) =>
                                    setTitulo(event.target.value)
                                }
                            />
                        </div>

                        <div className="catalogo-json-campo">
                            <label htmlFor="buscar-genero">
                                Buscar por género
                            </label>

                            <select
                                id="buscar-genero"
                                value={genero}
                                onChange={(event) =>
                                    setGenero(event.target.value)
                                }
                            >
                                <option value="">Todos los géneros</option>

                                {generos.map((genero) => (
                                    <option key={genero} value={genero}>
                                        {genero}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="catalogo-json-boton"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>

                    {(titulo !== "" || genero !== "") && (
                        <button
                            className="catalogo-json-limpiar"
                            type="button"
                            onClick={limpiarBusqueda}
                        >
                            Limpiar búsqueda
                        </button>
                    )}
                </section>

                <section className="catalogo-json-resultados">
                    <div className="catalogo-json-resultados-cabecera">
                        <h2>Películas disponibles</h2>

                        <span>
                            {peliculasFiltradas.length}{" "}
                            {peliculasFiltradas.length === 1
                                ? "película"
                                : "películas"}
                        </span>
                    </div>

                    {peliculasFiltradas.length > 0 ? (
                        <div className="catalogo-json-grid">
                            {peliculasFiltradas.map((pelicula) => (
                                <article
                                    className="catalogo-json-card"
                                    key={pelicula.id}
                                >
                                    <div className="catalogo-json-poster">
                                        <img
                                            className="catalogo-json-imagen"
                                            src={pelicula.imagen}
                                            alt={`Póster de ${pelicula.titulo}`}
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="catalogo-json-info">
                                        <span className="catalogo-json-genero">
                                            {pelicula.genero}
                                        </span>

                                        <h3>{pelicula.titulo}</h3>

                                        <div className="catalogo-json-detalles">
                                            <p>
                                                <strong>Año:</strong>{" "}
                                                {pelicula.anio}
                                            </p>

                                            <p>
                                                <strong>Calificación:</strong>{" "}
                                                <span className="catalogo-json-calificacion">
                                                    ★ {pelicula.calificacion}/10
                                                </span>
                                            </p>

                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="catalogo-json-sin-resultados">
                            <span>🎬</span>

                            <h3>No encontramos películas</h3>

                            <p>
                                Probá con otro título o seleccioná otro género.
                            </p>

                            <button
                                className="catalogo-json-boton"
                                type="button"
                                onClick={limpiarBusqueda}
                            >
                                Ver todas las películas
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}

export default PeliculasJson;