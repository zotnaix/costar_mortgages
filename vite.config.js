import { defineConfig } from 'vite'

// Dynamically import ESM-only plugins to avoid CJS/ESM resolution errors in some environments.
export default defineConfig(async () => {
  const plugin = await import('@vitejs/plugin-react-swc')
  return {
    plugins: [plugin.default()],
  }
})
