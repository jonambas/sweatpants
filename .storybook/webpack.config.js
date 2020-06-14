const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve = {
    alias: {
      // '@sweatpants/box': path.resolve(__dirname, '../packages/Box/src'),
      // '@sweatpants/button': path.resolve(__dirname, '../packages/Button/src'),
      '@sweatpants/inline': path.resolve(__dirname, '../packages/Inline/src/index.tsx'),
      '@sweatpants/stack': path.resolve(__dirname, '../packages/Stack/src/index.tsx'),
      '@sweatpants/screenreaderonly': path.resolve(
        __dirname,
        '../packages/ScreenReaderOnly/src/index.tsx'
      ),
      '@sweatpants/theme': path.resolve(__dirname, '../packages/Theme/src/index.tsx')
    },
    modules: [path.join(__dirname, '../node_modules')]
  };

  return config;
};
