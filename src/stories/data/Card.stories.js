import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Card',
  component: 'el-card',
  argTypes: {
    shadow: {
      control: { type: 'select' },
      options: ['always', 'hover', 'never'],
      description: 'When to show card shadows',
      defaultValue: 'always',
    },
    bodyStyle: { control: 'object' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-card v-bind="$props">
      <div slot="header">
        <span>Card Title</span>
        <el-button style="float: right;" type="text">Operation</el-button>
      </div>
      <div v-for="o in 4" :key="o">
        {{'List item ' + o }}
      </div>
    </el-card>
  `,
});

export const AlwaysShadow = Template.bind({});
AlwaysShadow.args = {
  shadow: 'always',
};

export const HoverShadow = Template.bind({});
HoverShadow.args = {
  shadow: 'hover',
};

export const NeverShadow = Template.bind({});
NeverShadow.args = {
  shadow: 'never',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  shadow: 'hover',
  bodyStyle: {
    padding: '20px',
    backgroundColor: 'var(--color-primary-50)',
  },
}; 