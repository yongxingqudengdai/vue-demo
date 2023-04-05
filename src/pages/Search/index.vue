<template>
  <div>
    <h1>Search.vue</h1>
    <h2>params:{{ $route.params.keyword }}</h2>
    <h3>query:{{ $route.query.k }}</h3>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
</style>