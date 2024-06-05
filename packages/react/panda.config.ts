import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,
  include: ['src/**/*.tsx'],
  exclude: ['node_modules', 'dist'],
  presets: ['@sweatpants/panda-preset'],
  outExtension: 'js',

  // Library options
  emitPackage: false,
  prefix: 'sp',
  hash: true,
  outdir: 'styles',
  minify: true,
});
