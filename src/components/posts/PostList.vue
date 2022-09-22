<template>
  <h2 v-if="title">{{ title }}</h2>
  <single-post
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:post="post"/>
</template>

<script>
import SinglePost from '@/components/posts/SinglePost'

export default {
  name: 'PostList',
  components: { SinglePost },
  props: {
    title: String,
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
