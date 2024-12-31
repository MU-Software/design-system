import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'mds',
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `mds.${format}.js`,
    },
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
