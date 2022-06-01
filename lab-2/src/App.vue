<template>
  <Navbar />
  <div class="container mt-4 bg-light">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
