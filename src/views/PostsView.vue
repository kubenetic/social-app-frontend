<template>
  <div class="posts">
    <h1>Posts</h1>
    <post-list
      v-bind:posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  name: 'PostsView',
  components: { PostList },
  data: function () {
    return {
      posts: [
        {
          id: 1,
          user: 'teszt.elek',
          date: '2022-09-21T20:00:00',
          post: 'Hello, World!'
        },
        {
          id: 2,
          user: 'cserepes.virag',
          date: '2022-09-20T22:00:00',
          post: 'Hello, Világ!'
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>
