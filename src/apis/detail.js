import request from '@/utils/request'

// 获取商品详情
export const getGoodsDetailService = (id) => {
  return request.get('/goods', { params: { id } })
}

export const getHotGoodsService = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
