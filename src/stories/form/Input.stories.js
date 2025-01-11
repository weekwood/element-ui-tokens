import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Form/Input',
  component: 'el-input',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'textarea', 'password'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'mini'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    suffixIcon: { 
      control: { type: 'select' },
      options: ['', 'el-icon-date', 'el-icon-search', 'el-icon-edit', 'el-icon-message', 'el-icon-star-off'],
    },
    append: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-input v-bind="$props">
      <template v-if="append" slot="append">{{ append }}</template>
    </el-input>
  `,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '请输入内容',
};

export const Clearable = Template.bind({});
Clearable.args = {
  placeholder: '可清空',
  clearable: true,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: '请输入密码',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: '禁用状态',
};

export const AppendExamples = () => ({
  template: `
    <div class="flex flex-col" style="gap: var(--spacing-4);">
      <!-- 文本后缀 -->
      <el-input placeholder="请输入域名">
        <template slot="append">.com</template>
      </el-input>

      <!-- 单位后缀 -->
      <el-input placeholder="请输入体积">
        <template slot="append">m³</template>
      </el-input>

      <!-- 符号后缀 -->
      <el-input placeholder="请输入比例">
        <template slot="append">%</template>
      </el-input>

      <!-- 图标后缀 -->
      <el-input placeholder="搜索内容">
        <template slot="append">
          <i class="el-icon-search"></i>
        </template>
      </el-input>

      <!-- 文字加图标后缀 -->
      <el-input placeholder="搜索内容">
        <template slot="append">
          搜索 <i class="el-icon-search"></i>
        </template>
      </el-input>

      <!-- 按钮样式后缀 -->
      <el-input placeholder="点击搜索">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>

      <!-- 下拉菜单后缀 -->
      <el-input placeholder="选择并输入">
        <el-select slot="append" style="width: 100px" placeholder="选择">
          <el-option label="CNY" value="CNY"></el-option>
          <el-option label="USD" value="USD"></el-option>
          <el-option label="EUR" value="EUR"></el-option>
        </el-select>
      </el-input>
    </div>
  `,
}); 