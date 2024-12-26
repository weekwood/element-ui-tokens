import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Empty',
  component: 'el-empty',
  argTypes: {
    description: { control: 'text' },
    image: { control: 'text' },
    imageSize: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-empty v-bind="$props">
      <template #default>
        <el-button type="primary">按钮</el-button>
      </template>
    </el-empty>
  `,
});

export const Default = Template.bind({});
Default.args = {
  description: '暂无数据',
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  description: '自定义图片',
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
};

export const ImageSize = Template.bind({});
ImageSize.args = {
  imageSize: 200,
}; 