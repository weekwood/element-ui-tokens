import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Others/Popconfirm',
  component: 'el-popconfirm',
  argTypes: {
    title: { control: 'text' },
    confirmButtonText: { control: 'text' },
    cancelButtonText: { control: 'text' },
    confirmButtonType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
    },
    cancelButtonType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
    },
    icon: { control: 'text' },
    iconColor: { control: 'color' },
    hideIcon: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-popconfirm
      v-bind="$props"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
  `,
  methods: {
    handleConfirm() {
      console.log('confirm!');
    },
    handleCancel() {
      console.log('cancel!');
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  title: '确定删除这条数据吗？',
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  title: '确定删除这条数据吗？',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  confirmButtonType: 'danger',
}; 