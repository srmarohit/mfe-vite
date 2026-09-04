import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name:'host',
      remotes: {
        sports: {
          type: "module",
          name: "sports",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "sports",
          shareScope: "default"
        },
           politics: {
          type: "module",
          name: "politics",
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "politics",
          shareScope: "default"
        }
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

  // Define custom port
  server: {
    port: 3000,
    // make this port strict, so it will not jump to another port e.g 3001, 3000 etc.
    strictPort: true,
    origin: "http://localhost:3000"
  },

  
  build: {
    target: ['chrome89', 'edge89', 'firefox89', 'safari15']   }
})