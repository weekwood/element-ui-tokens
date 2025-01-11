import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Others/Dialog',
  parameters: {
    docs: {
      description: {
        component: '对话框组件，展示不同层级的阴影效果',
      },
    },
  }
};

export const Default = () => ({
  template: `
    <div class="dialog-demo">
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        class="dialog-with-shadow"
      >
        <span>这是一个使用 shadow-lg 阴影的对话框</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  `,
  data() {
    return {
      dialogVisible: false
    };
  }
});

export const WithForm = () => ({
  template: `
    <div class="dialog-demo">
      <el-button type="primary" @click="dialogVisible = true">新建订单</el-button>
      
      <el-dialog
        title="新建订单"
        :visible.sync="dialogVisible"
        width="600px"
        class="dialog-with-shadow"
      >
        <el-form 
          ref="form"
          :model="form"
          :rules="rules"
          label-width="100px"
          class="dialog-form"
        >
          <el-form-item label="订单编号" prop="orderNo">
            <el-input v-model="form.orderNo" placeholder="请输入订单编号"></el-input>
          </el-form-item>

          <el-form-item label="客户名称" prop="customerName" required>
            <el-input v-model="form.customerName" placeholder="请输入客户名称"></el-input>
          </el-form-item>

          <el-form-item label="联系电话" prop="phone" required>
            <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
          </el-form-item>

          <el-form-item label="订单金额" prop="amount" required>
            <el-input-number v-model="form.amount" :min="0" :precision="2" :step="100"></el-input-number>
          </el-form-item>

          <el-form-item label="支付方式" prop="paymentType">
            <el-select v-model="form.paymentType" placeholder="请选择支付方式">
              <el-option label="微信支付" value="wechat"></el-option>
              <el-option label="支付宝" value="alipay"></el-option>
              <el-option label="银行转账" value="bank"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="订单状态" prop="status">
            <el-select v-model="form.status" placeholder="请选择订单状态">
              <el-option label="待付款" value="pending"></el-option>
              <el-option label="已付款" value="paid"></el-option>
              <el-option label="已发货" value="shipped"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="备注信息" prop="remark">
            <el-input type="textarea" v-model="form.remark" placeholder="请输入备注信息"></el-input>
          </el-form-item>

          <el-form-item label="交付日期" prop="deliveryDate" required>
            <el-date-picker
              v-model="form.deliveryDate"
              type="date"
              placeholder="请选择交付日期"
              value-format="yyyy-MM-dd"
              :picker-options="{
                disabledDate(time) {
                  return time.getTime() < Date.now() - 8.64e7;
                }
              }"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  `,
  data() {
    return {
      dialogVisible: false,
      form: {
        orderNo: '',
        customerName: '',
        phone: '',
        amount: 0,
        paymentType: '',
        status: '',
        remark: '',
        deliveryDate: ''
      },
      rules: {
        customerName: [
          { required: true, message: '请输入客户名称', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        amount: [
          { required: true, message: '请输入订单金额', trigger: 'blur' }
        ],
        deliveryDate: [
          { required: true, message: '请选择交付日期', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('提交成功');
          this.dialogVisible = false;
        }
      });
    }
  }
}); 