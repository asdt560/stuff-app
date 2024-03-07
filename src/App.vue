<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex items-center">
      <nav class="flex items-center">
        <RouterLink 
          class="text-2xl p-2 font-bold text-green-700 hover:bg-green-700 hover:text-white" 
          to="/">Home</RouterLink>
        <RouterLink 
          class="text-2xl p-2 font-bold text-green-700 hover:bg-green-700 hover:text-white" 
          to="/about">About</RouterLink>
        <RouterLink 
          class="text-2xl p-2 font-bold text-green-700 hover:bg-green-700 hover:text-white" 
          to="/new-item">New Item</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="p-2" />
</template>

