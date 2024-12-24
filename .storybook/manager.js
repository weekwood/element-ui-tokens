import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Element UI Design Tokens',
  brandUrl: 'https://github.com/weekwood/element-ui-tokens',
  // 使用具体的颜色值
  colorPrimary: '#409EFF',
  colorSecondary: '#409EFF',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#eaeaea',
  appBorderRadius: 4,

  // 文字颜色
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar 默认颜色
  barTextColor: '#999999',
  barSelectedColor: '#409EFF',
  barBg: '#ffffff',
});

addons.setConfig({
  theme,
}); 