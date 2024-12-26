import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Skeleton',
  component: 'el-skeleton',
  argTypes: {
    animated: { control: 'boolean' },
    count: { control: 'number' },
    loading: { control: 'boolean' },
    rows: { control: 'number' },
    throttle: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-skeleton v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  rows: 4,
};

export const Animated = Template.bind({});
Animated.args = {
  rows: 4,
  animated: true,
};

const WithTemplateTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      loading: true,
    };
  },
  template: `
    <el-skeleton-item
      style="width: 240px"
      v-bind="$props">
      <template #template>
        <el-skeleton :rows="3" />
      </template>
      <template #default>
        <div>
          <h3>真实内容</h3>
          <p>这里是加载完成后显示的真实内容。</p>
        </div>
      </template>
    </el-skeleton-item>
  `,
});

export const WithTemplate = WithTemplateTemplate.bind({});
WithTemplate.args = {
  animated: true,
}; 