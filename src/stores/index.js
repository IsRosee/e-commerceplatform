import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
//持久化
pinia.use(persist)

export default pinia

export * from './modules/category'
export * from './modules/user'
export * from './modules/cart'
