import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Cascader',
  component: 'el-cascader',
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    showAllLevels: { control: 'boolean' },
    collapseTags: { control: 'boolean' },
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
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }]
        }]
      }]
    };
  },
  template: `
    <el-cascader
      v-model="value"
      :options="options"
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '请选择',
};

export const WithTags = Template.bind({});
WithTags.args = {
  collapseTags: true,
  placeholder: '请选择',
}; 