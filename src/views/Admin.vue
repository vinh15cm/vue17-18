<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link
            to="/admin/manager-user"
            class="link"
            active-class="active"
            >User</router-link
          >
        </li>
        <li>
          <router-link
            to="/admin/manager-product"
            class="link"
            active-class="active"
            >Product</router-link
          >
        </li>
        <li>
          <router-link to="/admin/settings" class="link" active-class="active"
            >Settings</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 15px;
}

.link {
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  color: #000;
}

.active {
  background-color: red;
  color: white;
}
</style>
