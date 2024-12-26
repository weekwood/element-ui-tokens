import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Navigation/Pagination',
  component: 'el-pagination',
  argTypes: {
    small: { control: 'boolean' },
    background: { control: 'boolean' },
    pageSize: { control: 'number' },
    total: { control: 'number' },
    pageCount: { control: 'number' },
    pagerCount: { control: 'number' },
    layout: { control: 'text' },
    hideOnSinglePage: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      currentPage: 1,
    };
  },
  template: `
    <el-pagination
      v-model="currentPage"
      v-bind="$props"
      @current-change="handleCurrentChange">
    </el-pagination>
  `,
  methods: {
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  total: 100,
  layout: 'prev, pager, next',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  background: true,
  total: 100,
  layout: 'prev, pager, next',
};

export const FullFeatured = Template.bind({});
FullFeatured.args = {
  total: 100,
  layout: 'total, sizes, prev, pager, next, jumper',
  background: true,
  pageSize: 10,
}; 