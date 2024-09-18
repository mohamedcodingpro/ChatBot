import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to accept external requests
    port: process.env.PORT || 3000, // Use Render's PORT or fallback to 3000
  }
})

