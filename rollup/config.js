import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default ({ module, main }) => ({
  input: 'src/index.js',
  output: [
    {
      file: module,
      format: 'esm'
    },
    {
      file: main,
      format: 'cjs'
    }
  ],
  external: [
    'react',
    'react-dom',
    '@styled-system/props',
    'styled-components',
    'styled-system',
    'styled-normalize'
  ],
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/react']
    }),
    terser({
      output: { comments: false }
    })
  ]
});
