import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/Switch',
  component: 'el-switch',
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: 'number' },
    activeText: { control: 'text' },
    inactiveText: { control: 'text' },
    activeColor: { control: 'color' },
    inactiveColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: true,
    };
  },
  template: '<el-switch v-model="value" v-bind="$props" />',
});

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  activeText: '开启',
  inactiveText: '关闭',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  activeColor: '#13ce66',
  inactiveColor: '#ff4949',
}; 