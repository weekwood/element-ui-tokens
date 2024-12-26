import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Basic/Icon',
  component: 'i',
  argTypes: {
    name: {
      control: 'text',
      description: '图标名称',
    },
    color: {
      control: 'color',
      description: '图标颜色',
    },
    size: {
      control: 'text',
      description: '图标大小',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <i :class="name" :style="{ color, fontSize: size }"></i>
      <p>{{name}}</p>
    </div>
  `,
});

export const Edit = Template.bind({});
Edit.args = {
  name: 'el-icon-edit',
  color: '#409EFF',
  size: '24px',
};

// 常用图标展示
const IconList = () => ({
  template: `
    <div class="icon-list">
      <div v-for="icon in icons" :key="icon" class="icon-item">
        <i :class="icon"></i>
        <span>{{icon}}</span>
      </div>
    </div>
  `,
  data() {
    return {
      icons: [
        'el-icon-edit',
        'el-icon-share',
        'el-icon-delete',
        'el-icon-search',
        'el-icon-upload',
        'el-icon-download',
        'el-icon-message',
        'el-icon-user',
        'el-icon-phone',
        'el-icon-setting',
      ],
    };
  },
});

export const CommonIcons = IconList.bind({}); 