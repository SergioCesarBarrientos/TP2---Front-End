import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  UserRoundGroup,
  House,
  Film,
  Database,
  GitBranch,
  BookOpen,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import "./SideBar.css";
import logo from "../assets/img/ifts.png";

function SideBar() {
  const location = useLocation();

  const [equipoAbierto, setEquipoAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  const integrantes = [
    {
      name: "Sergio Cesar Barrientos",
      path: "/Equipo/sergio-cesar-barrientos",
    },
    {
      name: "Mariana Sosa",
      path: "/Equipo/mariana-sosa",
    },
    {
      name: "Carolina Silva Cotto",
      path: "/Equipo/carolina-silva-cotto",
    },
    {
      name: "Miguel Marcaida",
      path: "/Equipo/miguel-marcaida",
    },
    {
      name: "Karina Sánchez",
      path: "/Equipo/karina-sanchez",
    },
  ];

  const menuItems = [
    { name: "Inicio", path: "/", icon: House },
    { name: "Películas API", path: "/PeliculasAPI", icon: Film },
    { name: "Películas JSON", path: "/PeliculasJson", icon: Database },
    { name: "Árbol", path: "/Arbol", icon: GitBranch },
    { name: "Bitácora", path: "/Bitacora", icon: BookOpen },
  ];

  const estaEnEquipo = location.pathname.startsWith("/Equipo");

  return (
    <>
      {/* Botón hamburguesa: solo aparece en pantallas pequeñas */}
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        aria-controls="menu-lateral"
      >
        {menuAbierto ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Fondo oscuro detrás del menú */}
      <button
        type="button"
        className={`sidebar-overlay ${
          menuAbierto ? "sidebar-overlay-visible" : ""
        }`}
        onClick={cerrarMenu}
        aria-label="Cerrar menú"
        tabIndex={menuAbierto ? 0 : -1}
      />

      <aside
        id="menu-lateral"
        className={`sidebar ${menuAbierto ? "sidebar-open" : ""}`}
      >
        <div className="sidebar-brand">
          <img src={logo} alt="Logo IFTS" className="sidebar-logo" />
          <h2 className="sidebar-title">TechArg</h2>
          <p className="sidebar-subtitle">Equipo 32 - 2B</p>
        </div>

        <nav className="sidebar-nav">
          {/* Inicio */}
          <NavLink
            to="/"
            end
            onClick={cerrarMenu}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <House size={20} strokeWidth={1.8} />
            <span>Inicio</span>
          </NavLink>

          {/* Equipo desplegable */}
          <div className="sidebar-team">
            <button
              type="button"
              className={`sidebar-link sidebar-team-button ${
                estaEnEquipo ? "active" : ""
              }`}
              onClick={() => setEquipoAbierto(!equipoAbierto)}
              aria-expanded={equipoAbierto}
              aria-controls="sidebar-team-submenu"
            >
              <UserRoundGroup size={20} strokeWidth={1.8} />
              <span>Equipo</span>
              <ChevronDown
                size={16}
                className={`sidebar-chevron ${
                  equipoAbierto ? "rotated" : ""
                }`}
              />
            </button>

            {equipoAbierto && (
              <div className="sidebar-submenu" id="sidebar-team-submenu">
                {integrantes.map((persona) => (
                  <NavLink
                    key={persona.path}
                    to={persona.path}
                    onClick={cerrarMenu}
                    className={({ isActive }) =>
                      `sidebar-sublink ${isActive ? "active" : ""}`
                    }
                  >
                    {persona.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Resto de las páginas */}
          {menuItems.slice(1).map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={cerrarMenu}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={20} strokeWidth={1.8} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">DSWF - IFTS29</div>
      </aside>
    </>
  );
}

export default SideBar;