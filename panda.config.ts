import { defineConfig } from '@pandacss/dev';
import preset from './packages/panda-preset/src';

export default defineConfig({
  preflight: true,
  include: ['./libra/**/*.{ts,tsx,js,jsx}', 'packages/react/**/*.tsx'],
  exclude: [],
  presets: [preset],

  // Library options
  outdir: 'styles',
  hash: true
});
