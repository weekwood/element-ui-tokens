import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Rate',
  component: 'el-rate',
  argTypes: {
    max: { control: 'number' },
    disabled: { control: 'boolean' },
    allowHalf: { control: 'boolean' },
    showText: { control: 'boolean' },
    showScore: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: 3.5,
    };
  },
  template: '<el-rate v-model="value" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const AllowHalf = Template.bind({});
AllowHalf.args = {
  allowHalf: true,
};

export const WithText = Template.bind({});
WithText.args = {
  showText: true,
}; 