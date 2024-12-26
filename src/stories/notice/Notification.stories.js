import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Notice/Notification',
  parameters: {
    docs: {
      description: {
        component: '悬浮出现在页面角落，显示全局的通知提醒消息。',
      },
    },
  },
};

const Template = () => ({
  template: `
    <div>
      <el-button
        plain
        @click="open1">
        成功
      </el-button>
      <el-button
        plain
        @click="open2">
        警告
      </el-button>
      <el-button
        plain
        @click="open3">
        消息
      </el-button>
      <el-button
        plain
        @click="open4">
        错误
      </el-button>
    </div>
  `,
  methods: {
    open1() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      });
    },
    open2() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning',
      });
    },
    open3() {
      this.$notify({
        title: '消息',
        message: '这是一条消息的提示消息',
        type: 'info',
      });
    },
    open4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息',
      });
    },
  },
});

export const Default = Template.bind({}); 