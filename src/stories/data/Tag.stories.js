import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Tag',
  component: 'el-tag',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'danger'],
    },
    closable: { control: 'boolean' },
    effect: {
      control: { type: 'select' },
      options: ['dark', 'light', 'plain'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-tag v-bind="$props">标签</el-tag>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'success',
}; 