import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Calendar',
  component: 'el-calendar',
  argTypes: {
    range: { control: 'array' },
    firstDayOfWeek: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-calendar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const WithRange = Template.bind({});
WithRange.args = {
  range: ['2024-03-01', '2024-03-31'],
}; 