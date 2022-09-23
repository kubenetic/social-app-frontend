<template>
  <div v-if="user">
    <h1>{{ user.username }}</h1>
    <p>{{ user.description }}</p>
    <post-list
      v-bind:posts="posts"
      title="Last Posts"></post-list>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  components: { PostList },
  computed: {
    user: function () {
      return this.$store.getters['userStore/getUserById'](this.userid)
    },
    posts: function () {
      return this.$store.getters['postStore/userPosts'](this.user.username)
    }
  },
  name: 'AboutView',
  props: {
    userid: String
  }
}
</script>

<style scoped>

</style>
