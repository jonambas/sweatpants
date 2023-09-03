import esbuild from 'rollup-plugin-esbuild';
import size from 'rollup-plugin-bundle-size';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import pkg from '../package.json' assert { type: 'json' };

export const makeConfig = ({
  module,
  main,
  dependencies,
  input = 'src/index.tsx',
  plugins = [],
  preserveModules = false
}) => ({
  input,
  output: [
    {
      ...(preserveModules
        ? { dir: 'dist/esm', preserveModulesRoot: 'src' }
        : { file: module }),
      preserveModules,
      format: 'esm',
      sourcemap: true
    },
    {
      ...(preserveModules
        ? { dir: 'dist/cjs', preserveModulesRoot: 'src' }
        : { file: main }),
      preserveModules,
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
    ...(preserveModules ? [preserveDirectives()] : [size()])
  ],
  onwarn(warning, warn) {
    if (
      warning.message.includes(
        'Module level directives cause errors when bundled'
      ) &&
      warning.message.includes('use client')
    ) {
      return;
    }
    warn(warning);
  }
});
