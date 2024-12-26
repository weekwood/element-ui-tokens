import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Others/Collapse',
  component: 'el-collapse',
  argTypes: {
    accordion: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      activeNames: ['1'],
    };
  },
  template: `
    <el-collapse v-model="activeNames" v-bind="$props">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程</div>
      </el-collapse-item>
    </el-collapse>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Accordion = Template.bind({});
Accordion.args = {
  accordion: true,
}; 