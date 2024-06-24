<script setup>
import { watch } from 'vue'
import { useCategoryListStore } from '@/stores/index'
// 获取分类列表
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})
const categoryListStore = useCategoryListStore()
categoryListStore.getCategoryList(props.id)
watch(
  () => props.id,
  (newId) => {
    categoryListStore.getCategoryList(newId)
  }
)
</script>

<template>
  <!-- 面包屑 -->
  <div class="bread-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryListStore.categoryList.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.bread-container {
  padding: 25px 0;
}
</style>
