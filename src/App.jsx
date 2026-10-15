import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Inicio from "./pages/Inicio";
import Integrante from './pages/Integrante';
import PeliculasAPI from "./pages/PeliculasAPI"
import PeliculasJson from "./pages/PeliculasJson"
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <div className="app-contenido">
          <main className="app-pagina">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Equipo/:id" element={<Integrante />} />
              <Route path="/PeliculasAPI" element= {<PeliculasAPI /> } />
              <Route path="/PeliculasJson" element={ <PeliculasJson />} />
              {/* Acá agregar las demás páginas */}
              {/* <Route path="/integrantes" element={<Integrantes />} /> */}
              {/* <Route path="/proyectos" element={<Proyectos />} /> */}

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

