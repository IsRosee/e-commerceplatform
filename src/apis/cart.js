import request from '@/utils/request'

// 添加商品到购物车
export const addToCartService = ({ skuId, count }) => {
  return request.post('/member/cart', { skuId, count })
}
// 获取购物车列表
export const getCartListService = () => {
  return request.get('/member/cart')
}
//删除购物车商品
export const delCartService = (ids) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
//修改商品数量
export const updateCartService = ({ skuId, count, selected }) => {
  console.log(count)
  return request.put(`/member/cart/${skuId}`, { count, selected })
}
//合并购物车
export const mergeCartService = (data) => {
  return request({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
