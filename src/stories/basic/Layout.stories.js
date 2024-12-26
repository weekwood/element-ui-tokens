import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Basic/Layout',
  component: 'el-row',
};

const Template = (args) => ({
  template: `
    <div>
      <el-row>
        <el-col :span="24"><div class="grid-content">24</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">12</div></el-col>
        <el-col :span="12"><div class="grid-content">12</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content">8</div></el-col>
        <el-col :span="8"><div class="grid-content">8</div></el-col>
        <el-col :span="8"><div class="grid-content">8</div></el-col>
      </el-row>
    </div>
  `,
});

export const Default = Template.bind({});

const GutterTemplate = (args) => ({
  template: `
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content">6</div></el-col>
      <el-col :span="6"><div class="grid-content">6</div></el-col>
      <el-col :span="6"><div class="grid-content">6</div></el-col>
      <el-col :span="6"><div class="grid-content">6</div></el-col>
    </el-row>
  `,
});

export const WithGutter = GutterTemplate.bind({}); 