<template lang="">
  <form ref="addingForm" class="p-3">
    <button class="btn btn-sm btn-primary" @click="goBack">Back</button>
    <div class="container col-8 row">
      <div class="input-group input-group-sm mb-3 offset-4 row">
        <label for="name" class="col-form-label col-2">ID : </label>
        <div class="ms-2 col-6">
          <input
            type="number"
            class="form-control form-control-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="id"
            v-model="entityToAdd['id']"
          />
        </div>
        {{ entityToAdd["id"] }}
      </div>
      <div class="input-group input-group-sm mb-3 offset-4 row">
        <label for="Address" class="col-form-label col-2">Title : </label>
        <div class="ms-2 col-6">
          <input
            type="text"
            class="form-control form-control-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="title"
            v-model="entityToAdd['title']"
          />
        </div>
      </div>
      <div class="input-group input-group-sm mb-3 offset-4 row">
        <label for="salary" class="col-form-label col-2">body : </label>
        <div class="ms-2 col-6">
          <input
            type="text"
            class="form-control form-control-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="body"
            v-model="entityToAdd['body']"
          />
        </div>
      </div>
    </div>

    <button
      class="btn btn-sm btn-success col-4 offset-4 mt-4"
      @click="addEntity"
    >
      Add
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      entityToAdd: {},
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "all-posts" });
    },
    addEntity(e) {
          e.preventDefault();
      fetch("http://localhost:5000/Posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.entityToAdd),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push({ name: "all-posts" });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
<style lang=""></style>
