import { defineConfig } from '@pandacss/dev';
import { preset } from '@sweatpants/panda-preset';

const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 3) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

const hash = (() => {
  const str = simpleHash(new Date().toISOString());
  return `s${str.substring(str.length - 5, str.length - 1)}`;
})();

export default defineConfig({
  preflight: false,
  include: ['src/**/*.tsx'],
  exclude: [],
  presets: [preset],

  // Library options
  emitPackage: false,
  prefix: hash,
  outdir: 'styles',
  minify: true
});
