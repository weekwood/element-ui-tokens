import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Others/Tooltip',
  component: 'el-tooltip',
  argTypes: {
    content: { control: 'text' },
    placement: {
      control: { type: 'select' },
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
    },
    effect: {
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
    disabled: { control: 'boolean' },
    offset: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-tooltip v-bind="$props">
      <template #content>
        <span>{{ content || '这是提示文字' }}</span>
      </template>
      <el-button>鼠标悬停</el-button>
    </el-tooltip>
  `,
});

export const Default = Template.bind({});
Default.args = {
  content: '这是提示文字',
  placement: 'top',
};

export const Light = Template.bind({});
Light.args = {
  content: '这是提示文字',
  effect: 'light',
}; 