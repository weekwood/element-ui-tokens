const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/vue',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // 修改现有的 CSS 规则
    config.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/'
    ).use = ['style-loader', 'css-loader'];

    // 添加 SCSS 支持
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // 添加路径别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
}; 