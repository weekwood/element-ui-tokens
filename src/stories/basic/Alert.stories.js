import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Basic/Alert',
  component: 'el-alert',
  argTypes: {
    title: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error'],
    },
    description: { control: 'text' },
    closable: { control: 'boolean' },
    center: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    effect: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-alert v-bind="$props"></el-alert>',
});

export const Default = Template.bind({});
Default.args = {
  title: '成功提示的文案',
  type: 'success',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: '带辅助性文字介绍',
  description: '这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。',
  type: 'info',
  showIcon: true,
}; 