import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

export default ({ module, main, dependencies }) => ({
  input: 'src/index.tsx',
  output: [
    {
      file: module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: main,
      format: 'cjs',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom',
    '@styled-system/props',
    'styled-components',
    'styled-system',
    'styled-normalize',
    ...Object.keys(dependencies)
  ],
  plugins: [
    resolve(),
    esbuild({
      include: /\.[jt]sx?$/,
      minify: true,
      banner: `/** Sweatpants Component */`
    })
  ]
});
