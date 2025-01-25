import React from 'react';  // Esta importación está correcta
import { StrictMode } from 'react';  // Importa StrictMode
import { createRoot } from 'react-dom/client';  // createRoot es la nueva API en React 18
import "./styles/styles.scss";  // Estilos
import App from './App.jsx';  // Componente principal

// Crear la raíz con StrictMode (opcional, pero recomendado en desarrollo)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

