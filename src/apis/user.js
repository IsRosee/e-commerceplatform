import request from '@/utils/request'

// 登录
export const login = (data) => {
  return request.post('/login', data)
}
//猜你喜欢
export const getLikeListService = () => {
  return request.get('/goods/relevant', { params: { limit: 4 } })
}
