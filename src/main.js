import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'

// 引入样式
import './styles/tokens.css'
import './styles/element-override.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
