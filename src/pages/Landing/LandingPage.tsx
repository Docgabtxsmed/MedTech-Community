import React from 'react';
import { Link } from 'react-router-dom';
import css from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={css.landingContainer}>
      {/* Hero Section */}
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Bem-vindo a <br/><span className={css.highlight}>MedTech Community</span></h1>
          
          <p className={css.heroSubtitle}>
            A união definitiva entre Medicina e Tecnologia. Explore tutoriais, projetos de Inteligência Artificial, produtos digitais e as bibliotecas médicas mais completas prontas para decolar sua carreira.
          </p>

          <div className={css.ctaGroup}>
            <Link to="/biblioteca" className={css.primaryBtn}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Cursos / Trilhas de Aprendizado */}
      <section className={css.featuredSection}>
        <div className={css.sectionContainer}>
          <h2>Trilhas de Aprendizado e Cursos</h2>
          <p className={css.sectionDesc}>Conteúdos práticos focados em aplicações reais e desenvolvimento de habilidades.</p>
          
          <div className={css.grid}>
            {/* Curso 1 */}
            <div className={css.card}>
              <div className={css.cardBadge}>Tech</div>
              <h3>Trilha: Engenharia de Prompt</h3>
              <p>Aprenda a criar prompts estruturados, avançados e eficientes para extrair o máximo das IAs atuais.</p>
              <Link to="#" className={css.cardLink}>Saiba Mais →</Link>
            </div>
            
            {/* Curso 2 */}
            <div className={css.card}>
              <div className={css.cardBadgeMed}>IA + Edu</div>
              <h3>Trilha: Estudando com IA</h3>
              <p>Descubra como revolucionar seus estudos médicos utilizando Inteligência Artificial para resumos, flashcards e tutoria.</p>
              <Link to="#" className={css.cardLink}>Saiba Mais →</Link>
            </div>

            {/* Curso 3 */}
            <div className={css.card}>
              <div className={css.cardBadge}>Dev</div>
              <h3>Trilha: Ideias em MVPs</h3>
              <p>Valide e lance sua ideia na prática através de "Vibe Coding", criando sites e sistemas reais de forma rápida.</p>
              <Link to="#" className={css.cardLink}>Saiba Mais →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Produtos */}
      <section id="produtos" className={css.productSection}>
        <div className={css.sectionContainer}>
          <h2>Produtos e Bibliotecas Digitais</h2>
          <p className={css.sectionDesc}>Acesso vitalício aos melhores repositórios médicos e de tecnologia do ecossistema.</p>
          
          <div className={css.grid}>
             {/* Produto 1: Biblioteca de Anestesiologia */}
             <div className={css.productCard}>
              <div className={css.productImagePlaceholder} style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a8a)' }}>
                  🩺 Biblioteca de Anestesiologia
              </div>
              <div className={css.productInfo}>
                <h3>Biblioteca de Anestesiologia</h3>
                <p>O seu quartel-general digital para Anestesia. Acesso rápido aos melhores resumos, diretrizes e flashcards.</p>
                <div className={css.productAction}>
                  <span className={css.price}>Acesso</span>
                  <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer" className={css.buyBtn} style={{textDecoration: 'none', color: '#00f0ff', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid #00f0ff'}}>Acessar Projeto</a>
                </div>
              </div>
            </div>

            {/* Produto 1.5: Biblioteca Critical Care */}
             <div className={css.productCard}>
              <div className={css.productImagePlaceholder} style={{ background: 'linear-gradient(135deg, #450a0a, #991b1b)' }}>
                  🚨 Biblioteca Critical Care
              </div>
              <div className={css.productInfo}>
                <h3 style={{ color: '#f87171' }}>Biblioteca Critical Care</h3>
                <p>Domine o manejo do paciente crítico. Protocolos de UTI, ventilação mecânica e drogas vasoativas em um só lugar.</p>
                <div className={css.productAction}>
                  <span className={css.price} style={{opacity: 0.5}}>Em Breve</span>
                  <button className={css.buyBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Em Breve</button>
                </div>
              </div>
            </div>

            {/* Produto 1.5: Saving a Children */}
            <div className={css.productCard}>
              <div className={css.productImagePlaceholder} style={{ background: 'linear-gradient(135deg, #14532d, #16a34a)' }}>
                  👶 Saving a Children
              </div>
              <div className={css.productInfo}>
                <h3 style={{ color: '#4ade80' }}>Saving a Children</h3>
                <p>O que todo médico precisa saber para sobreviver em um plantão pediátrico. Condutas essenciais e urgências.</p>
                <div className={css.productAction}>
                  <span className={css.price} style={{opacity: 0.5}}>Em Breve</span>
                  <button className={css.buyBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Em Breve</button>
                </div>
              </div>
            </div>

            {/* Produto 2: Biblioteca de IA */}
            <div className={css.productCard}>
              <div className={css.productImagePlaceholder} style={{ background: 'linear-gradient(135deg, #0f172a, #06b6d4)' }}>
                  🤖 Biblioteca de IA e Prompts
              </div>
              <div className={css.productInfo}>
                <h3>Biblioteca de IA e Engenharia de Prompts</h3>
                <p>Um repositório completo com os templates, agentes e prompts mais efetivos para o dia a dia tecnológico e médico.</p>
                <div className={css.productAction}>
                  <span className={css.price} style={{opacity: 0.5}}>Em Produção</span>
                  <button className={css.buyBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Em Breve</button>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Seção Apps Desenvolvidos */}
      <section id="apps" className={css.featuredSection} style={{ borderTop: '1px solid rgba(0, 240, 255, 0.1)' }}>
        <div className={css.sectionContainer}>
          <h2>Apps MedTech</h2>
          <p className={css.sectionDesc}>Calculadoras clínicas e ferramentas práticas desenvolvidas pela nossa comunidade.</p>
          
          <div className={css.grid}>
             {/* App 1: Calculadora IOT */}
             <div className={css.productCard}>
              <div className={css.productImagePlaceholder} style={{ background: 'linear-gradient(135deg, #020617, #3730a3)', height: '150px' }}>
                  📱 Calculadora IOT
              </div>
              <div className={css.productInfo}>
                <h3 style={{ color: '#818cf8' }}>Calculadora IOT</h3>
                <p>Ferramenta de cálculo de medicamentos para Intubação Orotraqueal (IOT) em sequência rápida e manejo de via aérea avançada.</p>
                <div className={css.productAction} style={{ marginTop: '10px', paddingTop: '10px' }}>
                  <span className={css.price} style={{fontSize: '1.2rem'}}>100% Free</span>
                  <a href="#" className={css.buyBtn} style={{textDecoration: 'none', color: '#00f0ff', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid #00f0ff', padding: '8px 16px'}}>Acessar Web App</a>
                </div>
              </div>
            </div>
            
            {/* Mais apps podem ser adicionados aqui futuramente */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
