import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore(
  'userInfo',
  () => {
    const userInfo = ref({})
    const setUserInfo = (Info) => {
      // 设置用户信息
      userInfo.value = Info
    }
    const removeUserInfo = () => {
      // 移除用户信息
      userInfo.value = {}
    }
    return {
      userInfo,
      setUserInfo,
      removeUserInfo
    }
  },
  {
    persist: true
  }
)
