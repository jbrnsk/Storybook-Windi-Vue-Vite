const { join, resolve } = require('path');
const WindiCSS = require('vite-plugin-windicss').default;

module.exports = {
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    };
    config.resolve.modules = [resolve(__dirname, '@', '../src'), 'node_modules'];
    config.plugins = config.plugins ?? [];
    config.plugins.push([
      WindiCSS({
        config: join(__dirname, '../', 'windi.config.ts'),
      }),
    ]);
    config.resolve.dedupe = ['@storybook/client-api'];

    // return the customized config
    return config;
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
};
