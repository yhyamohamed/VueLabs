<template lang="">
  <form ref="addingForm">
    <div class="container col-8 row">
      <div class="input-group input-group-sm mb-3 offset-4 row">
        <label for="name" class="col-form-label col-2">name : </label>
        <div class="ms-2 col-6">
          <input
            type="text"
            class="form-control form-control-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="name"
            v-model="entityToAdd['name']"
          />
        </div>
        {{ entityToAdd["name"] }}
      </div>
      <div class="input-group input-group-sm mb-3 offset-4 row">
        <label for="Address" class="col-form-label col-2">Address : </label>
        <div class="ms-2 col-6">
          <input
            type="text"
            class="form-control form-control-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="Address"
            v-model="entityToAdd['address']"
          />
        </div>
      </div>
      <div class="input-group input-group-sm mb-3 offset-4 row">
        <label for="salary" class="col-form-label col-2">salary : </label>
        <div class="ms-2 col-6">
          <input
            type="text"
            class="form-control form-control-sm"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="salary"
            v-model="entityToAdd['salary']"
          />
        </div>
      </div>
    </div>
    <div class="offset-4 col-2">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="isadmin"
          value="Admin"
          v-model="entityToAdd['type']"
        />
        <label class="form-check-label" for="Admin"> Admin </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="isadmin"
          value="student"
          v-model="entityToAdd['type']"
          checked
        />
        <label class="form-check-label" for="student"> Student </label>
      </div>
    </div>

    <button class="btn btn-sm btn-success col-5 m-1 mt-4" @click="addEntity">
      Add
    </button>
  </form>
</template>
<script>
export default {
  name: "formComponent",
  data() {
    return {
      entityToAdd: { name: " ", salary: 0, address: "", type: null },
    };
  },
  methods: {
    addEntity(e) {
      e.preventDefault();
        this.$refs.addingForm.reset();
      this.$emit("addingEntity", this.entityToAdd);
    },
  },
};
</script>
<style lang=""></style>
