import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Radio',
  component: 'el-radio',
  argTypes: {
    disabled: { control: 'boolean' },
    border: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      radio: '1',
    };
  },
  template: `
    <div>
      <el-radio v-model="radio" label="1" v-bind="$props">备选项1</el-radio>
      <el-radio v-model="radio" label="2" v-bind="$props">备选项2</el-radio>
    </div>
  `,
});

export const Default = Template.bind({});

const GroupTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      radio: '3',
    };
  },
  template: `
    <el-radio-group v-model="radio" v-bind="$props">
      <el-radio :label="3">备选项1</el-radio>
      <el-radio :label="6">备选项2</el-radio>
      <el-radio :label="9">备选项3</el-radio>
    </el-radio-group>
  `,
});

export const RadioGroup = GroupTemplate.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: '选项1',
  children: '禁用状态',
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  checked: true,
  label: '选项1',
  children: '禁用且选中',
}; 