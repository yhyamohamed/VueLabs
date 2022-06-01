<template lang="">
  <div class="row">
    <div class="col-7 offset-1" v-if="posts">
      <table class="table table-hover table-striped">
        <thead>
          <tr class="table-info">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post,index in posts" :key="post.id">
            <th scope="row">{{ post.id }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.body.slice(0, 20) }}...</td>
            <td style="white-space: nowrap">
              <router-link
                class="btn btn-sm btn-primary me-1"
                :to="{ name: 'show', params: { id: post.id } }"
              >
                Details</router-link
              >
              <button
                class="btn btn-sm btn-danger"
                @click="deleteEntry(post.id,index)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <RouterView />
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    deleteEntry(id,index) {
        this.posts.splice(index,1)
    //   fetch(`http://localhost:5000/Posts/${id}`, { method: "DELETE" })
    //     .then((res) => {
    //       res.json();
    //       this.fetchData();
    //     })
    //     .catch((err) => console.log(err.message));
    },
    fetchData() {
      fetch("http://localhost:5000/Posts")
        .then((res) => res.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
<style lang=""></style>
