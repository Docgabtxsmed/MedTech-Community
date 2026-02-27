import React from 'react';
import CapsuleButton from '../../components/CapsuleButton';
import { tutorialData } from '../../data/tutorialData';

/**
 * A Página Base da Biblioteca (/biblioteca).
 * Importada do Home local anterior, reaproveitando sua estrutura.
 */
const LibraryHome: React.FC = () => {
  return (
    <div>
      <header style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1>Ecossistema Claude (Tutorial v1.0)</h1>
        <p>Um guia prático para iniciantes entenderem e estenderem as capacidades da IA através de Skills, Tools (MCP) e Plugins.</p>
      </header>
      
      <section>
        <h2>Módulos do Curso</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          {tutorialData.map((module) => (
            <CapsuleButton
              key={module.id}
              to={`/biblioteca/claude/modulo/${module.id}`}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LibraryHome;
