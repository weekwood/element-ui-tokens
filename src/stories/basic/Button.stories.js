import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Basic/Button',
  component: 'el-button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small', 'mini'],
    },
    customStyle: {
      control: 'object',
      description: '自定义样式',
      defaultValue: {
        backgroundColor: 'var(--color-primary-500)',
        padding: 'var(--spacing-md)',
        fontSize: 'var(--font-size-base)',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-button v-bind="$props">{{ text }}</el-button>',
  data() {
    return {
      text: '按钮',
    };
  },
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  type: 'primary',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  type: 'primary',
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  type: 'primary',
  children: '禁用按钮',
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  disabled: true,
  type: 'text',
  children: '禁用文字按钮',
}; 