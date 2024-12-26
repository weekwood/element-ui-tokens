import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Navigation/NavMenu',
  component: 'el-menu',
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    collapse: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    activeTextColor: { control: 'color' },
    defaultActive: { control: 'text' },
    defaultOpeneds: { control: 'array' },
    uniqueOpened: { control: 'boolean' },
    router: { control: 'boolean' },
    collapseTransition: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-menu v-bind="$props">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  mode: 'vertical',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  mode: 'vertical',
  collapse: true,
}; 