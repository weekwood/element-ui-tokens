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
    <div style="margin-bottom: var(--spacing-8);">
      <el-input v-bind="$props">
        <template v-if="append" slot="append">{{ append }}</template>
      </el-input>
    </div>
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
    <div class="flex flex-col" style="gap: var(--spacing-8);">
      <div class="text-gray-900 font-medium">基础示例</div>
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
    </div>
  `,
});

export const AppendPrependExamples = () => ({
  template: `
    <div style="display: grid; grid-row-gap: var(--spacing-8);">
      <!-- Append 示例 -->
      <div style="display: grid; grid-row-gap: var(--spacing-4);">
        <div class="text-gray-900 font-medium">Append 示例</div>
        <div style="display: grid; grid-row-gap: var(--spacing-4);">
          <!-- 大尺寸 -->
          <el-input size="large" placeholder="请输入">
            <template #append>.com</template>
          </el-input>
          <!-- 默认尺寸 -->
          <el-input placeholder="请输入">
            <template #append>.com</template>
          </el-input>
          <!-- 小尺寸 -->
          <el-input size="small" placeholder="请输入">
            <template #append>.com</template>
          </el-input>
          <!-- 迷你尺寸 -->
          <el-input size="mini" placeholder="请输入">
            <template #append>.com</template>
          </el-input>
        </div>
      </div>

      <!-- Prepend 示例 -->
      <div style="display: grid; grid-row-gap: var(--spacing-4);">
        <div class="text-gray-900 font-medium">Prepend 示例</div>
        <div style="display: grid; grid-row-gap: var(--spacing-4);">
          <!-- 大尺寸 -->
          <el-input size="large" placeholder="请输入">
            <template #prepend>https://</template>
          </el-input>
          <!-- 默认尺寸 -->
          <el-input placeholder="请输入">
            <template #prepend>https://</template>
          </el-input>
          <!-- 小尺寸 -->
          <el-input size="small" placeholder="请输入">
            <template #prepend>https://</template>
          </el-input>
          <!-- 迷你尺寸 -->
          <el-input size="mini" placeholder="请输入">
            <template #prepend>https://</template>
          </el-input>
        </div>
      </div>

      <!-- Prepend + Append 组合示例 -->
      <div style="display: grid; grid-row-gap: var(--spacing-4);">
        <div class="text-gray-900 font-medium">Prepend + Append 组合示例</div>
        <div style="display: grid; grid-row-gap: var(--spacing-4);">
          <!-- 大尺寸 -->
          <el-input size="large" placeholder="请输入">
            <template #prepend>https://</template>
            <template #append>.com</template>
          </el-input>
          <!-- 默认尺寸 -->
          <el-input placeholder="请输入">
            <template #prepend>https://</template>
            <template #append>.com</template>
          </el-input>
          <!-- 小尺寸 -->
          <el-input size="small" placeholder="请输入">
            <template #prepend>https://</template>
            <template #append>.com</template>
          </el-input>
          <!-- 迷你尺寸 -->
          <el-input size="mini" placeholder="请输入">
            <template #prepend>https://</template>
            <template #append>.com</template>
          </el-input>
        </div>
      </div>

      <!-- 带下拉选择的示例 -->
      <div style="display: grid; grid-row-gap: var(--spacing-4);">
        <div class="text-gray-900 font-medium">带下拉选择的示例</div>
        <div style="display: grid; grid-row-gap: var(--spacing-4);">
          <!-- 大尺寸 -->
          <el-input size="large" placeholder="请输入">
            <template #prepend>
              <el-select v-model="select" size="large" placeholder="请选择">
                <el-option label="http://" value="1"></el-option>
                <el-option label="https://" value="2"></el-option>
              </el-select>
            </template>
            <template #append>
              <el-select v-model="select2" size="large" placeholder="请选择">
                <el-option label=".com" value="1"></el-option>
                <el-option label=".cn" value="2"></el-option>
                <el-option label=".org" value="3"></el-option>
              </el-select>
            </template>
          </el-input>
          <!-- 默认尺寸 -->
          <el-input placeholder="请输入">
            <template #prepend>
              <el-select v-model="select" placeholder="请选择">
                <el-option label="http://" value="1"></el-option>
                <el-option label="https://" value="2"></el-option>
              </el-select>
            </template>
            <template #append>
              <el-select v-model="select2" placeholder="请选择">
                <el-option label=".com" value="1"></el-option>
                <el-option label=".cn" value="2"></el-option>
                <el-option label=".org" value="3"></el-option>
              </el-select>
            </template>
          </el-input>
          <!-- 小尺寸 -->
          <el-input size="small" placeholder="请输入">
            <template #prepend>
              <el-select v-model="select" size="small" placeholder="请选择">
                <el-option label="http://" value="1"></el-option>
                <el-option label="https://" value="2"></el-option>
              </el-select>
            </template>
            <template #append>
              <el-select v-model="select2" size="small" placeholder="请选择">
                <el-option label=".com" value="1"></el-option>
                <el-option label=".cn" value="2"></el-option>
                <el-option label=".org" value="3"></el-option>
              </el-select>
            </template>
          </el-input>
          <!-- 迷你尺寸 -->
          <el-input size="mini" placeholder="请输入">
            <template #prepend>
              <el-select v-model="select" size="mini" placeholder="请选择">
                <el-option label="http://" value="1"></el-option>
                <el-option label="https://" value="2"></el-option>
              </el-select>
            </template>
            <template #append>
              <el-select v-model="select2" size="mini" placeholder="请选择">
                <el-option label=".com" value="1"></el-option>
                <el-option label=".cn" value="2"></el-option>
                <el-option label=".org" value="3"></el-option>
              </el-select>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      select: '1',
      select2: '1'
    }
  }
}); 