<template>
  <h1>{{ user.username }}</h1>
  <p>{{ user.description }}</p>
  <post-list
    v-bind:posts="posts"
    title="Last Posts"></post-list>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  components: { PostList },
  name: 'AboutView',
  data: function () {
    return {
      user: {
        username: 'teszt.elek',
        description: 'Hi! I\'m the test user here!'
      },
      posts: [
        {
          id: 1,
          user: 'teszt.elek',
          date: '2022-09-21T20:00:00',
          post: 'Hello, World!'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
