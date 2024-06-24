import request from '@/utils/request'

// 获取分类列表
export const getCategoryListService = (id) => {
  return request.get('/category', { params: { id } })
}
//二级面包屑
export const getCategoryFilterService = (id) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
/* @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryService = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
