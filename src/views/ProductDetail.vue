<template>
  <div>
    <h1>Chi tiết sản phẩm</h1>
    <div v-if="product">
      <img :src="product.image" alt="" width="200" />
      <h2>{{ product.name }}</h2>
      <p>Giá: {{ product.price }} VND</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const product = ref(null);
const route = useRoute();

onMounted(() => {
  const products = JSON.parse(localStorage.getItem("products"));
  product.value = products.find((p) => p.id === parseInt(route.params.id));
});
</script>

<style scoped></style>
