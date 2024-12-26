import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Notice/Loading',
  parameters: {
    docs: {
      description: {
        component: 'Loading 指令和服务',
      },
    },
  },
};

const Template = () => ({
  template: `
    <div>
      <el-button
        v-loading.fullscreen.lock="fullscreenLoading"
        type="primary"
        @click="openFullScreen">
        指令方式
      </el-button>
      <el-button
        type="primary"
        @click="openFullScreen2">
        服务方式
      </el-button>
    </div>
  `,
  data() {
    return {
      fullscreenLoading: false,
    };
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
  },
});

export const Default = Template.bind({}); 