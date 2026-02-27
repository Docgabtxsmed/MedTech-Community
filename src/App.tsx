import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Componentes Estruturais */
import Layout from './components/Layout';

/* Páginas */
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';

/**
 * App.tsx é o ponto de entrada principal após o main.tsx.
 * Aqui nós configuramos as "Rotas" (Caminhos/URLs) que o usuário pode navegar.
 */
const App: React.FC = () => {
  return (
    // BrowserRouter: Encapsula todo o app e gerencia o histórico do navegador (URLs)
    <BrowserRouter>
      {/* O Layout é persistente, não recarrega quando mudamos de tela! */}
      <Layout>
        {/* Routes define os "slots" que vão exibir componentes diferentes baseados na URL */}
        <Routes>
          {/* A Rota principal ("/") carrega a página Home */}
          <Route path="/" element={<Home />} />
          
          {/* 
            Rota dinâmica. O ":id" significa que qualquer coisa após "/modulo/" 
            será passada como parâmetro para a TopicPage.
          */}
          <Route path="/modulo/:id" element={<TopicPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
