import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'politics',
      filename: 'remoteEntry.js',
      exposes: {
        './PoliticsNews': './src/App.tsx'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion:  "^19.0.0"
        },
          "react/": {
          singleton: true,
        },
          "react-dom": {
          singleton: true,
          requiredVersion:  "^19.0.0"
        }
      },
      dts: false
    }),
    react(),
  ],

  base: "http://localhost:3002/",

  // Define custom port
  server: {
    port: 3002,
    // make this port strict, so it will not jump to another port e.g 3001, 3000 etc.
    strictPort: true,
    origin: "http://localhost:3002"
  },

  build: {
    target: ['chrome89', 'edge89', 'firefox89', 'safari15']   }
})