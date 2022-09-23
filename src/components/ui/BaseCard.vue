<template>
  <div class="card">
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="main">
      <slot></slot>
    </div>

    <div class="footer" v-if="$slots.footer && expandable">
      <div class="align-right">
        <a href="#"
           v-on:click.prevent="toggleDetails"
           class="footer-elements">{{ message }}</a>
      </div>

      <slot name="footer" v-if="expanded"></slot>
    </div>
  </div>
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
.card {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.header {
  color: var(--text-dark);
}

.main {
  padding: 0 10px;
  border-left: 1px solid var(--night-blue);
}

.footer {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.align-right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
