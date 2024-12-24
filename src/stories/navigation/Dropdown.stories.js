import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Navigation/Dropdown',
  component: 'el-dropdown',
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    splitButton: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    hideOnClick: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-dropdown v-bind="$props" @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
        <el-dropdown-item command="b">狮子头</el-dropdown-item>
        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
        <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  `,
  methods: {
    handleCommand(command) {
      console.log(`click on item ${command}`);
    },
  },
});

export const Default = Template.bind({});

export const SplitButton = Template.bind({});
SplitButton.args = {
  splitButton: true,
  type: 'primary',
};

export const ClickTrigger = Template.bind({});
ClickTrigger.args = {
  trigger: 'click',
}; 