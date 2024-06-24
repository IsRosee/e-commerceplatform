import { ref, computed } from 'vue'
import dayjs from 'dayjs'

//封装倒计时函数
export const createCountDown = (order) => {
  //响应式数据
  const time = ref(order.countdown)
  //格式化时间
  const formatTime = computed(() => {
    return dayjs.unix(time.value).format('mm分ss秒')
  })
  //开启倒计时的函数
  const start = () => {
    //设置定时器
    let timer = setInterval(() => {
      //当前时间减去1
      time.value--
      //当时间为0时，清除定时器
      if (time.value <= 0) {
        clearInterval(timer)
        time.value = 0 // 确保不变成负数
      }
    }, 1000)
  }
  start()
  // 将格式化时间和当前时间绑定到订单对象
  order.formatTime = formatTime
}
