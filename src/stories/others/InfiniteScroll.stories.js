import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Others/InfiniteScroll',
  component: 'infinite-scroll',
};

const Template = (args) => ({
  template: `
    <div style="height: 300px; overflow-y: auto;" v-infinite-scroll="load" infinite-scroll-distance="20">
      <div v-for="i in count" :key="i" style="padding: 8px; border-bottom: 1px solid #eee;">
        {{ i }}
      </div>
      <p v-if="loading" style="text-align: center;">加载中...</p>
    </div>
  `,
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 1000);
    },
  },
});

export const Default = Template.bind({});
Default.args = {}; 