import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Data/Tag',
  component: 'el-tag',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'danger'],
    },
    closable: { control: 'boolean' },
    effect: {
      control: { type: 'select' },
      options: ['dark', 'light', 'plain'],
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small', 'mini'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-tag v-bind="$props">标签</el-tag>',
});

export const Default = Template.bind({});
Default.args = {};

export const WithType = Template.bind({});
WithType.args = {
  type: 'success',
};

export const Closable = Template.bind({});
Closable.args = {
  closable: true,
};

const DynamicTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
    };
  },
  template: `
    <div>
      <el-tag
        v-for="tag in dynamicTags"
        :key="tag"
        closable
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else size="small" @click="showInput">+ 新标签</el-button>
    </div>
  `,
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
  },
});

export const Dynamic = DynamicTemplate.bind({}); 