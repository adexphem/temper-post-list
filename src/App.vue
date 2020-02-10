<template>
  <div id="app">
    <post-list></post-list>
    <action-list></action-list>
  </div>
</template>

<script>
import PostList from "./components/Posts/List";
import ActionList from "./components/Actions/List";

export default {
  name: 'App',
  components: {
    PostList,
    ActionList
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template: repeat(1, auto) / repeat(2, minmax(30rem, 50%));
  grid-gap: 8.5rem;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  padding-top: 4rem;
  align-items: start;
}
</style>
