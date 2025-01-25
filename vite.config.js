import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 5173,  // Establecer el puerto para que siempre sea 5173
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // Asegúrate de que este sea tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});



