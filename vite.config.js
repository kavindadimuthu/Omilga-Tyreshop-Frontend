import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/Omilga-Tyreshop-Frontend/', // Ensure this matches your repository name
  plugins: [
    react(),
    svgr()
  ],
  base: '/Omilga-Tyreshop-Frontend/',
})






