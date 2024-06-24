<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getHotGoodsService } from '@/apis/detail'
import GoodsItem from '@/components/GoodsItem.vue'

const HotGoods = ref({})
const route = useRoute()
const props = defineProps({
  type: {
    type: Number,
    default: 1
  }
})

const getHotGoods = async () => {
  const res = await getHotGoodsService({ id: route.params.id, type: props.type })
  HotGoods.value = res.result
}
getHotGoods()
</script>

<template>
  <div class="goods-hot">
    <h3>{{ props.type === 1 ? '24小时热销榜' : '周热销榜' }}</h3>
    <!-- 商品区块 -->
    <div class="goods-item" v-for="item in HotGoods" :key="item.id">
      <GoodsItem :good="item"></GoodsItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;
  }
}
</style>
