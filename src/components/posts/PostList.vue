<template>
  <div class="post-list">
    <single-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"/>
  </div>
</template>

<script>
import SinglePost from '@/components/posts/SinglePost'
export default {
  name: 'PostList',
  components: { SinglePost },
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
