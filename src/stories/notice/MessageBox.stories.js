import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Notice/MessageBox',
  parameters: {
    docs: {
      description: {
        component: '消息弹框组件，用于显示确认信息、警告信息、错误信息等。',
      },
    },
  },
};

const Template = () => ({
  template: `
    <div>
      <el-button @click="showAlert">Alert</el-button>
      <el-button @click="showConfirm">Confirm</el-button>
      <el-button @click="showPrompt">Prompt</el-button>
    </div>
  `,
  methods: {
    showAlert() {
      this.$alert('这是一条消息提示', '标题', {
        confirmButtonText: '确定',
      });
    },
    showConfirm() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      });
    },
    showPrompt() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      });
    },
  },
});

export const Default = Template.bind({}); 