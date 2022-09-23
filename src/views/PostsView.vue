<template>
  <div class="posts">
    <h1>Posts</h1>
    <post-list
      v-bind:posts="posts"/>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  name: 'PostsView',
  components: { PostList },
  computed: {
    posts: function () {
      return this.$store.getters['postStore/posts']
    }
  }
}

</script>

<style scoped>

</style>
