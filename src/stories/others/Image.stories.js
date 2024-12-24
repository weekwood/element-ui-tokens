import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Others/Image',
  component: 'el-image',
  argTypes: {
    fit: {
      control: { type: 'select' },
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    },
    lazy: { control: 'boolean' },
    previewSrcList: { control: 'array' },
    zIndex: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-image
      style="width: 300px; height: 200px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      v-bind="$props"
    ></el-image>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Preview = Template.bind({});
Preview.args = {
  previewSrcList: [
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  ],
}; 