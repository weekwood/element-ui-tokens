import Vue from 'vue';
import ElementUI from 'element-ui';
import './Form.scss';

Vue.use(ElementUI);

export default {
  title: 'Form/Form',
  parameters: {
    docs: {
      description: {
        component: '表单组件，展示不同的字段类型和验证规则',
      },
    },
  }
};

export const WithRequiredAndImportant = () => ({
  template: `
    <el-form 
      ref="form"
      :model="form"
      :rules="rules"
      label-width="120px"
      class="demo-form"
    >
      <!-- 必填字段 -->
      <el-form-item       class="form-item--important" label="收货人" prop="receiver" required>
        <el-input v-model="form.receiver" placeholder="请输入收货人姓名"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" prop="phone" required>
        <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
      </el-form-item>

      <el-form-item label="收货地址" prop="address" required>
        <el-input v-model="form.address" type="textarea" placeholder="请输入详细地址"></el-input>
      </el-form-item>

      <!-- 重要字段 -->
      <el-form-item 
        label="发票信息" 
        prop="invoice"
        class="form-item--important"
      >
        <el-input v-model="form.invoice" placeholder="请输入发票抬头">
          <template slot="prepend">
            <i class="el-icon-warning-outline"></i>
          </template>
        </el-input>
        <div class="form-item__tip">
          <i class="el-icon-info"></i>
          可选填，但填写后将自动为您开具发票
        </div>
      </el-form-item>

      <el-form-item 
        label="配送备注" 
        prop="note"
        class="form-item--important"
      >
        <el-input v-model="form.note" type="textarea" placeholder="请输入配送备注">
        </el-input>
        <div class="form-item__tip">
          <i class="el-icon-info"></i>
          可选填，但会影响配送时间和方式
        </div>
      </el-form-item>

      <!-- 普通选填字段 -->
      <el-form-item label="优惠券" prop="coupon">
        <el-select v-model="form.coupon" placeholder="请选择优惠券">
          <el-option label="满100减10" value="1"></el-option>
          <el-option label="满200减30" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交订单</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  `,
  data() {
    return {
      form: {
        receiver: '',
        phone: '',
        address: '',
        invoice: '',
        note: '',
        coupon: ''
      },
      rules: {
        receiver: [
          { required: true, message: '请输入收货人姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入收货地址', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (!this.form.invoice || !this.form.note) {
            this.$confirm('发票信息和配送备注未填写可能会影响后续服务，是否继续提交？', '提示', {
              confirmButtonText: '继续提交',
              cancelButtonText: '返回修改',
              type: 'warning'
            }).then(() => {
              this.$message.success('提交成功');
            }).catch(() => {});
          } else {
            this.$message.success('提交成功');
          }
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
}); 