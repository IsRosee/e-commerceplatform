import request from '@/utils/request'

export const getOrderInfoService = (id) => {
  return request.get(`/member/order/${id}`)
}
