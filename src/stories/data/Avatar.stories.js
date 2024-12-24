import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Avatar',
  component: 'el-avatar',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini', 'number'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
    src: { control: 'text' },
    srcSet: { control: 'text' },
    alt: { control: 'text' },
    fit: {
      control: { type: 'select' },
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-avatar v-bind="$props">用户</el-avatar>',
});

export const Default = Template.bind({});
Default.args = {
  size: 'large',
};

export const Image = Template.bind({});
Image.args = {
  size: 'large',
  src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
};

export const Square = Template.bind({});
Square.args = {
  size: 'large',
  shape: 'square',
  src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
}; 