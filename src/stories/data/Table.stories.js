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
      options: ['medium', 'small', 'mini'],
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
        label="地址">
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

export const WithFilter = () => ({
  template: `
    <el-table :data="filteredData" ref="table" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
        <template slot="header" slot-scope="scope">
          <div style="display: flex; align-items: center;">
            <span>姓名</span>
            <el-popover
              placement="bottom"
              width="200"
              trigger="click"
              popper-class="filter-popover"
            >
              <el-input
                v-model="nameFilter"
                size="small"
                placeholder="请输入关键字"
                clearable
              >
              </el-input>
              <div style="margin-top: 8px; display: flex;">
                <el-button type="text" @click="handleConfirm">筛选</el-button>
                <el-button type="text" @click="handleReset" class="ml-0">重置</el-button>
              </div>
              <span 
                slot="reference" 
                :class="{ 'is-filtered': isFiltered }"
                style="margin-left: 8px; cursor: pointer; color: var(--color-text-secondary);"
              >
                筛选
              </span>
            </el-popover>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  `,
  data() {
    return {
      nameFilter: '',
      confirmedFilter: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小明',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '李小红',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '赵小绿',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  computed: {
    filteredData() {
      if (!this.confirmedFilter) return this.tableData;
      return this.tableData.filter(row => 
        row.name.toLowerCase().includes(this.confirmedFilter.toLowerCase())
      );
    },
    isFiltered() {
      return !!this.confirmedFilter;
    }
  },
  methods: {
    handleConfirm() {
      this.confirmedFilter = this.nameFilter;
    },
    handleReset() {
      this.nameFilter = '';
      this.confirmedFilter = '';
    }
  }
});

export const DifferentSizes = () => ({
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小明',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '李小红',
        address: '上海市普陀区金沙江路 1519 弄'
      }]
    };
  },
  template: `
    <div class="space-y-8">
      <div>
        <h3 class="mb-2">Mini 尺寸</h3>
        <el-table
          :data="tableData"
          size="mini"
          border
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          />
          <el-table-column
            prop="address"
            label="地址"
          />
        </el-table>
      </div>

      <div>
        <h3 class="mb-2">Small 尺寸</h3>
        <el-table
          :data="tableData"
          size="small"
          border
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          />
          <el-table-column
            prop="address"
            label="地址"
          />
        </el-table>
      </div>

      <div>
        <h3 class="mb-2">默认尺寸</h3>
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          />
          <el-table-column
            prop="address"
            label="地址"
          />
        </el-table>
      </div>
    </div>
  `
});

export const FixedColumns = () => ({
  data() {
    return {
      tableData: Array.from({ length: 10 }, (_, index) => ({
        date: `2016-05-${index + 1}`,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家'
      }))
    }
  },
  template: `
    <div>
      <h3 class="mb-2">固定列</h3>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="province"
          label="省份"
          width="120"
        />
        <el-table-column
          prop="city"
          label="市区"
          width="120"
        />
        <el-table-column
          prop="address"
          label="地址"
          width="300"
        />
        <el-table-column
          prop="zip"
          label="邮编"
          width="120"
        />
    
      </el-table>
    </div>
  `,
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
}); 