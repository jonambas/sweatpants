import pkg from './package.json' assert { type: 'json' };
import { makeConfig } from '../../build/makeRollupConfig.mjs';

export default makeConfig({ ...pkg, input: 'src/index.ts' });
