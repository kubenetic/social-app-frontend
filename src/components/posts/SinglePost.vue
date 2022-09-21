<template>
  <div class="single-post">
    <h3>{{ postTitle }}</h3>
    <p>{{ post.post }}</p>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  computed: {
    postTitle: function () {
      return `${this.post.user} @ ${this.post.date}`
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
