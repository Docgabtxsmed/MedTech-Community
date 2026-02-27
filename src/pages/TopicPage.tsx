import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { tutorialData } from '../data/tutorialData';
import CodeSnippet from '../components/CodeSnippet';

/**
 * Página Genérica de Tópicos
 * Em vez de criar um arquivo para cada módulo, usamos UMA página que
 * descobre o que deve renderizar baseada na URL.
 */
const TopicPage: React.FC = () => {
  // useParams é um hook do "react-router-dom" que lê o "/modulo/:id" da URL
  const { id } = useParams<{ id: string }>();

  // Procuramos o módulo que tem o mesmo ID
  const actModule = tutorialData.find(m => m.id === id);

  // Se o usuário digitou uma URL maluca (ex: /modulo/inexistente), jogamos ele pra Home
  if (!actModule) {
    return <Navigate to="/" replace />;
  }

  // Função auxiliar para renderizar cada pedaço (bloco) do tutorial
  const renderSection = (section: any, idx: number) => {
    switch (section.type) {
      case 'text':
        return <p key={idx}>{section.content}</p>;
      case 'info':
        return (
          <div key={idx} style={{ 
            backgroundColor: 'rgba(234, 179, 8, 0.1)', 
            borderLeft: '4px solid var(--color-accent-yellow)',
            padding: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
          }}>
            <p style={{ margin: 0, color: 'var(--color-text-white)' }}>
              <strong>Dica:</strong> {section.content}
            </p>
          </div>
        );
      case 'list':
        return (
          <ul key={idx}>
            {section.data.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <CodeSnippet 
            key={idx} 
            language={section.language || 'text'} 
            code={section.content} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{ color: 'var(--color-accent-cyan)' }}>{actModule.title}</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)' }}>
        {actModule.description}
      </p>

      {/* Renderiza a lista de "pedaços de conteúdo" em ordem */}
      <div className="module-content">
        {actModule.sections.map((section, idx) => renderSection(section, idx))}
      </div>
    </div>
  );
};

export default TopicPage;
