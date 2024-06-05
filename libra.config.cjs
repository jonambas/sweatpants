import { resolve } from 'path';
import { defineConfig } from '@sweatpants/libra/config';

export default defineConfig({
  title: 'Sweatpants',
  port: 8080,
  inspect: true,
  layout: './libra/default-layout.tsx',
  outDir: 'dist',
  viteConfig: () => {
    return {
      build: {
        rollupOptions: {
          external: ['react', 'react-dom'],
        },
      },
      resolve: {
        alias: {
          '@styles/css': resolve(__dirname, './styles/css'),
        },
      },
      optimizeDeps: {
        exclude: ['@styles/css'],
      },
    };
  },
});
