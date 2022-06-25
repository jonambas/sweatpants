/**
 * @type {import('@sparkpost/libby-react').Config}
 */
export default {
  entries: () => require.context('./.libby', true, /\.libby\.tsx$/),
  outputPath: 'dist',
  openBrowser: true,
  port: 9000,
  title: 'Sweatpants',
  layout: '.libby/layout.tsx',
  backgrounds: ['#ffffff', '#ebf0f5', '#2c353d'],
  webpack: () => ({
    resolve: {
      alias: {
        '@sweatpants/button': '/packages/Button/src/index.tsx',
        '@sweatpants/box': '/packages/Box/src/index.tsx',
        '@sweatpants/inline': '/packages/Inline/src/index.tsx',
        '@sweatpants/theme': '/packages/Theme/src/index.tsx',
        '@sweatpants/screenreaderonly':
          '/packages/ScreenReaderOnly/src/index.tsx',
        '@sweatpants/stack': '/packages/Stack/src/index.tsx'
      }
    }
  })
};
