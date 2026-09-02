import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  // Define custom port
  server: {
    port: 3002,
    // make this port strict, so it will not jump to another port e.g 3001, 3000 etc.
    strictPort: true,
    origin: "http://localhost:3002"
  }
})