import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/DatePicker',
  component: 'el-date-picker',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
    },
    placeholder: { control: 'text' },
    format: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: '',
    };
  },
  template: '<el-date-picker v-model="value" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'date',
  placeholder: '选择日期',
};

export const DateRange = Template.bind({});
DateRange.args = {
  type: 'daterange',
  rangeSeparator: '至',
  startPlaceholder: '开始日期',
  endPlaceholder: '结束日期',
}; 