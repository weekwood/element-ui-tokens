import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/DateTimePicker',
  component: 'el-date-picker',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['datetime', 'datetimerange'],
    },
    placeholder: { control: 'text' },
    format: { control: 'text' },
    valueFormat: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-date-picker v-model="value" v-bind="$props" />',
  data() {
    return {
      value: '',
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  type: 'datetime',
  placeholder: '选择日期时间',
};

export const Range = Template.bind({});
Range.args = {
  type: 'datetimerange',
  startPlaceholder: '开始日期',
  endPlaceholder: '结束日期',
}; 