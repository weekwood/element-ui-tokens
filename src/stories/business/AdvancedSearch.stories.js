import Vue from 'vue';
import ElementUI from 'element-ui';
import './AdvancedSearch.scss';

Vue.use(ElementUI);

export default {
  title: 'Business/AdvancedSearch',  // 改为 Business 分类
  component: 'AdvancedSearch',
  parameters: {
    docs: {
      description: {
        component: '高级搜索表单，支持展开/收起和响应式布局',
      },
    },
  }
};

const Template = () => ({
  template: `
    <el-form 
      ref="form"
      :model="form" 
      :inline="true"
      class="advanced-search"
      :class="{ 'is-expanded': isExpanded }"
      :style="{
        '--form-item-width': itemWidth,
        '--form-label-width': labelWidth
      }"
    >
      <div class="advanced-search__content">
        <div class="advanced-search__items">
          <!-- 表单项 -->
          <el-form-item 
            v-for="item in formItems"
            :key="item.prop"
            :label="item.label"
          >
            <el-input 
              v-if="item.type === 'input'"
              v-model="form[item.prop]" 
              :placeholder="'请输入' + item.label" 
            />
            <el-select
              v-else-if="item.type === 'select'"
              v-model="form[item.prop]"
              :placeholder="'请选择' + item.label"
            >
              <el-option
                v-for="opt in item.options"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>
          </el-form-item>

          <!-- 按钮组作为 items 的一部分 -->
          <div class="advanced-search__actions">
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <el-button @click="handleReset">重置</el-button>
            <el-button type="text" @click="toggleExpand">
              {{ isExpanded ? '收起' : '展开' }}
              <i :class="['el-icon-arrow-' + (isExpanded ? 'up' : 'down')]" />
            </el-button>
          </div>
        </div>
      </div>
    </el-form>
  `,
  data() {
    return {
      form: {},
      isExpanded: false,
      itemWidth: '280px',
      labelWidth: '80px',
      formItems: [
        { label: '姓名', prop: 'name', type: 'input' },
        { label: '年龄', prop: 'age', type: 'input' },
        { label: '性别', prop: 'gender', type: 'select', options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' }
        ]},
        { label: '职业', prop: 'occupation', type: 'select', options: [
          { label: '工程师', value: 'engineer' },
          { label: '设计师', value: 'designer' }
        ]},
        { label: '学历', prop: 'education', type: 'select', options: [
          { label: '本科', value: 'bachelor' },
          { label: '硕士', value: 'master' }
        ]},
        { label: '部门', prop: 'department', type: 'input' }
      ]
    };
  },
  methods: {
    handleSearch() {
      console.log('查询', this.form);
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    }
  }
});

export const Default = Template.bind({}); 