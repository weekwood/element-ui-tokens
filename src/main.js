import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'

// 样式导入顺序很重要
import 'element-ui/lib/theme-chalk/index.css'  // 1. Element UI 的基础样式
import './styles/tokens.css'                   // 2. 设计令牌
import './styles/element-override.scss'        // 3. Element UI 的样式覆盖
import './styles/utilities.scss'               // 4. 工具类

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
