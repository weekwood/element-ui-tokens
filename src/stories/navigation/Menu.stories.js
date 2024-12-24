import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Navigation/Menu',
  component: 'el-menu',
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    defaultActive: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    activeTextColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-menu v-bind="$props" default-active="1">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          <el-menu-item index="2-4-2">选项4-2</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  `,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
  mode: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  mode: 'vertical',
};

export const Dark = Template.bind({});
Dark.args = {
  mode: 'vertical',
  backgroundColor: '#545c64',
  textColor: '#fff',
  activeTextColor: '#ffd04b',
}; 