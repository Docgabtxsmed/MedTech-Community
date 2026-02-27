import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu';
import css from '../components/Layout.module.css';

/**
 * Layout Workspace / Dashboard
 * Usado para rotear as bibliotecas e tutoriais.
 * O componente <Outlet /> renderiza a rota filha especificada no Router.
 */
const WorkspaceLayout: React.FC = () => {
  return (
    <div className={css.layoutContainer}>
      <SidebarMenu />
      
      <main className={css.mainContent}>
        <div className={css.contentWrapper}>
          <Outlet /> {/* Aqui vai entrar a TopicPage ou a Home do Tutorial Velho */}
        </div>
      </main>
    </div>
  );
};

export default WorkspaceLayout;
