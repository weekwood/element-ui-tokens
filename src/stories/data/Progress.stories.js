import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Progress',
  component: 'el-progress',
  argTypes: {
    percentage: { control: 'number' },
    type: {
      control: { type: 'select' },
      options: ['line', 'circle', 'dashboard'],
    },
    status: {
      control: { type: 'select' },
      options: ['success', 'exception', 'warning'],
    },
    strokeWidth: { control: 'number' },
    textInside: { control: 'boolean' },
    width: { control: 'number' },
    showText: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-progress v-bind="$props"></el-progress>',
});

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
};

export const Circle = Template.bind({});
Circle.args = {
  type: 'circle',
  percentage: 75,
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  type: 'dashboard',
  percentage: 80,
}; 