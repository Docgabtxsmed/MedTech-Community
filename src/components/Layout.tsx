import React from 'react';
import css from './Layout.module.css';
import SidebarMenu from './SidebarMenu';

/**
 * Componente Wrapper Global que divide a tela.
 * O TypeScript (interface Props) ajuda-nos a garantir que todo componente 
 * Layout necessariamente receba "children" (os filhos que serão renderizados dentro).
 */
interface LayoutProps {
  children: React.ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={css.layoutContainer}>
      {/* 
        A Sidebar contém a nossa navegação primária.
        Ela viaja pro Topo no Mobile e pra Esquerda no Desktop via CSS.
      */}
      <SidebarMenu />
      
      {/* Área principal (main) onde as páginas do app serão renderizadas */}
      <main className={css.mainContent}>
        <div className={css.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
