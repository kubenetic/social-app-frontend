<template>
  <header v-if="$slots.header">
    <slot name="header"></slot>
  </header>
  <slot></slot>
  <footer v-if="$slots.footer && expandable">
    <a href="#"
       v-on:click.prevent="toggleDetails"
       class="footer-elements">{{ message }}</a>
    <slot name="footer" v-if="expanded"></slot>
  </footer>
</template>

<script>
export default {
  computed: {
    message: function () {
      if (!this.expanded) {
        return 'Show'
      } else {
        return 'Hide'
      }
    }
  },
  data: function () {
    return {
      expanded: false
    }
  },
  methods: {
    toggleDetails: function () {
      this.expanded = !this.expanded
    }
  },
  name: 'BaseCard',
  props: {
    expandable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.right-icon {
  float: right;
  margin: 2rem auto;
  border-radius: 12px;
}

.footer-elements {
  display: flex;
  float: left;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: brown;
}

div {
  margin: 2rem auto;
  max-width: 50rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

footer {
  padding: 1rem;
}
</style>
