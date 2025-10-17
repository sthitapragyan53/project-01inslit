import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/project-01inslit/', // 👈 matches your repo name exactly!
})
