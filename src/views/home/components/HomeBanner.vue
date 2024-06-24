<script setup>
import { ref } from 'vue'
import { getBannerListService } from '@/apis/home'
const bannerList = ref([])
const distributionSite = ref('0')
const props = defineProps({
  char: {
    type: String,
    default: '0'
  }
})
distributionSite.value = props.char
const getBannerList = async () => {
  const res = await getBannerListService(distributionSite.value)
  bannerList.value = res.result
}
getBannerList()
</script>

<template>
  <div :class="{ 'home-banner1': distributionSite === '1', 'home-banner2': distributionSite === '2' }">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner1 {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
.home-banner2 {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>
