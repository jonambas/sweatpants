const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve = {
    alias: {
      '@swtch-ui/box': path.resolve(__dirname, '../packages/Box/src'),
      '@swtch-ui/button': path.resolve(__dirname, '../packages/Button/src'),
      '@swtch-ui/inline': path.resolve(__dirname, '../packages/Inline/src'),
      '@swtch-ui/stack': path.resolve(__dirname, '../packages/Stack/src'),
      '@swtch-ui/themeprovider': path.resolve(__dirname, '../packages/ThemeProvider/src')
      // '@swtch-ui/themeprovider': path.resolve(__dirname, '../packages/matchbox/src'),
      // '@sparkpost/design-tokens': path.resolve(__dirname, '../packages/design-tokens')
    },
    modules: [path.join(__dirname, '../node_modules')]
  };

  return config;
};
