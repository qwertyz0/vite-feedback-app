import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //server objeck for proxy in VITE, coz default proxy in package json not work
  server: {
    proxy: {
      "/feedback": "http://localhost:5000",
    },
  },
  plugins: [react()],
})
