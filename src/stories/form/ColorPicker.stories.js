import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/ColorPicker',
  component: 'el-color-picker',
  argTypes: {
    showAlpha: { control: 'boolean' },
    colorFormat: {
      control: { type: 'select' },
      options: ['hex', 'rgb', 'hsl'],
    },
    disabled: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      color: '#409EFF',
    };
  },
  template: '<el-color-picker v-model="color" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const WithAlpha = Template.bind({});
WithAlpha.args = {
  showAlpha: true,
}; 