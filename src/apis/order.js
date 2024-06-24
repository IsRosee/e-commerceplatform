import request from '@/utils/request'

// 获取结算信息
export const getCheckInfoService = () => {
  return request.get('/member/order/pre')
}

//添加收货地址
export const addAddressService = (data) => {
  return request.post('/member/address', data)
}

//提交订单
export const submitOrderService = (data) => {
  return request.post('/member/order', data)
}

//获取订单详情
export const getUserOrderService = ({ orderState, page, pageSize }) => {
  return request({
    url: '/member/order',
    params: {
      orderState,
      page,
      pageSize
    }
  })
}
