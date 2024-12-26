import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Notice/MessageBox',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error'],
    },
    customStyle: {
      control: 'object',
      defaultValue: {
        successColor: 'var(--color-success-500)',
        warningColor: 'var(--color-warning-500)',
        errorColor: 'var(--color-error-500)',
        infoColor: 'var(--color-info-500)',
      },
    },
  },
}; 