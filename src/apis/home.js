import request from '@/utils/request'
export const getBannerListService = (distributionSite) => {
  return request.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}
export const getNewListService = () => {
  return request.get('/home/new', {
    params: {
      limit: 4
    }
  })
}
export const getHotListService = () => {
  return request.get('/home/hot')
}
export const getProductListService = () => {
  return request.get('/home/goods')
}
