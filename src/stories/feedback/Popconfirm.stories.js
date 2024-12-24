import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Feedback/Popconfirm',
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
    customStyle: {
      control: 'object',
      defaultValue: {
        iconColor: 'var(--color-warning-500)',
        padding: 'var(--spacing-md)',
        fontSize: 'var(--font-size-base)',
      },
    },
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
  confirmButtonText: '确定删除',
  confirmButtonType: 'danger',
  cancelButtonText: '取消操作',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: '确定执行此操作吗？',
  icon: 'el-icon-info',
  iconColor: '#409EFF',
};

const WithContentTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-popconfirm
      v-bind="$props"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <div slot="reference" style="color: #409EFF; cursor: pointer;">
        删除此项
        <i class="el-icon-delete"></i>
      </div>
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

export const CustomContent = WithContentTemplate.bind({});
CustomContent.args = {
  title: '确定删除这条数据吗？',
  confirmButtonType: 'danger',
}; 