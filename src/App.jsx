import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Inicio from "./pages/Inicio";
import Integrante from './pages/Integrante';
import PeliculasAPI from "./pages/PeliculasAPI"
import PeliculasJson from "./pages/PeliculasJson"
// import Arbol from "./pages/Arbol";       <-- Comentado o borrado
// import Bitacora from "./pages/Bitacora"; <-- Comentado o borrado
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
              <Route path="/PeliculasAPI" element={<PeliculasAPI />} />
              <Route path="/PeliculasJson" element={<PeliculasJson />} />
              {/* <Route path="/Arbol" element={<Arbol />} /> */}       {/* <-- Comentado o borrado */}
              {/* <Route path="/Bitacora" element={<Bitacora />} /> */} {/* <-- Comentado o borrado */}
              
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