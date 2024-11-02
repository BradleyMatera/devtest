import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Ensures JSX files are recognized
  },
  esbuild: {
    loader: 'jsx', // Explicitly set the loader to 'jsx'
    include: /src\/.*\.jsx?$/, // Matches .js or .jsx files in src/
  },
});