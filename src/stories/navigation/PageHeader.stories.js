import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Navigation/PageHeader',
  component: 'el-page-header',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-page-header
      v-bind="$props"
      @back="goBack">
    </el-page-header>
  `,
  methods: {
    goBack() {
      console.log('go back');
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  content: '详情页面',
};

const CustomTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-page-header @back="goBack">
      <template slot="title">
        <div class="title-wrapper">
          <el-tag>标签一</el-tag>
          返回
        </div>
      </template>
      <template slot="content">
        <div class="content-wrapper">
          <el-button type="primary">操作</el-button>
          <el-button>操作</el-button>
        </div>
      </template>
    </el-page-header>
  `,
  methods: {
    goBack() {
      console.log('go back');
    },
  },
});

export const CustomSlot = CustomTemplate.bind({}); 