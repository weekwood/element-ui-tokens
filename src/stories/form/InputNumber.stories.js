import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/InputNumber',
  component: 'el-input-number',
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    disabled: { control: 'boolean' },
    controls: { control: 'boolean' },
    controlsPosition: {
      control: { type: 'select' },
      options: ['', 'right'],
    },
    precision: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      num: 1,
    };
  },
  template: '<el-input-number v-model="num" v-bind="$props"></el-input-number>',
});

export const Default = Template.bind({});
Default.args = {
  min: 1,
  max: 10,
};

export const ControlsRight = Template.bind({});
ControlsRight.args = {
  min: 1,
  max: 10,
  controlsPosition: 'right',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const StepControl = Template.bind({});
StepControl.args = {
  step: 2,
};

export const Sizes = () => ({
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <el-input-number v-model="num" size="large"></el-input-number>
      <el-input-number v-model="num" size="medium"></el-input-number>
      <el-input-number v-model="num" size="small"></el-input-number>
      <el-input-number v-model="num" size="mini"></el-input-number>
    </div>
  `,
  data() {
    return {
      num: 1,
    };
  },
});

export const SizesWithControlsRight = () => ({
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <el-input-number v-model="num" controls-position="right" size="large"></el-input-number>
      <el-input-number v-model="num" controls-position="right" size="medium"></el-input-number>
      <el-input-number v-model="num" controls-position="right" size="small"></el-input-number>
      <el-input-number v-model="num" controls-position="right" size="mini"></el-input-number>
    </div>
  `,
  data() {
    return {
      num: 1,
    };
  },
}); 