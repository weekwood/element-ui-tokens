import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/TimePicker',
  component: 'el-time-picker',
  argTypes: {
    placeholder: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    isRange: { control: 'boolean' },
    arrowControl: { control: 'boolean' },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: new Date(2016, 9, 10, 18, 40),
    };
  },
  template: '<el-time-picker v-model="value" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '选择时间',
};

export const Range = Template.bind({});
Range.args = {
  isRange: true,
  rangeSeparator: '至',
  startPlaceholder: '开始时间',
  endPlaceholder: '结束时间',
};

export const ArrowControl = Template.bind({});
ArrowControl.args = {
  arrowControl: true,
}; 