import React from 'react';  
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';  // createRoot es la nueva API en React 18
import "./styles/styles.scss";  
import App from './App.jsx';  

// Crear la raíz con StrictMode (opcional, pero recomendado en desarrollo)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

