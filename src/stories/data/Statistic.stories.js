import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Statistic',
  component: 'el-statistic',
  argTypes: {
    value: { control: 'text' },
    title: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    precision: { control: 'number' },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-statistic v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: '活跃用户',
  value: '234,567',
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  title: '反馈率',
  value: 88.9,
  prefix: '↑',
  suffix: '%',
  precision: 1,
};

export const Sizes = () => ({
  template: `
    <div style="display: flex; gap: 32px;">
      <el-statistic
        title="大尺寸"
        value="345,678"
        size="large"
      />
      <el-statistic
        title="默认尺寸"
        value="234,567"
      />
      <el-statistic
        title="小尺寸"
        value="123,456"
        size="small"
      />
    </div>
  `,
});

export const WithCurrency = Template.bind({});
WithCurrency.args = {
  title: '总销售额',
  value: 568789,
  prefix: '¥',
  precision: 2,
}; 