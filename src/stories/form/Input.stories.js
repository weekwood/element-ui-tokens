import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Input',
  component: 'el-input',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'textarea', 'password'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-input v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '请输入内容',
};

export const Clearable = Template.bind({});
Clearable.args = {
  placeholder: '可清空',
  clearable: true,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: '请输入密码',
}; 