import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Checkbox',
  component: 'el-checkbox',
  argTypes: {
    disabled: { control: 'boolean' },
    border: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small', 'mini'],
    },
    customStyle: {
      control: 'object',
      defaultValue: {
        checkedColor: 'var(--color-primary-500)',
        hoverColor: 'var(--color-primary-400)',
      },
    },
  },
};

const Template = (args) => ({
  template: `
    <el-checkbox v-bind="args">{{ args.children }}</el-checkbox>
  `,
  data() {
    return { args };
  },
});

export const Default = () => ({
  template: `
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
    </el-checkbox-group>
  `,
  data() {
    return {
      checkList: ['复选框 A']
    };
  }
});

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  label: '选项1',
  children: '单个复选框'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: '选项1',
  children: '禁用状态'
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  checked: true,
  label: '选项1',
  children: '禁用且选中'
}; 