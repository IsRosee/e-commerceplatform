<script setup>
import { useUserInfoStore, useCartStore } from '@/stores/index.js'
import { ref, watch } from 'vue'
const userInfoStore = useUserInfoStore()
const token = ref('')

watch(
  () => userInfoStore.userInfo,
  (newValue) => {
    token.value = newValue.token
  },
  { immediate: true, deep: true }
)
const confirm = () => {
  userInfoStore.removeUserInfo()
  const cartStore = useCartStore()
  cartStore.cartList = []
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="token">
          <li>
            <a href="javascript:;"
              ><el-icon size="16" style="vertical-align: top">
                <userFilled />
              </el-icon>
              {{ userInfoStore.userInfo.account }}
            </a>
          </li>
          <li>
            <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;" @click="$router.push('/member/order')">我的订单</a></li>
          <li><a href="javascript:;" @click="$router.push('/member')">个人中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
