import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', //  Hardcode this unless you're managing env vars properly
  plugins: [react()],
})
