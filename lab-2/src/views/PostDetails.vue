<template lang="">
  <div class="col" v-if="post">
    <div class="card border-primary mb-3">
      <div class="card-header">Post No.{{ id }}</div>
      <div class="card-body text-primary">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.body.slice(0, 250) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],

  data() {
    return {
      post: null,
    };
  },
  watch: {
    id() {
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(`http://localhost:5000/Posts/${this.id}`)
        .then((res) => res.json())
        .then((data) => {
          this.post = data;
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
<style lang=""></style>
