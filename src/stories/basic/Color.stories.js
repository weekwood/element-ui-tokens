import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  title: 'Basic/Color',
  parameters: {
    docs: {
      description: {
        component: '色彩系统展示',
      },
    },
  },
};

const Template = () => ({
  template: `
    <div class="color-demo">
      <section>
        <h3>主色</h3>
        <div class="color-list">
          <div class="color-item" v-for="level in [50,100,200,300,400,500,600,700,800,900,950]" :key="level">
            <div class="color-block" :style="{ background: \`var(--color-primary-\${level})\` }"></div>
            <div class="color-text">
              <p>Primary {{level}}</p>
              <code>var(--color-primary-{{level}})</code>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>功能色</h3>
        <div class="color-list">
          <template v-for="type in ['success', 'warning', 'error', 'info']">
            <div class="color-item" v-for="level in [50,100,200,300,400,500,600,700,800,900,950]" :key="type + level">
              <div class="color-block" :style="{ background: \`var(--color-\${type}-\${level})\` }"></div>
              <div class="color-text">
                <p>{{type}} {{level}}</p>
                <code>var(--color-{{type}}-{{level}})</code>
              </div>
            </div>
          </template>
        </div>
      </section>
    </div>
  `,
});

export const Default = Template.bind({});

// 添加必要的样式
const style = document.createElement('style');
style.textContent = `
  .color-demo section {
    margin-bottom: 40px;
  }
  .color-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  .color-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .color-block {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-base);
    margin-right: 12px;
  }
  .color-text {
    font-size: 14px;
  }
  .color-text p {
    margin: 0;
    font-weight: 500;
  }
  .color-text code {
    font-size: 12px;
    color: var(--color-text-secondary);
  }
`;
document.head.appendChild(style); 