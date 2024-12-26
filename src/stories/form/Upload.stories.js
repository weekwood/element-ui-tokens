import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Upload',
  component: 'el-upload',
  argTypes: {
    action: { control: 'text' },
    multiple: { control: 'boolean' },
    drag: { control: 'boolean' },
    accept: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-upload
      v-bind="$props"
      action="https://jsonplaceholder.typicode.com/posts/"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Drag = Template.bind({});
Drag.args = {
  drag: true,
}; 