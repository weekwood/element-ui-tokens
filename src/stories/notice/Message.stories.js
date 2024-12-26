import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Notice/Message',
  component: 'el-message',
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error'],
    },
    showClose: { control: 'boolean' },
    duration: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <el-button @click="open">显示消息</el-button>
      <el-button @click="openVn">VNode</el-button>
      <el-button @click="openHTML">HTML 片段</el-button>
    </div>
  `,
  methods: {
    open() {
      this.$message({
        ...this.$props,
        message: this.message || '这是一条消息提示',
      });
    },
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
      });
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
      });
    },
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: '恭喜你，这是一条成功消息',
}; 