import { resolve } from 'path';

/**
 * @type {import('@sweatpants/libra').Config}
 */
export default {
  title: 'Sweatpants',
  port: 8080,
  inspect: true,
  layout: './libra/DefaultLayout.tsx',
  viteConfig: () => {
    return {
      resolve: {
        alias: {
          '@styles/css': resolve(__dirname, './styles/css')
        }
      },
      optimizeDeps: {
        exclude: ['@sweatpants/react', '@sweatpants/preset', '@/styles']
      }
    };
  }
};
