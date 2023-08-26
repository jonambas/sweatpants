import { defineConfig } from '@pandacss/dev';
import { preset } from '@sweatpants/panda-preset';

export default defineConfig({
  preflight: false,
  include: ['src/**/*.tsx'],
  exclude: [],
  presets: [preset],

  // Library options
  emitPackage: false,
  prefix: 'sp-',
  hash: true,
  outdir: 'styles',
  minify: true
});
