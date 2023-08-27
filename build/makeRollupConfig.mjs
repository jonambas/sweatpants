import esbuild from 'rollup-plugin-esbuild';
import size from 'rollup-plugin-bundle-size';
import pkg from '../package.json' assert { type: 'json' };

export const makeConfig = ({
  module,
  main,
  dependencies,
  input = 'src/index.tsx',
  plugins = []
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
    '@pandacss/dev',
    '@sweatpants/panda-preset',
    ...Object.keys(pkg.devDependencies),
    ...Object.keys(dependencies ?? {})
  ],
  plugins: [
    ...plugins,
    esbuild({
      include: /\.[jt]sx?$/,
      minify: true
    }),
    size()
  ]
});
