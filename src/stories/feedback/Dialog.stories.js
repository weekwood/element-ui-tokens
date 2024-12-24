import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Feedback/Dialog',
  component: 'el-dialog',
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    fullscreen: { control: 'boolean' },
    top: { control: 'text' },
    modal: { control: 'boolean' },
    appendToBody: { control: 'boolean' },
    closeOnClickModal: { control: 'boolean' },
    center: { control: 'boolean' },
    visible: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      dialogVisible: false,
    };
  },
  template: `
    <div>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        v-bind="$props">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: '提示',
  width: '30%',
};

export const Centered = Template.bind({});
Centered.args = {
  title: '提示',
  center: true,
}; 