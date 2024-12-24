import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/Select',
  component: 'el-select',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }],
    };
  },
  template: `
    <el-select v-model="value" v-bind="$props">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  `,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '请选择',
};

export const Clearable = Template.bind({});
Clearable.args = {
  placeholder: '可清空',
  clearable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '禁用状态',
  disabled: true,
}; 