import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Feedback/Loading',
  component: 'el-loading',
  argTypes: {
    fullscreen: { control: 'boolean' },
    text: { control: 'text' },
    background: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="padding: 24px">
      <el-button @click="openFullScreen">显示全屏加载</el-button>
      <el-button @click="openElement">显示区域加载</el-button>
      <div v-loading="loading" style="height: 200px; margin-top: 16px;">
        <div v-if="!loading">内容区域</div>
      </div>
    </div>
  `,
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    openElement() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
});

export const Default = Template.bind({});
Default.args = {}; 