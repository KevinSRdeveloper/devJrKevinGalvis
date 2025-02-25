import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/navigationBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './css/main.css';
import InicioPage from './pages/inicio';
import AcercaPage from './pages/acerca';
import ProyectosPage from './pages/proyectos';
import ContactamePage from './pages/contactame';
import Footer from './components/footer';
import ErrorPage from './pages/404';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<InicioPage /> }/>

          <Route path="/acerca" element={
            <>
              <AcercaPage /> 
              <Footer />
            </>
          }/>
          
          <Route path="/proyectos" element={
            <>
              <ProyectosPage /> 
              <Footer />
            </>
          }/>

          <Route path="/contactame" element={
            <> 
              <ContactamePage /> 
              <Footer />
            
            </>
            
            
          }/>
          
          <Route path="/*" element={<ErrorPage /> }/>
        </Routes>

      
    </BrowserRouter>
)
