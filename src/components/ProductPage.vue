<template>
  <div>
    <div>
      <div>
        <h2>Danh sách sản phẩm</h2>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>STT</th>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Tác vụ</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{index + 1}}</td>
          <td>{{product.name}}</td>
          <td>{{product.cost | formatMoney(sign)}}</td>
          <td>
            <button
              class="btn add"
              @click="cart.includes(product) != true? cart.unshift(product):null"
            >Mua</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products", "cart", "sign"]
};
</script>
<style scoped>
</style>