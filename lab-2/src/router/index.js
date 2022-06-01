import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'
import CreatePost from '../views/CreatePost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Welcome,
    },

    {
      path: "/posts",
      name: "all-posts",
      component: Posts,
      props: true,
      children: [
        {
          path: ":id",
          name: "show",
          component: PostDetails,
          props: true,
        },
      ],
    },
    {
      path: "/post",
      name: "new-post",
      component: CreatePost,
    },
  ],
});

export default router
