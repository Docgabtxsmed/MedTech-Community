import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SidebarMenu.module.css';
import { tutorialData } from '../data/tutorialData';

/**
 * Componente do Menu Lateral/Topo Responsivo.
 */
const SidebarMenu: React.FC = () => {
  return (
    <nav className={css.sidebar}>
      <div className={css.headerProps}>
        <h2 className={css.logo}>
          <span className="keyword-cyan">Claude</span> Ecosystem
        </h2>
      </div>

      <ul className={css.navList}>
        <li>
          {/* NavLink do react-router-dom já injeta uma classe "active" quando selecionado */}
          <NavLink
            to="/biblioteca"
            end
            className={({ isActive }) => (isActive ? `${css.navItem} ${css.active}` : css.navItem)}
          >
            Voltar ao Hub
          </NavLink>
        </li>
        {/* Renderização dinâmica dos módulos do nosso arquivo de dados! */}
        {tutorialData.map((module) => (
          <li key={module.id}>
            <NavLink
              to={`/biblioteca/claude/modulo/${module.id}`}
              className={({ isActive }) => (isActive ? `${css.navItem} ${css.active}` : css.navItem)}
            >
              {module.title.split('—')[0].trim()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
