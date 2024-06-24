<script setup>
import { getCategoryFilterService, getSubCategoryService } from '@/apis/category.js'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/components/GoodsItem.vue'
//获取面包屑导航数据
const categoryFilter = ref({})
const route = useRoute()
const id = route.params.id
const getCategoryFilter = async () => {
  const res = await getCategoryFilterService(id)
  categoryFilter.value = res.result
}
getCategoryFilter()

// 商品列表
const goodList = ref([])
const data = ref({ id: route.params.id, page: 1, pageSize: 20, sortField: 'publishTime' })
const getSubCategory = async () => {
  const res = await getSubCategoryService(data.value)
  goodList.value = res.result.items
}
getSubCategory()

//判断是否继续加载
const disabled = ref(false)

// 切换排序
const tabChange = () => {
  disabled.value = false
  data.value.page = 1
  getSubCategory()
}
//无限加载

const load = async () => {
  data.value.page++
  const res = await getSubCategoryService(data.value)
  goodList.value = [...goodList.value, ...res.result.items]
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryFilter.parentId}` }"
          >{{ categoryFilter.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryFilter.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodList" :good="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
