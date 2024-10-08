<template>
  <div>
    <input type="text" v-model="keySearch" />
    <button @click="handleSearch">tìm kiếm</button>
    <p>Value: {{ valueSearch }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const keySearch = ref("");
const handleSearch = () => {
  router.push(`/search?q=${keySearch.value}`);
};

const valueSearch = computed(() => {
  return route.query.q;
});
</script>

<style></style>
