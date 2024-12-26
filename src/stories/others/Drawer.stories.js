import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Others/Drawer',
  component: 'el-drawer',
  argTypes: {
    title: { control: 'text' },
    size: { control: 'text' },
    direction: {
      control: { type: 'select' },
      options: ['ltr', 'rtl', 'ttb', 'btt'],
    },
    withHeader: { control: 'boolean' },
    modal: { control: 'boolean' },
    closeOnPressEscape: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      visible: false,
    };
  },
  template: `
    <div>
      <el-button @click="visible = true">打开抽屉</el-button>
      <el-drawer
        :visible.sync="visible"
        :title="title"
        v-bind="$props">
        <span>我是抽屉内容</span>
      </el-drawer>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: '标题',
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  withHeader: false,
}; 