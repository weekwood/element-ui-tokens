import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Feedback/Notification',
  component: 'el-notification',
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error'],
    },
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    duration: { control: 'number' },
    showClose: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <el-button @click="open">打开通知</el-button>
      <el-button @click="openWithIcon">带图标</el-button>
      <el-button @click="openWithOffset">自定义偏移</el-button>
    </div>
  `,
  methods: {
    open() {
      this.$notify({
        ...this.$props,
        title: this.title || '标题名称',
        message: this.message || '这是一条通知',
      });
    },
    openWithIcon() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      });
    },
    openWithOffset() {
      this.$notify({
        title: '自定义偏移',
        message: '这是一条带有偏移的通知',
        offset: 100,
      });
    },
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: '成功',
  message: '这是一条成功的提示消息',
}; 