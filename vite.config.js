import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Mendengarkan semua alamat IP
    port: 5173      // Port default Vite
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});
