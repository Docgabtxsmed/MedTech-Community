import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Layouts Mestres */
import PublicLayout from './layouts/PublicLayout';
import WorkspaceLayout from './layouts/WorkspaceLayout';

/* Páginas Publicas (Vendas/Apresentação) */
import LandingPage from './pages/Landing/LandingPage';

/* Páginas Internas (Workspace/Bibliotecas) */
import LibraryHome from './pages/Library/LibraryHome';
import TopicPage from './pages/TopicPage'; 

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Rota Pública (Landing Page MedTech) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Rota da Biblioteca (Workspace com Sidebar) */}
        <Route path="/biblioteca" element={<WorkspaceLayout />}>
          <Route index element={<LibraryHome />} />
          <Route path="claude/modulo/:id" element={<TopicPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
