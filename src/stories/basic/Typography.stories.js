import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Basic/Typography',
  parameters: {
    docs: {
      description: {
        component: '文字排版系统展示',
      },
    },
  },
};

const Template = () => ({
  template: `
    <div class="typography-demo">
      <h1>主标题 H1</h1>
      <h2>次级标题 H2</h2>
      <h3>三级标题 H3</h3>
      <h4>四级标题 H4</h4>
      <h5>五级标题 H5</h5>
      <p>正文：Element UI 是一套基于 Vue 2.0 的桌面端组件库，提供了丰富的组件帮助开发者快速构建网站。</p>
      <p class="text-secondary">次要文字：用于辅助说明的文字内容。</p>
      <p class="text-disabled">禁用文字：不可用或不可点击的文字内容。</p>
    </div>
  `,
});

export const Default = Template.bind({}); 