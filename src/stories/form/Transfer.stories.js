import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Transfer',
  component: 'el-transfer',
  argTypes: {
    filterable: { control: 'boolean' },
    titles: { control: 'array' },
    buttonTexts: { control: 'array' },
    targetOrder: {
      control: { type: 'select' },
      options: ['original', 'push', 'unshift'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4],
    };
  },
  template: `
    <el-transfer
      v-model="value"
      :data="data"
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Filterable = Template.bind({});
Filterable.args = {
  filterable: true,
};

export const CustomTitles = Template.bind({});
CustomTitles.args = {
  titles: ['Source', 'Target'],
  buttonTexts: ['到左边', '到右边'],
}; 