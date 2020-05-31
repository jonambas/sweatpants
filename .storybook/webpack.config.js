const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve = {
    alias: {
      '@sweatpants/box': path.resolve(__dirname, '../packages/Box/src'),
      '@sweatpants/button': path.resolve(__dirname, '../packages/Button/src'),
      '@sweatpants/inline': path.resolve(__dirname, '../packages/Inline/src'),
      '@sweatpants/stack': path.resolve(__dirname, '../packages/Stack/src'),
      '@sweatpants/screenreaderonly': path.resolve(__dirname, '../packages/ScreenReaderOnly/src'),
      '@sweatpants/theme': path.resolve(__dirname, '../packages/Theme/src')
    },
    modules: [path.join(__dirname, '../node_modules')]
  };

  return config;
};
