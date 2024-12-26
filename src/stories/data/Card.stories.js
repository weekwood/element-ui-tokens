import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Card',
  component: 'el-card',
  argTypes: {
    shadow: {
      control: { type: 'select' },
      options: ['always', 'hover', 'never'],
    },
    bodyStyle: { control: 'object' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-card v-bind="$props">
      <div slot="header">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const NoHeader = Template.bind({});
NoHeader.args = {
  shadow: 'hover',
}; 