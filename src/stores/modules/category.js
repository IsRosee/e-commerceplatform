import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryService } from '@/apis/layout'
import { getCategoryListService } from '@/apis/category'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryService()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategory
  }
})
export const useCategoryListStore = defineStore('categoryList', () => {
  const categoryList = ref({})
  const getCategoryList = async (id) => {
    const res = await getCategoryListService(id)
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategoryList
  }
})
