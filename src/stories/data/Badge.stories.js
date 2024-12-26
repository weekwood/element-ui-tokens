import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Badge',
  component: 'el-badge',
  argTypes: {
    value: { control: 'text' },
    max: { control: 'number' },
    isDot: { control: 'boolean' },
    hidden: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-badge v-bind="$props">
      <el-button size="small">评论</el-button>
    </el-badge>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 12,
};

export const Dot = Template.bind({});
Dot.args = {
  isDot: true,
}; 