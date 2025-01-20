import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Navigation/Tabs',
  component: 'el-tabs',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['card', 'border-card', ''],
    },
    tabPosition: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-tabs v-bind="$props">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务" name="fourth">定时任务</el-tab-pane>
      <el-tab-pane label="系统设置" name="fifth">系统设置</el-tab-pane>
      <el-tab-pane label="权限管理" name="sixth">权限管理</el-tab-pane>
      <el-tab-pane label="日志监控" name="seventh">日志监控</el-tab-pane>
      <el-tab-pane label="数据统计" name="eighth">数据统计</el-tab-pane>
      <el-tab-pane label="消息中心" name="ninth">消息中心</el-tab-pane>
      <el-tab-pane label="工作流程" name="tenth">工作流程</el-tab-pane>
      <el-tab-pane label="资源管理" name="eleventh">资源管理</el-tab-pane>
      <el-tab-pane label="审计记录" name="twelfth">审计记录</el-tab-pane>
    </el-tabs>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Card = Template.bind({});
Card.args = {
  type: 'card',
}; 