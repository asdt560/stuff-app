<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex h-6 align-center">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink class="text-3xl font-bold underline" to="/new-item">New Item</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="p-2" />
</template>

