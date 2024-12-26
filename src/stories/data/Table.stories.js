import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Table',
  component: 'el-table',
  argTypes: {
    border: { control: 'boolean' },
    stripe: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    customStyle: {
      control: 'object',
      defaultValue: {
        borderColor: 'var(--color-primary-500)',
        stripeColor: 'var(--color-primary-50)',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }],
    };
  },
  template: `
    <el-table
      :data="tableData"
      v-bind="$props"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  `,
});

export const Default = Template.bind({});

export const Border = Template.bind({});
Border.args = {
  border: true,
};

export const Stripe = Template.bind({});
Stripe.args = {
  stripe: true,
};

const SelectionTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }],
      multipleSelection: [],
    };
  },
  template: `
    <el-table
      :data="tableData"
      v-bind="$props"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地���">
      </el-table-column>
    </el-table>
  `,
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
});

export const Selection = SelectionTemplate.bind({}); 