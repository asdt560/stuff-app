<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 2rem;
  display: flex;
  align-items: center;
}

nav {
    display: flex;
    gap: 1rem;
}

a {
  all: unset;
  font-size: 1.25rem;
  color: green;
  cursor: pointer;
  padding: 0.5rem
}

a:hover {
  color: #fff;
  background: green;
}

</style>
