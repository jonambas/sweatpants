import alias from '@rollup/plugin-alias';
import pkg from './package.json' assert { type: 'json' };
import { makeConfig } from '../../build/makeRollupConfig.mjs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const dir = dirname(__filename);

export default makeConfig({
  ...pkg,
  input: 'src/index.ts',
  preserveModules: true,
  plugins: [
    alias({
      entries: {
        '@styles/css': resolve(dir, 'styles/css/index.mjs')
      }
    })
  ]
});
