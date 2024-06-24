<script setup>
import { useCartStore } from '@/stores'
const cartStore = useCartStore()
</script>
<template>
  <div class="cart" @click="$router.push('/cart')">
    <RouterLink to="/home"
      ><el-icon :size="30" style="vertical-align: bottom"><ShoppingCart /></el-icon>
      <span class="cart-num" v-show="cartStore.countTotal > 0">{{ cartStore.countTotal }}</span>
    </RouterLink>
    <div class="sharp"></div>
    <div class="productBox">
      <div class="list">
        <div class="item" v-for="i in cartStore.cartList" :key="i">
          <RouterLink to="">
            <img :src="i.picture" alt="" />
            <div class="center">
              <p class="name ellipsis-2">
                {{ i.name }}
              </p>
              <p class="attr ellipsis">{{ i.attrsText }}</p>
            </div>
            <div class="right">
              <p class="price">&yen;{{ i.price }}</p>
              <p class="count">x{{ i.count }}</p>
            </div>
          </RouterLink>
          <i class="iconfont icon-close-new" @click="cartStore.delCart(i.skuId)"></i>
        </div>
      </div>
      <div class="footer">
        <div class="total">
          <p>共 {{ cartStore.countTotal }} 件商品</p>
          <p>&yen; {{ cartStore.priceTotal }}</p>
        </div>
        <div class="btn">
          <el-button size="large" type="primary" @click="$router.push('/cart')">去购物车结算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cart {
  position: relative;
  &:hover {
    .sharp {
      display: block;
    }
    .productBox {
      display: block;
    }
  }
  .cart-num {
    color: white;
    position: absolute;
    display: inline-block;
    width: 13px;
    height: 13px;
    font-size: 7px;
    right: -3px;
    top: 0px;
    background-color: red;
    border-radius: 50%;
    text-align: center;
    line-height: 13px;
  }
  .sharp {
    width: 0;
    height: 0;
    position: absolute;
    top: 25px;
    right: 5px;
    border-bottom: 15px solid rgb(228, 228, 228);
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    display: none;
  }
  .productBox {
    width: 400px;
    height: 400px;
    background-color: rgb(228, 228, 228);
    position: absolute;
    top: 45px;
    right: 0px;
    overflow: hidden;
    display: none;
    .list {
      .item {
        width: 400px;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        margin-top: 10px;
        a {
          width: 350px;
          display: flex;
          justify-content: space-evenly;
          img {
            height: 100px;
          }
          .center {
            width: 150px;
            height: 100px;
            .name {
              margin: 10px 0px;
              color: black;
            }
            .attr {
              margin: 10px 0px;
              font-size: 12px;
            }
          }
          .right {
            width: 50px;
            height: 100px;
            text-align: center;
            margin: 30px 0px;
            .price {
              color: $priceColor;
              font-size: 16px;
            }
          }
        }
        .icon-close-new {
          line-height: 100px;
          &:hover {
            cursor: pointer;
            color: red;
          }
        }
      }
    }

    .footer {
      position: absolute;
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      bottom: 0px;
      display: flex;
      .total {
        width: 70%;
        height: 100%;
        margin-left: 50px;
        p {
          line-height: 30px;
          &:last-child {
            font-size: 18px;
            color: $priceColor;
          }
        }
      }
      .btn {
        line-height: 60px;
        margin-right: 10px;
      }
    }
  }
}
</style>
