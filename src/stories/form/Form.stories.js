import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Form/Form',
  component: 'el-form',
  argTypes: {
    labelPosition: {
      control: { type: 'select' },
      options: ['right', 'left', 'top'],
    },
    labelWidth: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    inline: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      form: {
        name: '',
        region: '',
        date: '',
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  template: `
    <el-form :model="form" v-bind="$props">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  `,
});

export const Default = Template.bind({});
Default.args = {
  labelWidth: '100px',
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
}; 