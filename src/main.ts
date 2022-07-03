import { createApp } from 'vue'
import App from '@/App.vue'
// 引入 Vue-Router 路由
import router from '@/router/index'
// 引入路由权限与守卫
import '@/router/permission'
// 引入 Pinia 状态管理工具
import store from '@/store/index'
// 引入屏幕适配插件
import 'amfe-flexible'
// 引入全局样式
import '@/styles/index.scss'
// 引入 element-plus UI 组件
import ElementPlus from 'element-plus'
// 引入 element-plugins UI 样式文件
import 'element-plus/dist/index.css'

// 创建实例
const app = createApp(App)
// 注册路由
app.use(router)
// 注册 Pinia 状态管理工具
app.use(store)
// 注册 element-plus 组件
app.use(ElementPlus)
app.mount('#app')
