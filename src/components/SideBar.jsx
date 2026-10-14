import { NavLink } from 'react-router-dom';
import {UserRoundGroup, House, Film, Database, GitBranch, BookOpen,} from 'lucide-react';
import './Sidebar.css';
import logo from '../assets/img/ifts.png';

function SideBar() {
  const menuItems = [
    { name: 'Inicio', path: '/', icon: House },
    { name: 'Equipo', path: '/Equipo', icon: UserRoundGroup },
    { name: 'Películas API', path: '/PeliculasAPI', icon: Film },
    { name: 'Películas JSON', path: '/PeliculasJson', icon: Database },
    { name: 'Árbol', path: '/Arbol', icon: GitBranch },
    { name: 'Bitácora', path: '/Bitacora', icon: BookOpen },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img src={logo} alt="Logo IFTS" className="sidebar-logo" />

        <h2 className="sidebar-title">TechArg</h2>
        <p className="sidebar-subtitle">Equipo 32 - 2B</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
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