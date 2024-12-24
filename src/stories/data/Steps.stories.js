import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Steps',
  component: 'el-steps',
  argTypes: {
    active: { control: 'number' },
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    space: { control: 'text' },
    finishStatus: {
      control: { type: 'select' },
      options: ['success', 'error', 'finish', 'process'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-steps v-bind="$props">
      <el-step title="步骤 1" description="这是一段很长的描述性文字"></el-step>
      <el-step title="步骤 2" description="这是一段很长的描述性文字"></el-step>
      <el-step title="步骤 3" description="这是一段很长的描述性文字"></el-step>
    </el-steps>
  `,
});

export const Default = Template.bind({});
Default.args = {
  active: 1,
};

export const Vertical = Template.bind({});
Vertical.args = {
  active: 1,
  direction: 'vertical',
}; 