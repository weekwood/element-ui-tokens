import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/styles/tokens.css';
import '../src/styles/element-override.scss';

Vue.use(ElementUI);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Design Tokens', 'Basic', 'Form', 'Data', 'Navigation', 'Feedback'],
    },
  },
  docs: {
    description: {
      component: 'Element UI components with design tokens system',
    },
  },
}; 