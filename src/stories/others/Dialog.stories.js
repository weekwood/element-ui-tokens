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