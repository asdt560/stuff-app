<script setup lang="ts">
import ItemCard from '../components/ItemCard.vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useItemsStore } from '../stores/items'

const itemsStore = useItemsStore()

const { items } = storeToRefs(itemsStore)

console.log(items.value)
</script>

<template>
  <main>
    <RouterLink v-for="(item, index) in items" :key="index" :to="{ name: 'item', params: { id: index.toString() } }">
      <ItemCard >
        <template #name>
          {{ item.name }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </ItemCard>
    </RouterLink>
  </main>
</template>
