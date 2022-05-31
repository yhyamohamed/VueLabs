<template lang="">
  <div class="col-8 offset-2">
    <table class="table table-hover table-striped">
      <thead>
        <tr class="table-info">
          <th scope="col">Name</th>
          <th scope="col">Salary</th>
          <th scope="col">Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="key,index in studentsArray" :key="key.index">
          <th scope="row">{{ key.name }}</th>
          <td>{{ key.salary }}</td>
          <td>{{ key.address }}</td>
          <td>
            <button class="btn btn-sm btn-danger" @click="deleteEntry(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "StudentComponent",
  props: ["studentsArray"],
  methods: {
    deleteEntry(ind) {
       this.$emit("deletingEntity", ind);
    },
  },
};
</script>
<style lang=""></style>
