import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Data/Tree',
  component: 'el-tree',
  argTypes: {
    showCheckbox: { control: 'boolean' },
    defaultExpandAll: { control: 'boolean' },
    draggable: { control: 'boolean' },
    nodeKey: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }]
      }],
    };
  },
  template: '<el-tree :data="data" v-bind="$props"></el-tree>',
});

export const Default = Template.bind({});
Default.args = {};

export const WithCheckbox = Template.bind({});
WithCheckbox.args = {
  showCheckbox: true,
}; 