import React, { useState } from 'react';
import css from './CodeSnippet.module.css';

interface CodeSnippetProps {
  language: string;
  code: string;
}

/**
 * CodeSnippet Component
 * Foca em um visual de terminal/editor de código "tecnológico", 
 * permitindo ao usuário copiar o conteúdo num clique.
 */
const CodeSnippet: React.FC<CodeSnippetProps> = ({ language, code }) => {
  // useState: Hook do react para armazenarmos se o usuário 
  // já clicou em copiar ou não, gerenciando o texto do botão.
  const [copied, setCopied] = useState(false);

  // Função disparada ao clicar
  const handleCopy = async () => {
    try {
      // API nativa dos navegadores modernos para o "Control+C" / "Command+C"
      await navigator.clipboard.writeText(code);
      setCopied(true);
      
      // Volta o texto do botão para "Copiar" após 2 segundos
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar documento: ', err);
    }
  };

  return (
    <div className={css.snippetContainer}>
      <div className={css.snippetHeader}>
        <span className={css.languageLabel}>
          {language.toUpperCase()}
        </span>
        <button 
          className={`${css.copyButton} ${copied ? css.copied : ''}`}
          onClick={handleCopy}
        >
          {copied ? '✓ Copiado!' : 'Copiar'}
        </button>
      </div>
      {/* 
        A tag <pre> preserva quebras de linha exatas.
        A tag <code> semanticamente define que o texto interno é código fonte.
      */}
      <pre className={css.preBlock}>
        <code className={css.codeBlock}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
