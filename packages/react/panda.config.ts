import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,
  include: ['src/**/*.tsx'],
  exclude: [],
  presets: ['@sweatpants/panda-preset'],

  // Library options
  emitPackage: false,
  prefix: 'sp',
  hash: true,
  outdir: 'styles',
  minify: true
});
