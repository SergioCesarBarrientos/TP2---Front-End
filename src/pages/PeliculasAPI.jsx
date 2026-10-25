import { useState, useEffect } from "react";
import "./PeliculasAPI.css";

function PeliculasAPI() {
  const [inputValue, setInputValue] = useState("");
  const [generoInput, setGeneroInput] = useState(""); // Lo que se selecciona en el combo

  const [busqueda, setBusqueda] = useState(""); // El título que se busca en la API
  const [generoBuscado, setGeneroBuscado] = useState(""); // El género que se aplica al filtrar

  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarPeliculas = async () => {
      if (busqueda.trim() === "") {
        setPeliculas([]);
        return;
      }

      setCargando(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${busqueda}`,
        );
        if (!res.ok) throw new Error("Error al buscar películas");

        const data = await res.json();
        const peliculasSeguras = Array.isArray(data) ? data : [];
        setPeliculas(peliculasSeguras);
      } catch (err) {
        setError(err.message);
        setPeliculas([]);
      } finally {
        setCargando(false);
      }
    };

    buscarPeliculas();
  }, [busqueda]);

  // Se ejecuta SOLO al apretar el botón "Buscar"
  const handleBuscar = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
    setGeneroBuscado(generoInput); // Recién acá se aplica el filtro
  };

  // Se aplica el filtro con el estado "generoBuscado"
  const peliculasFiltradas = peliculas.filter((item) => {
    if (generoBuscado === "") return true;
    return item.show.genres.includes(generoBuscado);
  });

  return (
    <>
      <header className="peliculas-superior">
        IFTS<span>29</span>
      </header>

      <div className="peliculas-pagina">
        <section className="peliculas-intro">
          <p className="peliculas-etiqueta">CATÁLOGO</p>
          <h1>Películas API</h1>
          <p className="peliculas-descripcion">
            Explorá las películas más populares con la API.
          </p>
        </section>

        <section className="peliculas-busqueda">
          <form onSubmit={handleBuscar}>
            <div className="peliculas-campo">
              <label htmlFor="buscar-titulo">Buscar por título</label>
              <input
                id="buscar-titulo"
                type="text"
                placeholder="Ej.: Batman"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="peliculas-campo">
              <label htmlFor="buscar-genero">Filtrar por género</label>
              <select
                id="buscar-genero"
                value={generoInput}
                onChange={(e) => setGeneroInput(e.target.value)} // Solo actualiza el combo visual
              >
                <option value="">Todos los géneros</option>
                <option value="Action">Acción</option>
                <option value="Adventure">Aventura</option>
                <option value="Animation">Animación</option>
                <option value="Comedy">Comedia</option>
                <option value="Crime">Crimen</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasía</option>
                <option value="Horror">Terror</option>
                <option value="Romance">Romance</option>
                <option value="Science-Fiction">Ciencia ficción</option>
                <option value="Thriller">Suspenso</option>
              </select>
            </div>

            <button className="peliculas-boton" type="submit">
              Buscar
            </button>
          </form>
        </section>

        <section className="peliculas-resultados">
          <div className="peliculas-resultados-cabecera">
            <h2>Películas disponibles</h2>
          </div>

          <div className="peliculas-grid">
            {cargando && <p>Buscando películas...</p>}
            {error && <p style={{ color: "red" }}>Hubo un error: {error}</p>}

            {!cargando &&
              !error &&
              peliculasFiltradas.length === 0 &&
              busqueda !== "" && (
                <p>No se encontraron resultados con esos filtros.</p>
              )}

            {!cargando &&
              !error &&
              peliculasFiltradas.length > 0 &&
              peliculasFiltradas.map((item) => {
                const show = item.show;
                return (
                  <article key={show.id} className="pelicula-card">
                    <div className="pelicula-poster">
                      {show.image ? (
                        <img
                          src={show.image.medium}
                          alt={show.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <span className="pelicula-poster-emoji">🎬</span>
                      )}
                    </div>
                    <div className="pelicula-info">
                      <span className="pelicula-genero">
                        {show.genres.length > 0
                          ? show.genres.join(" · ")
                          : "Sin género"}
                      </span>
                      <h3>{show.name}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: show.summary
                            ? show.summary.substring(0, 100) + "..."
                            : "Sin descripción.",
                        }}
                      />
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}

export default PeliculasAPI;
