<template>
  <base-card v-bind:expandable="post.comments && post.comments.length > 0">
    <template v-slot:header>
      <h3>{{ postTitle }}</h3>
    </template>

    <template v-slot:default>
      {{ post.post }}
    </template>

    <template v-slot:footer>
      <base-card
        v-for="comment in post.comments"
        v-bind:key="comment.id"
        v-bind:expandable="false">
        {{ comment.post }}
      </base-card>
    </template>
  </base-card>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard'

export default {
  name: 'SinglePost',
  components: { BaseCard },
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
