import { useState, useEffect } from "react";
import "./PeliculasAPI.css";

function PeliculasAPI() {
  // Estado para el texto que el usuario escribe
  const [inputValue, setInputValue] = useState("");
  // Estado para el término que se busca en la API
  const [busqueda, setBusqueda] = useState("");
  
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Solo busca si hay una búsqueda activa
    const buscarPeliculas = async () => {
      if (busqueda.trim() === "") {
        setPeliculas([]);
        return;
      }

      setCargando(true);
      setError(null);

      try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${busqueda}`);
        
        if (!res.ok) {
          throw new Error("Error al buscar películas");
        }
        
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

  // Función que se ejecuta al apretar "Buscar"
  const handleBuscar = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
  };

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
              <label htmlFor="buscar-genero">Buscar por género</label>
              <select id="buscar-genero" defaultValue="">
                <option value="">Todos los géneros</option>
                <option value="Acción">Acción</option>
                <option value="Animación">Animación</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Romance">Romance</option>
                <option value="Terror">Terror</option>
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

            {!cargando && !error && peliculas.length === 0 && busqueda !== "" && (
              <p>No se encontraron resultados para "{busqueda}".</p>
            )}

            {!cargando && !error && peliculas.length > 0 &&
              peliculas.map((item) => {
                const show = item.show;
                return (
                  <article key={show.id} className="pelicula-card">
                    <div className="pelicula-poster">
                      {show.image ? (
                        <img
                          src={show.image.medium}
                          alt={show.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <span className="pelicula-poster-emoji">🎬</span>
                      )}
                    </div>
                    <div className="pelicula-info">
                      <span className="pelicula-genero">
                        {show.genres[0] || "Sin género"}
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