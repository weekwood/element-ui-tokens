import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Feedback/Result',
  component: 'el-result',
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'text' },
    icon: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-result v-bind="$props">
      <template #extra>
        <el-button type="primary">返回</el-button>
      </template>
    </el-result>
  `,
});

export const Success = Template.bind({});
Success.args = {
  title: '操作成功',
  subTitle: '请根据提示进行后续操作',
  icon: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  title: '警告提示',
  subTitle: '请注意相关事项',
  icon: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  title: '操作失败',
  subTitle: '请检查并修改以下信息后，再重新提交。',
  icon: 'error',
};

export const Info = Template.bind({});
Info.args = {
  title: '信息提示',
  subTitle: '这是一条信息提示',
  icon: 'info',
};

const CustomTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-result v-bind="$props">
      <template #icon>
        <i class="el-icon-s-custom" style="color: var(--color-primary-500); font-size: 72px;"></i>
      </template>
      <template #extra>
        <el-button type="primary">主要按钮</el-button>
        <el-button>次要按钮</el-button>
      </template>
      <div>
        <h4>这里可以自定义更多内容</h4>
        <p>比如一些详细的说明文字</p>
      </div>
    </el-result>
  `,
});

export const CustomContent = CustomTemplate.bind({});
CustomContent.args = {
  title: '自定义内容',
  subTitle: '这是一个带有自定义内容的 Result',
}; 