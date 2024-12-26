import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Timeline',
  component: 'el-timeline',
  argTypes: {
    reverse: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-timeline v-bind="$props">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  `,
  data() {
    return {
      activities: [{
        content: '创建成功',
        timestamp: '2018-04-11',
      }, {
        content: '通过审核',
        timestamp: '2018-04-13',
      }, {
        content: '活动按期开始',
        timestamp: '2018-04-15',
      }],
    };
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Reversed = Template.bind({});
Reversed.args = {
  reverse: true,
}; 