import "./PeliculasAPI.css";

function PeliculasAPI() {
    return (<> <header className="peliculas-superior"> IFTS<span>29</span> </header>

        <div className="peliculas-pagina"> <section className="peliculas-intro"> <p className="peliculas-etiqueta">CATÁLOGO</p>

            <h1>Películas API</h1>

            <p className="peliculas-descripcion"> Explorá las películas más populares con la API. </p> </section>

            <section className="peliculas-busqueda"> <form onSubmit={(event) => event.preventDefault()}> <div className="peliculas-campo"> <label htmlFor="buscar-titulo"> Buscar por título </label>

                <input id="buscar-titulo" type="text" placeholder="Ej.: Interestelar" /> </div>

                <div className="peliculas-campo"> <label htmlFor="buscar-genero"> Buscar por género </label>

                    <select id="buscar-genero" defaultValue=""> <option value="">Todos los géneros</option> <option value="Acción">Acción</option> <option value="Animación">Animación</option> <option value="Ciencia ficción"> Ciencia ficción </option> <option value="Romance">Romance</option> <option value="Terror">Terror</option> </select> </div>

                <button className="peliculas-boton" type="submit"> Buscar </button> </form> </section>

            <section className="peliculas-resultados"> <div className="peliculas-resultados-cabecera"> <h2>Películas disponibles</h2> </div>

                <div className="peliculas-grid"> <article className="pelicula-card"> <div className="pelicula-poster azul"> <span className="pelicula-poster-emoji"> 🎬 </span>

                    <span className="pelicula-poster-titulo"> Próximamente </span> </div>

                    <div className="pelicula-info"> <span className="pelicula-genero"> Catálogo </span>

                        <h3>Películas</h3>

                        <p> Aquí aparecerán las películas de la API. </p> </div> </article> </div> </section> </div> </>);
}

export default PeliculasAPI;