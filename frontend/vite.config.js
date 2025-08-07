import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
   server: {
    host: true,              // Penting! agar bisa menerima IP eksternal
    port: 5173,              // Opsional: port default
  },
})
