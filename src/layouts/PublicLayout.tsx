import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './PublicLayout.module.css';

/**
 * Layout Público da Landing Page MedTech
 */
const PublicLayout: React.FC = () => {
  return (
    <div className={css.pageContainer}>
      <header className={css.navbar}>
        <div className={css.navContent}>
          <div className={css.logo}>
            <span className={css.logoIcon}>■</span> MED<span className={css.logoLight}>TECH</span>
          </div>
          <nav className={css.navLinks}>
            <Link to="/">Início</Link>
            <Link to="/biblioteca">Trilhas Tech</Link>
            <a href="#produtos">Produtos e MVPs</a>
            <button className={css.loginBtn}>Acessar</button>
          </nav>
        </div>
      </header>

      <main className={css.mainContent}>
        <Outlet /> 
      </main>

      <footer className={css.footer}>
        <div className={css.footerContent}>
          <p>© 2026 MedTech Community. Elevando medicina com IA.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
