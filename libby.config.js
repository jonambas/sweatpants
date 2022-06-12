const path = require('path');

// libby.config.js
module.exports = {
  // Required
  entries: () => require.context('./.libby/', true, /\.libby\.tsx$/),

  // Optional
  outputPath: 'dist',
  openBrowser: true,
  port: 9000,
  title: 'Sweatpants',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        '@sweatpants/box': path.resolve(
          __dirname,
          './packages/Box/src/index.tsx'
        ),
        '@sweatpants/button': path.resolve(
          __dirname,
          './packages/Button/src/index.tsx'
        ),
        '@sweatpants/inline': path.resolve(
          __dirname,
          './packages/Inline/src/index.tsx'
        ),
        '@sweatpants/stack': path.resolve(
          __dirname,
          './packages/Stack/src/index.tsx'
        ),
        '@sweatpants/screenreaderonly': path.resolve(
          __dirname,
          './packages/ScreenReaderOnly/src/index.tsx'
        ),
        '@sweatpants/theme': path.resolve(
          __dirname,
          './packages/Theme/src/index.tsx'
        ),
        react: path.resolve(__dirname, './node_modules/react'),
        'styled-components': path.resolve(
          __dirname,
          './node_modules/styled-components'
        )
      }
    }
    //   externals: {
    //     fs: 'commonjs fs',
    //     console: 'commonjs console'
    //   }
  }),
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff'
      },
      {
        name: 'gray',
        value: '#ebf0f5'
      }
    ]
  }
};
