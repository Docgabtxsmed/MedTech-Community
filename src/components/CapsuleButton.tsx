import React from 'react';
import { Link } from 'react-router-dom';
import css from './CapsuleButton.module.css';

interface CapsuleButtonProps {
  to: string; // Rota onde este botão vai pular
  title: string;
  description: string;
}

/**
 * CapsuleButton.tsx
 * Representa os módulos na nossa Home em formato de pílulas expansivas/completas.
 */
const CapsuleButton: React.FC<CapsuleButtonProps> = ({ to, title, description }) => {
  return (
    <Link to={to} className={css.capsuleContainer}>
      <div className={css.content}>
        <h3 className={css.moduleTitle}>{title}</h3>
        <p className={css.moduleDescription}>{description}</p>
      </div>
      <div className={css.arrowIcon}>
        {/* Usamos um ícone simples via SVG JSX (Arrow Right) */}
        <svg fill="currentColor" viewBox="0 0 20 20" height="24" width="24">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
};

export default CapsuleButton;
