import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/navigationBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './css/main.css';
import InicioPage from './pages/inicio';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<InicioPage /> }/>
        </Routes>
    </BrowserRouter>
)
