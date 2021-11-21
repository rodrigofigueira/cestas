import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//páginas
import Doacao from './views/Doacao/Doacao'; 
import Resumo from './views/Resumo/Resumo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Doacao /> } />
        <Route exact path="/doacoes" element={ <Resumo /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
