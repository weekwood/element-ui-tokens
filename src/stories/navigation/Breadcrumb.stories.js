import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Navigation/Breadcrumb',
  component: 'el-breadcrumb',
  argTypes: {
    separator: { control: 'text' },
    separatorClass: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-breadcrumb v-bind="$props">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: '>'
};

export const IconSeparator = Template.bind({});
IconSeparator.args = {
  separatorClass: 'el-icon-arrow-right'
}; 