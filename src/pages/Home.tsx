import React from 'react';
import CapsuleButton from '../components/CapsuleButton';
import { tutorialData } from '../data/tutorialData';

/**
 * A Página Inicial renderiza uma lista (map) das nossas cápsulas.
 * Colocamos ela num formato limpo e centralizado para encorajar o clique do usuário.
 */
const Home: React.FC = () => {
  return (
    <div>
      <header style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1>Ecossistema Claude</h1>
        <p>Um guia prático para iniciantes entenderem e estenderem as capacidades da IA através de Skills, Tools (MCP) e Plugins.</p>
      </header>
      
      <section>
        <h2>Trilha de Aprendizado</h2>
        {/* Usamos o map do JavaScript para transformar a nosa lista de Objetos do TS em Componentes React */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          {tutorialData.map((module) => (
            <CapsuleButton
              key={module.id}
              to={`/modulo/${module.id}`}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
