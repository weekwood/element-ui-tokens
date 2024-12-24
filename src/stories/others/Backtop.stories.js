import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Others/Backtop',
  component: 'el-backtop',
  argTypes: {
    visibilityHeight: { control: 'number' },
    right: { control: 'number' },
    bottom: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="height: 100vh; overflow: auto;">
      <div style="height: 200vh; padding: 20px;">
        <p v-for="n in 20" :key="n">这是第 {{ n }} 行文字</p>
        <el-backtop v-bind="$props">
          <div style="
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            UP
          </div>
        </el-backtop>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
}; 