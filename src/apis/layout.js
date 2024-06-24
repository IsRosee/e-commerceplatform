import request from '@/utils/request'

export const getCategoryService = () => {
  return request.get('/home/category/head')
}
