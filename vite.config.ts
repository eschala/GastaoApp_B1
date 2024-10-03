import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: {

    host: true, // Permite conexiones desde cualquier dirección IP
    port: 5173, // Puedes especificar el puerto si lo deseas
    strictPort: true // Asegúrate de que el puerto no se cambie si está en uso
  },
  plugins: [react(), mkcert()],
})