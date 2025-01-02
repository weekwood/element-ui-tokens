import Vue from 'vue';
import ElementUI from 'element-ui';
import './AdvancedForm.scss';

Vue.use(ElementUI);

export default {
  title: 'Business/AdvancedForm',
  component: 'el-form',
  parameters: {
    docs: {
      description: {
        component: 'Element Form 的 solid 变体，表单项带有背景色',
      },
    },
  }
};

export const Solid = () => ({
  template: `
    <el-form 
      ref="form"
      :model="form" 
      :inline="true"
      class="el-form--solid el-form--5-cols"
    >
      <el-form-item label="时间筛选">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="2025.01.01"
          value-format="yyyy.MM.dd"
        />
      </el-form-item>

      <el-form-item label="配送类型">
        <el-select 
          v-model="form.type" 
          placeholder="有订单的用户"
        >
          <el-option label="有订单的用户" value="1" />
        </el-select>
      </el-form-item>

      <el-form-item label="未排数">
        <span>2125</span>
      </el-form-item>

      <el-form-item label="未定位">
        <span>0</span>
      </el-form-item>

      <el-form-item label="总点数">
        <span>3000</span>
      </el-form-item>
    </el-form>
  `,
  data() {
    return {
      form: {
        date: '',
        type: '',
      }
    };
  }
});