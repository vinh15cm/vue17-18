<template>
  <div>
    <h1>settings</h1>
    <form @submit.prevent="saveChanges">
      <label for="fullName">Họ và tên:</label>
      <input v-model="formData.fullName" id="fullName" />

      <label for="email">Email:</label>
      <input v-model="formData.email" id="email" />

      <button type="submit">Lưu thay đổi</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";

const router = useRouter();

const formData = ref({
  fullName: "",
  email: "",
});

const initialData = ref({
  fullName: "",
  email: "",
});

const loadInitialData = () => {
  initialData.value = {
    fullName: "Phạm Trung Hiếu",
    email: "ptrunghieu2507@gmail.com",
  };

  formData.value = { ...initialData.value };
};

onMounted(() => {
  loadInitialData();
});

const saveChanges = () => {
  initialData.value = { ...formData.value };
  alert("Đã lưu thay đổi!");
};

const isFormChanged = () => {
  return (
    formData.value.fullName !== initialData.value.fullName ||
    formData.value.email !== initialData.value.email
  );
};

// Sử dụng `onBeforeRouteLeave` để cảnh báo người dùng nếu form có thay đổi chưa được lưu
onBeforeRouteLeave((to, from, next) => {
  if (isFormChanged()) {
    const answer = window.confirm(
      "Bạn có chắc chắn muốn rời khỏi trang khi chưa lưu thay đổi?"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

label {
  margin-top: 10px;
}
</style>
