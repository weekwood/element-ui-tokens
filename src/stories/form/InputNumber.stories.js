import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/InputNumber',
  component: 'el-input-number',
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    disabled: { control: 'boolean' },
    controls: { control: 'boolean' },
    precision: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      num: 1,
    };
  },
  template: '<el-input-number v-model="num" v-bind="$props"></el-input-number>',
});

export const Default = Template.bind({});
Default.args = {
  min: 1,
  max: 10,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const StepControl = Template.bind({});
StepControl.args = {
  step: 2,
}; 