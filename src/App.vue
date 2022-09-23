<template>
  <navigation-bar/>
  <router-view />
</template>

<script>
import NavigationBar from '@/components/ui/NavigationBar'

export default {
  components: { NavigationBar }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  padding-top: 5.5vh;
  padding-left: 10%;
}
</style>
