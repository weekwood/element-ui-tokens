import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Basic/Divider',
  component: 'el-divider',
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    contentPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'center'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <span>青春是一个短暂的美梦</span>
      <el-divider v-bind="$props">标题文字</el-divider>
      <span>一旦你醒来，它就会消失</span>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
}; 