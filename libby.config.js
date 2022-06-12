export default {
  outputPath: 'dist',
  openBrowser: true,
  port: 9000,
  title: 'Sweatpants',
  layout: '.libby/layout.tsx',
  backgrounds: ['#ffffff', '#ebf0f5', '#2c353d'],
  vite: ({ root, resolve }) => ({
    resolve: {
      alias: {
        'styled-components': resolve(
          root,
          'node_modules/styled-components'
        ),
        '@sweatpants/button': resolve(
          root,
          'packages/Button/src/index.tsx'
        ),
        '@sweatpants/box': resolve(
          root,
          'packages/Box/src/index.tsx'
        ),
        '@sweatpants/inline': resolve(
          root,
          'packages/Inline/src/index.tsx'
        ),
        '@sweatpants/theme': resolve(
          root,
          'packages/Theme/src/index.tsx'
        ),
        '@sweatpants/screenreaderonly': resolve(
          root,
          'packages/ScreenReaderOnly/src/index.tsx'
        ),
        '@sweatpants/stack': resolve(
          root,
          'packages/Stack/src/index.tsx'
        )
      }
    }
  })
};
