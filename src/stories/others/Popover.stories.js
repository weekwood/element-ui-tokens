import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Others/Popover',
  component: 'el-popover',
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'focus', 'hover', 'manual'],
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
    },
    width: { control: 'text' },
    content: { control: 'text' },
    title: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="padding: 30px;">
      <el-popover v-bind="$props">
        <el-button slot="reference">点击触发</el-button>
      </el-popover>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  trigger: 'click',
  placement: 'top',
  title: '标题',
  content: '这是一段内容,这是一段内容。',
  width: '200',
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  trigger: 'hover',
}; 