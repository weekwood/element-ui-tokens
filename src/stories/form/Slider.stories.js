import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Slider',
  component: 'el-slider',
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    showInput: { control: 'boolean' },
    range: { control: 'boolean' },
    vertical: { control: 'boolean' },
    height: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: 0,
    };
  },
  template: '<el-slider v-model="value" v-bind="$props" />',
});

export const Default = Template.bind({});

export const WithInput = Template.bind({});
WithInput.args = {
  showInput: true,
};

export const Range = Template.bind({});
Range.args = {
  range: true,
}; 