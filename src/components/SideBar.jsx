import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserRoundGroup, House, Film, Database, GitBranch, BookOpen, ChevronDown } from 'lucide-react';

import './Sidebar.css';
import logo from '../assets/img/ifts.png';

function SideBar() {
  const location = useLocation();
  const [equipoAbierto, setEquipoAbierto] = useState(false);

  const integrantes = [
    {
      name: 'Sergio Cesar Barrientos',
      path: '/Equipo/sergio-cesar-barrientos',
    },
    { 
      name: 'Mariana Sosa', 
      path: '/Equipo/mariana-sosa'
    },
    { name: 'Persona 3', path: '/Equipo/persona-3' },
    { name: 'Persona 4', path: '/Equipo/persona-4' },
    { name: 'Persona 5', path: '/Equipo/persona-5' },
  ];

  const estaEnEquipo = location.pathname.startsWith('/Equipo');

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img
          src={logo}
          alt="Logo IFTS"
          className="sidebar-logo"
        />
        <h2 className="sidebar-title">TechArg</h2>
        <p className="sidebar-subtitle">Equipo 32 - 2B</p>
      </div>

      <nav className="sidebar-nav">
        {/* Inicio */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
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
              estaEnEquipo ? 'active' : ''
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
                equipoAbierto ? 'rotated' : ''
              }`}
            />
          </button>

          {equipoAbierto && (
            <div className="sidebar-submenu" id="sidebar-team-submenu">
              {integrantes.map((persona) => (
                <NavLink  
                  key={persona.path} 
                  to={persona.path} 
                  className={({ isActive }) =>
                    `sidebar-sublink ${ isActive ? 'active' : '' }`
                  }
                >
                  {persona.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Películas API */}
        <NavLink 
          to="/PeliculasAPI" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          <Film size={20} strokeWidth={1.8} />
          <span>Películas API</span>
        </NavLink>

        {/* Películas JSON */}
        <NavLink 
          to="/PeliculasJson" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          <Database size={20} strokeWidth={1.8} />
          <span>Películas JSON</span>
        </NavLink>

        {/* Árbol */}
        <NavLink 
          to="/Arbol" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          <GitBranch size={20} strokeWidth={1.8} />
          <span>Árbol</span>
        </NavLink>

        {/* Bitácora */}
        <NavLink 
          to="/Bitacora" 
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          <BookOpen size={20} strokeWidth={1.8} />
          <span>Bitácora</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        DSWF - IFTS29
      </div>
    </aside>
  );
}

export default SideBar;