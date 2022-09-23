<template>
  <navigation-bar/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import NavigationBar from '@/components/ui/NavigationBar'

export default {
  components: { NavigationBar }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;

  display: flex;
  flex-direction: column;
}

main {
  padding: 0 10px;
}
</style>
