import { defineConfig } from '@pandacss/dev';
import preset from './packages/panda-preset/src';

export default defineConfig({
  preflight: true,
  include: [
    './libra/**/*.tsx',
    './packages/react/**/*.tsx',
  ],
  exclude: ['node_modules', 'dist'],
  presets: [preset],

  // Library options
  outdir: 'styles',
  hash: true,
});
