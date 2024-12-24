import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Descriptions',
  component: 'el-descriptions',
  argTypes: {
    border: { control: 'boolean' },
    column: { control: 'number' },
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    title: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-descriptions v-bind="$props">
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: '用户信息',
};

export const Vertical = Template.bind({});
Vertical.args = {
  title: '垂直带边框列表',
  direction: 'vertical',
  border: true,
};

export const Customized = Template.bind({});
Customized.args = {
  title: '自定义尺寸列表',
  size: 'large',
  border: true,
  column: 3,
}; 