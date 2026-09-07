import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jennifer-padnick/', // exact repo name, with leading/trailing slashes
})