import React from 'react';
import { Link } from 'react-router-dom';
import css from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={css.landingContainer}>
      {/* Hero Section */}
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Acelere o futuro da Saúde com <span className={css.highlight}>Inteligência Artificial</span></h1>
          <p className={css.heroSubtitle}>
            Descubra as ferramentas, tutoriais e o ecossistema educacional criado para médicos e desenvolvedores MedTech.
          </p>
          <div className={css.ctaGroup}>
            <Link to="/biblioteca" className={css.primaryBtn}>
              Explorar Biblioteca Gratuita
            </Link>
            <a href="#produtos" className={css.secondaryBtn}>
              Ver MVPs Premium
            </a>
          </div>
        </div>
      </section>

      {/* Seção Cursos / Bibliotecas em Destaque */}
      <section className={css.featuredSection}>
        <div className={css.sectionContainer}>
          <h2>Trilhas de Aprendizado</h2>
          <p className={css.sectionDesc}>Conteúdos práticos, focados em aplicações reais.</p>
          
          <div className={css.grid}>
            {/* Card Exemplo 1 (O nosso tutorial de fato) */}
            <div className={css.card}>
              <div className={css.cardBadge}>Tech</div>
              <h3>Ecossistema Claude (MCP)</h3>
              <p>Domine Skills, Tools e MCPs para estender a Inteligência da Claude. Crie agentes reais.</p>
              <Link to="/biblioteca" className={css.cardLink}>Iniciar Trilha →</Link>
            </div>
            
            {/* Card Exemplo Placeholder */}
            <div className={css.card}>
              <div className={css.cardBadgeMed}>Med</div>
              <h3>RAG em Prontuários</h3>
              <p>Aprenda a criar modelos de Retrieval Augmented Generation (RAG) seguros para o ambiente clínico.</p>
              <span className={css.cardStatus}>Em Breve</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Produtos */}
      <section id="produtos" className={css.productSection}>
        <div className={css.sectionContainer}>
          <h2>Produtos Digitais (MVPs)</h2>
          <p className={css.sectionDesc}>Soluções aceleradoras para a sua rotina hospitalar ou start-up.</p>
          
          <div className={css.grid}>
             {/* Card Produto Placeholder */}
             <div className={css.productCard}>
              <div className={css.productImagePlaceholder}>
                  🩺 Assistente de Prescrição
              </div>
              <div className={css.productInfo}>
                <h3>Prescrição AI (Template)</h3>
                <p>Boilerplate completo Next.js + OpenAI focado na validação cruzada medicamentosa.</p>
                <div className={css.productAction}>
                  <span className={css.price}>R$ 97</span>
                  <button className={css.buyBtn}>Garantir Acesso</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
