<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Lab-2</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'all-posts' }"
              >All-Posts</router-link
            >
          </li>
               <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'new-post' }"
              >New-post</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to=""
              >About-Us</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style lang=""></style>
