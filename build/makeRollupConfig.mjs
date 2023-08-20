import esbuild from 'rollup-plugin-esbuild';
import pkg from '../package.json' assert { type: 'json' };

export const makeConfig = ({
  module,
  main,
  dependencies,
  input = 'src/index.tsx'
}) => ({
  input,
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
    'react/jsx-runtime',
    '@sweatpants/panda-preset',
    '@styles/css',
    ...Object.keys(pkg.devDependencies),
    ...Object.keys(dependencies ?? {})
  ],
  plugins: [
    esbuild({
      include: /\.[jt]sx?$/,
      minify: true
    })
  ]
});
