import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Basic/Border',
  parameters: {
    docs: {
      description: {
        component: '边框样式展示',
      },
    },
  },
};

const Template = () => ({
  template: `
    <div class="border-demo">
      <div class="border-item">
        <div class="border-radius-base">基础圆角</div>
        <p>border-radius: var(--radius-base)</p>
      </div>
      <div class="border-item">
        <div class="border-radius-small">小圆角</div>
        <p>border-radius: var(--radius-sm)</p>
      </div>
      <div class="border-item">
        <div class="border-radius-large">大圆角</div>
        <p>border-radius: var(--radius-lg)</p>
      </div>
      <div class="border-item">
        <div class="border-radius-circle">圆形</div>
        <p>border-radius: var(--radius-full)</p>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});

// 添加必要的样式
const style = document.createElement('style');
style.textContent = `
  .border-demo {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .border-item {
    text-align: center;
  }
  .border-item > div {
    width: 100px;
    height: 100px;
    background: var(--color-primary-500);
    margin-bottom: 10px;
  }
  .border-radius-base {
    border-radius: var(--radius-base);
  }
  .border-radius-small {
    border-radius: var(--radius-sm);
  }
  .border-radius-large {
    border-radius: var(--radius-lg);
  }
  .border-radius-circle {
    border-radius: var(--radius-full);
  }
`;
document.head.appendChild(style); 