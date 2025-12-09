

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você tentou acessar não existe.</p>
      
      {/* Link simples para a página inicial */}
      <Link to="/">Ir para a Home</Link>
    </div>
  );
}

export default NotFound;