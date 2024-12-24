import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Element UI/Others/Carousel',
  component: 'el-carousel',
  argTypes: {
    height: { control: 'text' },
    autoplay: { control: 'boolean' },
    interval: { control: 'number' },
    type: {
      control: { type: 'select' },
      options: ['card'],
    },
    arrow: {
      control: { type: 'select' },
      options: ['always', 'hover', 'never'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <el-carousel v-bind="$props">
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="
          height: 100%;
          background-color: #99a9bf;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 18px;
        ">
          {{ item }}
        </div>
      </el-carousel-item>
    </el-carousel>
  `,
});

export const Default = Template.bind({});
Default.args = {
  height: '300px',
};

export const Card = Template.bind({});
Card.args = {
  height: '300px',
  type: 'card',
}; 