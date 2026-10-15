import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserRoundGroup, House, Film, Database, GitBranch, BookOpen, ChevronDown,
} from 'lucide-react';

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
    { name: 'Persona 2', path: '/Equipo/persona-2' },
    { name: 'Persona 3', path: '/Equipo/persona-3' },
    { name: 'Persona 4', path: '/Equipo/persona-4' },
    { name: 'Persona 5', path: '/Equipo/persona-5' },
  ];

  const menuItems = [
    { name: 'Inicio', path: '/', icon: House },
    { name: 'Películas API', path: '/PeliculasAPI', icon: Film },
    { name: 'Películas JSON', path: '/PeliculasJson', icon: Database },
    { name: 'Árbol', path: '/Arbol', icon: GitBranch },
    { name: 'Bitácora', path: '/Bitacora', icon: BookOpen },
  ];

  // Si estamos dentro de una ruta de Equipo,
  // el desplegable se abre automáticamente.
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
            <div className="sidebar-submenu" id="sidebar-team-submenu" >

              {/* Integrantes individuales */}
              {integrantes.map((persona) => (
                <NavLink  key={persona.path} to={persona.path} className={({ isActive }) =>
                    `sidebar-sublink ${ isActive ? 'active' : '' }`}> {persona.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Resto del menú */}
        {menuItems.slice(1).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={20} strokeWidth={1.8} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        DSWF - IFTS29
      </div>
    </aside>
  );
}

export default SideBar;