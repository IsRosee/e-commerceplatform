//引入初始化样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import pinia from '@/stores/index.js'
//导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives/index.js'
const app = createApp(App)

//注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)

//注册懒加载插件
app.use(lazyPlugin)

app.mount('#app')
