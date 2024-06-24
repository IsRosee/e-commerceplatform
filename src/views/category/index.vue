<script setup>
import { ref, watch } from 'vue'

import CategoryBread from './components/CategoryBread.vue'
import CategoryList from './components/CategoryList.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

let id = ref(route.params.id)
watch(
  () => route.params.id,
  (newId) => {
    id.value = newId
  }
)
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <CategoryBread :id="id"></CategoryBread>
      <!-- 轮播图 -->
      <HomeBanner char="2"></HomeBanner>
      <!--  -->
      <CategoryList></CategoryList>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
}
</style>
