import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/stores'
import { addToCartService, getCartListService, delCartService, mergeCartService } from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const useInfoStore = useUserInfoStore()
    const isLogin = computed(() => useInfoStore.userInfo.token)
    //获取购物车列表
    const getCartList = async () => {
      const res = await getCartListService()
      cartList.value = res.result
    }
    //添加购物车
    const addCart = async (goods) => {
      if (isLogin.value) {
        // 已登录 - 直接添加到购物车
        await addToCartService({ skuId: goods.skuId, count: goods.count })
        getCartList()
      } else {
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          // 找到了
          item.count += goods.count
        } else {
          // 没找到
          cartList.value.push(goods)
        }
      }
    }
    //删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartService([skuId])
        getCartList()
      } else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }
    }
    //修改商品数量
    const modifyCart = async (skuId, count, selected) => {
      if (isLogin.value) {
        console.log(count, selected)
        await addToCartService({ skuId, count, selected })
        getCartList()
      } else {
        const item = cartList.value.find((item) => skuId === item.skuId)
        item.count = count
      }
    }
    //商品总量和总价
    const countTotal = computed(() => cartList.value.reduce((pre, item) => pre + item.count, 0))
    const priceTotal = computed(() => cartList.value.reduce((pre, item) => pre + item.count * item.price, 0).toFixed(2))
    //单选
    const checkState = (skuId) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = !item.selected
    }
    //全选和全不选功能
    const allCheck = (val) => {
      cartList.value.forEach((item) => (item.selected = val))
    }
    //是否全选
    const isAllCheck = computed(() => cartList.value.every((item) => item.selected))
    //已选择商品数量
    const selectedCount = computed(() =>
      cartList.value.reduce((pre, item) => {
        return pre + (item.selected ? item.count : 0)
      }, 0)
    )
    //已选择商品价格
    const selectedPrice = computed(() =>
      cartList.value.reduce((pre, item) => pre + (item.selected ? item.count * item.price : 0), 0).toFixed(2)
    )

    //合并购物车
    const mergeCart = async () => {
      if (isLogin.value) {
        await mergeCartService(
          cartList.value.map((item) => {
            return {
              skuId: item.skuId,
              count: item.count,
              selected: item.selected
            }
          })
        )
        getCartList()
      }
    }
    return {
      cartList,
      addCart,
      delCart,
      countTotal,
      priceTotal,
      checkState,
      allCheck,
      isAllCheck,
      selectedCount,
      selectedPrice,
      getCartList,
      modifyCart,
      mergeCart
    }
  },
  { persist: true }
)
